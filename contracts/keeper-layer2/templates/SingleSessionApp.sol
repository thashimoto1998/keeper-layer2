pragma solidity >=0.5.0 <0.6.0;
import "../lib/PbApp.sol";
import "../lib/LibSignature.sol";
import "./ISingleSession.sol";

contract SingleSessionApp is ISingleSession {

    struct AppInfo {
        uint nonce;
        address[] players;
        uint seqNum;
        uint timeout;
        uint deadline;
        AppStatus status;
    }

    AppInfo internal appInfo;

    constructor(
        address[] memory _players,
        uint _nonce,
        uint _timeout
    )
        public
    {
        appInfo.nonce = _nonce;
        appInfo.players = _players;
        appInfo.timeout = _timeout;
        appInfo.seqNum = 0;
        appInfo.status = AppStatus.IDLE;
    }

    /**
     * @dev check if the app has been finalized
     */
    modifier notFinalized() {
        require(appInfo.status != AppStatus.FINALIZED, "app state is finalized");
        _;
    }

    /**
     * @notice Update state according to an off-chain state proof
     * @param _state Signed off-chain app state
     * @return True if update succeeds
     */
    function updateByState(bytes memory _state) internal returns (bool);

    /**
     * @notice Submit and settle off-chain state
     * @param _stateProof Serialized off-chain state with signatures
     */
    function intendSettle(bytes calldata _stateProof) external notFinalized() {
        PbApp.StateProof memory stateProof = PbApp.decStateProof(_stateProof);
        require(verifySignature(stateProof.appState, stateProof.sigs), "invalid signature");
        PbApp.AppState memory appstate = PbApp.decAppState(stateProof.appState);
        require(appstate.nonce == appInfo.nonce, "nonce not match");
        require(appInfo.seqNum < appstate.seqNum, "invalid sequence number");
        appInfo.seqNum = appstate.seqNum;
        appInfo.status = AppStatus.SETTLE;
        appInfo.deadline = block.number + appInfo.timeout;

        require(updateByState(appstate.state), "state update failed");
        emit IntendSettle(appInfo.seqNum);
    }

    /**
     * @notice get app status
     */
    function getStatus() external view returns (AppStatus) {
        return appInfo.status;
    }

    /**
     * @notice get app sequence number
     */
    function getSeqNum() external view returns (uint) {
        return appInfo.seqNum;
    }

    /**
     * @dev Verify off-chain state signatures
     * @param _state Serialized off-chain state
     * @param _sigs Signatures from the two players
     * @return True if all signatures are valid
     */
    function verifySignature(bytes memory _state, bytes[] memory _sigs)
        internal
        view
        returns (bool)
    {
        require(_sigs.length == appInfo.players.length, "invalid number of signatures");
        address[] memory signers = LibSignature.recoverSigners(_state, _sigs, false);
        for (uint i = 0; i < appInfo.players.length; i++) {
            if (appInfo.players[i] != signers[i]) {
                return false;
            }
        }
        return true;
    }

}