pragma solidity >=0.5.0 <0.6.0;
import "../templates/SingleSessionBooleanOutcome.sol";
import {DIDRegistry} from "./DIDRegistry.sol";
import "../templates/ISecretStore.sol";

contract AccessSecretRegistry is SingleSessionBooleanOutcome, ISecretStore{
    mapping(bytes32 => mapping (address => bool)) private documentPermissionsState;
    address player1;
    address player2;
    bytes32 did;
    address didRegistryAddress;

    constructor(
        address[] memory _players1,
        uint _nonce,
        uint _timeout,
        bytes32 _did,
        address _didRegistryAddress
    )
        public
        SingleSessionBooleanOutcome(_players1, _nonce, _timeout)
    {
        player1 = _players1[0];
        player2 = _players1[1]; 
        did = _did;
        didRegistryAddress = _didRegistryAddress;
    }

    event grantPermissionState (
        bytes32 did,
        address grantee
    );

    /**
        @notice convert bytes to bytes32
     */
    function bytesToBytes32(bytes memory b) internal pure returns (bytes32 v) {
        require(b.length == 32);
        assembly { v := mload(add(b, 32)) }
    }

    /**
     *  @notice Get the app outcome
     *  @param _query Query args _query = did
     *  @return True if query satisfied
     */
    function getOutcome(bytes calldata _query) external view returns (bool) {
        require(_query.length == 0, "invalid query length");
        return (documentPermissionsState[did][player1] == true || documentPermissionsState[did][player2] == true);
    }

    /**
     *  @notice Update state according to an off-chain state proof
     *  @param _state Signed off-chain app state 1 or 0
     *  @return True if update success
     */
    function updateByState(bytes memory _state) internal returns (bool) {
        require(_state.length == 1, "invalid state length");
        require(msg.sender == player1 || msg.sender == player2, "msg.sender is not channel peer");
        uint state = uint8(_state[0]);
        require(state == 1 || state == 0, "state must be 1 or 0");
        address grantee;
        if (DIDRegistry(didRegistryAddress).isDIDOwnerOrProvider(player1, did)){
            grantee = player2;
        } else {
            grantee = player1;
        }
        if (state == 1) {
            documentPermissionsState[did][grantee] = true;
        } else {
            documentPermissionsState[did][grantee] = false;
        }
        appInfo.status = AppStatus.FINALIZED;
        return true;
    }

    /**
     *  @notice checkPermissions is called by Parity secret store
     *  @param _documentId refers to the DID in which secret store will issue the decryption keys
     *  @param _grantee is the address of the granted user of the DID provider
     *  @return true if the access was granted
     */
    function checkPermissions(
        address _grantee,
        bytes32 _documentId
    )
        external view
        returns (bool permissionGranted)
    {
        return documentPermissionsState[_documentId][_grantee] == true;
    }

}