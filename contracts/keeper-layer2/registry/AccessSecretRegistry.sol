pragma solidity >=0.5.0 <0.6.0;
import "../templates/SingleSessionBooleanOutcome.sol";
import {DIDRegistry} from "./DIDRegistry.sol";
import "../templates/IAccessSecretRegistry.sol";

contract AccessSecretRegistry is SingleSessionBooleanOutcome, IAccessSecretRegistry{
    mapping(bytes32 => mapping(address => bool)) private documentPermissionsState;
    address private owner;
    address private grantee;
    int8 private key;
    mapping (bytes32 => int8) private keyList;
    mapping (int8 => bytes32) private didList;
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
        key = 0;
        bool isPlayer0 = DIDRegistry(_didRegistryAddress).isDIDOwnerOrProvider(_players[0], _did);
        bool isPlayer1 = DIDRegistry(_didRegistryAddress).isDIDOwnerOrProvider(_players[1], _did);
        address thisAddress = address(this);
        
        require(isPlayer0 == true || isPlayer1 == true, "invalid did owner");

        DIDRegistry(_didRegistryAddress).setAccessSecretRegistry(thisAddress);

        if (isPlayer0) {
            owner = _players[0];
            grantee = _players[1];

        } else {
            owner = _players[1];
            grantee = _players[0];
        }
        didList[key] = _did;
        keyList[_did] = key;
        didRegistryAddressList[_did] = _didRegistryAddress;
        key += 1;
        
    }

    event settedDID(
        bytes32 did
    );

    event evaluated(
        int evaluation
    );

    /**
     *  @notice Get the app outcome
     *  @param _query Query args _query is key of didList
     *  @return True if query satisfied
     */
    function getOutcome(bytes calldata _query) external view returns (bool) {
        require(_query.length == 1, "invalid query length");
        int8 query = int8(_query[0]);
        bytes32 did = didList[query];
        return documentPermissionsState[did][grantee] == true;
    }

    /**
     *  @notice Update state according to an off-chain state proof
     *  @param _state Signed off-chain app _state is key of didList, -1, -2. When _state is -1, appInfo.status -> IDLE and swap owner and grantee. When _state is -2, appInfo.status -> IDLE.
     *  @return True if update success
     */
    function updateByState(bytes memory _state) internal returns (bool) {
        require(_state.length == 1, "invalid state length");
        require(msg.sender == owner || msg.sender == grantee, "msg.sender is not channel peer");
        int8 state = int8(_state[0]);
        require((state < key && state >= 0) || (state == -1) || (state == -2), "invalid state");

        if (state == -1) {
            address x = owner;
            owner = grantee;
            grantee = x;
            appInfo.status = AppStatus.IDLE;
            return true;
        } else if (state == -2) {
            appInfo.status = AppStatus.IDLE;
            return true;
        } else {
            bytes32 did = didList[state];
            documentPermissionsState[did][grantee] = true;
            appInfo.status = AppStatus.FINALIZED;
            return true;
        }
    }

    /**
     *  @notice Set did to didList
     *  @param _did (bytes32)
     *  @param _didRegistryAddress (address)
     */
    function setDID(bytes32 _did, address _didRegistryAddress) external returns (bool){
        require(msg.sender == owner || msg.sender == grantee, "msg.sender is not channel peer");
        require(DIDRegistry(_didRegistryAddress).isDIDOwnerOrProvider(msg.sender, _did), "msg.sender is not didOwner");
        didList[key] = _did;
        keyList[_did] = key;
        didRegistryAddressList[_did] = _didRegistryAddress;
        key += 1;
        address thisAddress = address(this);
        DIDRegistry(_didRegistryAddress).setAccessSecretRegistry(thisAddress);
        emit settedDID(_did);
        return true;
    }

    /**
     * @notice get did by key
     * @param _key (int8)
     * @return did (bytes32)
     */
    function getDID(int8 _key) external view returns (bytes32) {
        return didList[_key];
    }

    /**
     * @notice get key of didList
     * @param _did (bytes32)
     * @return key (int8)
     */
    function getKeyDID(bytes32 _did) external view returns (int8) {
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

    /**
     *  @notice Check owner to test.
     */
    function getOwner() external view returns (address) {
        return owner;
    }

    /**
     *  @notice Check grantee to test.
     */
    function getGrantee() external view returns (address) {
        return grantee;
    }

    /**
     *   @notice Evaluate data of did
     *   @param _eval refers to evaluation of data of DID
     *   @param _did refers to decentralized identifier (a bytes32 length ID).
     */
    function evaluate(int8 _eval, bytes32 _did) external returns (bool) {
        require(_eval == 1 || _eval == -1, "eval is not 1 or -1");
        address _thisAddress = address(this);
        address _didRegistryAddress = didRegistryAddressList[_did];
        bool isOwner = DIDRegistry(_didRegistryAddress).isDIDOwnerOrProvider(msg.sender, _did);
        require(!isOwner, "DID owner can not evaluate DID");
        DIDRegistry(_didRegistryAddress).evaluateDID(_eval, _thisAddress);
        int eval = DIDRegistry(_didRegistryAddress).getEvaluation();
        emit evaluated(eval);
        return true;
    }

}