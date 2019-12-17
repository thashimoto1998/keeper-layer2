pragma solidity >=0.5.0 <0.6.0;
import "../templates/SingleSessionBooleanOutcome.sol";
import {DIDRegistry} from "./DIDRegistry.sol";
import "../templates/ISecretStore.sol";

contract AccessSecretRegistry is SingleSessionBooleanOutcome, ISecretStore{
    mapping(bytes32 => mapping (address => bool)) private documentPermissionsState;
    address player1;
    address player2;
    uint8 key;
    mapping (bytes32 => uint8) private keyList;
    mapping (uint8 => bytes32) private didList;
    mapping (bytes32 => address) private didRegistryAddressList;
   
    constructor(
        address[] memory _players,
        uint _nonce, 
        uint _timeout,
        bytes32 _did,
        address _didRegistryAddress
    )
        public
        SingleSessionBooleanOutcome(_players, _nonce, _timeout)
    {
        player1 = _players[0];
        player2 = _players[1]; 
        key = 0;
        setDID(_did, _didRegistryAddress);
    }

    event settedDID(
        bytes32 did
    );

    /**
     *  @notice Get the app outcome
     *  @param _query Query args _query is key of didList
     *  @return True if query satisfied
     */
    function getOutcome(bytes calldata _query) external view returns (bool) {
        require(_query.length == 1, "invalid query length");
        uint8 query = uint8(_query[0]);
        bytes32 did = didList[query];
        return (documentPermissionsState[did][player1] == true || documentPermissionsState[did][player2] == true);
    }

    /**
     *  @notice Update state according to an off-chain state proof
     *  @param _state Signed off-chain app state is key of didList 
     *  @return True if update success
     */
    function updateByState(bytes memory _state) internal returns (bool) {
        require(_state.length == 1, "invalid state length");
        require(msg.sender == player1 || msg.sender == player2, "msg.sender is not channel peer");
        uint8 state = uint8(_state[0]);
        require(state < key && state >= 0, "invalid state");
        bytes32 did = didList[state];
        address didRegistryAddress = didRegistryAddressList[did];
        if(DIDRegistry(didRegistryAddress).isDIDOwnerOrProvider(player1, did)){
            documentPermissionsState[did][player2] = true;
            appInfo.status = AppStatus.FINALIZED;
            return true;
        } else if(DIDRegistry(didRegistryAddress).isDIDOwnerOrProvider(player2, did)){
            documentPermissionsState[did][player1] = true;
            appInfo.status = AppStatus.FINALIZED;
            return true;
        } else {
            return false;
        }
    }

    /**
     *  @notice Set did to didList
     *  @param _did (bytes32)
     *  @param _didRegistryAddress (address)
     */
    function setDID(bytes32 _did, address _didRegistryAddress) public  {
        require((key == 0 && appInfo.status == AppStatus.IDLE) || ( key > 0 && appInfo.status == AppStatus.FINALIZED), "appInfo.status is not correct");
        require(msg.sender == player1 || msg.sender == player2, "msg.sender is not player1 and player2");
        require(DIDRegistry(_didRegistryAddress).isDIDOwnerOrProvider(msg.sender, _did), "msg.sender is not didOwner");
        didList[key] = _did;
        keyList[_did] = key;
        didRegistryAddressList[_did] = _didRegistryAddress;
        key += 1;
        appInfo.status = AppStatus.IDLE;
        emit settedDID(_did);
    }

    /**
     * @notice get did by key
     * @param _key (uint8)
     * @return did (bytes32)
     */
    function getDID(uint8 _key) public view returns (bytes32) {
        return didList[_key];
    }

    /**
     * @notice get key of didList
     * @param _did (bytes32)
     * @return key (uint8)
     */
    function getKeyDID(bytes32 _did) public view returns (uint8) {
        return keyList[_did];
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