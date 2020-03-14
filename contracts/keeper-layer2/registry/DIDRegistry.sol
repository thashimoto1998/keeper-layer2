pragma solidity >=0.5.0 <0.6.0;
// Copyright BigchainDB GmbH and Ocean Protocol contributors
// SPDX-License-Identifier: (Apache-2.0 AND CC-BY-4.0)
// Code is Apache-2.0 and docs are CC-BY-4.0

import './DIDRegistryLibrary.sol';
//import "@openzeppelin/contracts/ownership/Ownable.sol";
import 'openzeppelin-eth/contracts/ownership/Ownable.sol';
//import "@openzeppelin/upgrades/contracts/Initializable.sol";
import '../templates/ISecretStore.sol';
import {AccessSecretRegistry} from './AccessSecretRegistry.sol';

/**
 * @title DID Registry
 * @author Ocean Protocol Team
 *
 * @dev Implementation of the DID Registry.
 *      https://github.com/oceanprotocol/OEPs/tree/master/7#registry
 */
contract DIDRegistry is Ownable, ISecretStore {

    /**
     * @dev The DIDRegistry Library takes care of the basic storage functions.
     */
    using DIDRegistryLibrary for DIDRegistryLibrary.DIDRegisterList;

    /**
     * @dev state storage for the DID registry
     */
    DIDRegistryLibrary.DIDRegisterList internal didRegisterList;

    /**
     * @dev mapping(did => mapping(grantee => AccessSecretRegistryAddress)) accessSecretRegistryList
     */
    mapping(bytes32 => mapping(address => address)) accessSecretRegistryList;

    /**
     *  @dev evaluation of data of DID
     */
    int evaluation;

    modifier onlyDIDOwner(bytes32 _did)
    {
        require(
            msg.sender == didRegisterList.didRegisters[_did].owner,
            'Invalid DID owner'
        );
        _;
    }

    /**
     * @dev This implementation does not store _value on-chain,
     *      but emits DIDAttributeRegistered events to store it in the event log.
     */
    event DIDAttributeRegistered(
        bytes32 indexed _did,
        address indexed _owner,
        bytes32 indexed _checksum,
        string _value,
        address _lastUpdatedBy,
        uint256 _blockNumberUpdated
    );

    event DIDProviderRemoved(
        bytes32 _did,
        address _provider,
        bool state
    );

    event DIDProviderAdded(
        bytes32 _did,
        address _provider
    );

    event DIDOwnershipTransferred(
        bytes32 _did,
        address _previousOwner,
        address _newOwner
    );
    
   /**
     * @dev DIDRegistry Initializer
     *      Initialize Ownable. Only on contract creation.
     * @param _owner refers to the owner of the contract.
    */ 
    function initialize(
        address _owner
    )
        public
        initializer
    {
        Ownable.initialize(_owner);
    }
    

    /**
     *  @notice check whether caller is DID owner or provider
     *  @dev This function is delgated call from AccessSecretRegistry.sol
     *  @param _caller address 
     *  @param _did refers to decentralized identifier (a bytes32 length ID)
     *  @return whether caller is DID owner or provider
     */
    function isDIDOwnerOrProvider(
        address _caller,
        bytes32 _did
    )
        public view
        returns (bool)
    {
        return (
            didRegisterList.didRegisters[_did].owner == _caller ||
            didRegisterList.isProvider(_did, _caller)
        );
    }

    /**
     * @notice Register DID attributes.
     *
     * @dev The first attribute of a DID registered sets the DID owner.
     *      Subsequent updates record _checksum and update info.
     *
     * @param _did refers to decentralized identifier (a bytes32 length ID).
     * @param _checksum includes a one-way HASH calculated using the DDO content.
     * @param _value refers to the attribute value, limited to 2048 bytes.
     * @return the size of the registry after the register action.
     */
    function registerAttribute(
        bytes32 _did,
        bytes32 _checksum,
        address[] memory _providers,
        string memory _value
    )
        public
        returns (uint size)
    {
        require(
            didRegisterList.didRegisters[_did].owner == address(0x0) ||
            didRegisterList.didRegisters[_did].owner == msg.sender,
            'Attributes must be registered by the DID owners.'
        );

        require(
            //TODO: 2048 should be changed in the future
            bytes(_value).length <= 2048,
            'Invalid value size'
        );

        uint updatedSize = didRegisterList.update(_did, _checksum);

        // push providers to storage
        for (uint256 i = 0; i < _providers.length; i++) {
            didRegisterList.addProvider(
                _did,
                _providers[i]
            );

        }

        /* emitting _value here to avoid expensive storage */
        emit DIDAttributeRegistered(
            _did,
            didRegisterList.didRegisters[_did].owner,
            _checksum,
            _value,
            msg.sender,
            block.number
        );

        return updatedSize;
    }

    /**
     * @notice addDIDProvider add new DID provider.
     *
     * @dev it adds new DID provider to the providers list. A provider
     *      is any entity that can serve the registered asset
     * @param _did refers to decentralized identifier (a bytes32 length ID).
     * @param _provider provider's address.
     */
    function addDIDProvider(
        bytes32 _did,
        address _provider
    )
        external
        onlyDIDOwner(_did)
    {
        didRegisterList.addProvider(_did, _provider);

        emit DIDProviderAdded(
            _did,
            _provider
        );
    }

    /**
     * @notice removeDIDProvider delete an existing DID provider.
     * @param _did refers to decentralized identifier (a bytes32 length ID).
     * @param _provider provider's address.
     */
    function removeDIDProvider(
        bytes32 _did,
        address _provider
    )
        external
        onlyDIDOwner(_did)
    {
        bool state = didRegisterList.removeProvider(_did, _provider);

        emit DIDProviderRemoved(
            _did,
            _provider,
            state
        );
    }
        
    /**
     * @notice isDIDProvider check whether a given DID provider exists
     * @param _did refers to decentralized identifier (a bytes32 length ID).
     * @param _provider provider's address.
     */
    function isDIDProvider(
        bytes32 _did,
        address _provider
    )
        public
        view
        returns (bool)
    {
        return didRegisterList.isProvider(_did, _provider);
    }

    /**
     * @param _did refers to decentralized identifier (a bytes32 length ID).
     * @return the address of the DID owner.
     */
    function getDIDRegister(
        bytes32 _did
    )
        public
        view
        returns (
            address owner,
            bytes32 lastChecksum,
            address lastUpdatedBy,
            uint256 blockNumberUpdated,
            address[] memory providers
        )
    {
        owner = didRegisterList.didRegisters[_did].owner;
        lastChecksum = didRegisterList.didRegisters[_did].lastChecksum;
        lastUpdatedBy = didRegisterList.didRegisters[_did].lastUpdatedBy;
        blockNumberUpdated = didRegisterList.didRegisters[_did]
            .blockNumberUpdated;
        providers = didRegisterList.didRegisters[_did].providers;
    }

    /**
     * @param _did refers to decentralized identifier (a bytes32 length ID).
     * @return last modified (update) block number of a DID.
     */
    function getBlockNumberUpdated(bytes32 _did)
        public
        view
        returns (uint256 blockNumberUpdated)
    {
        return didRegisterList.didRegisters[_did].blockNumberUpdated;
    }

    /**
     * @param _did refers to decentralized identifier (a bytes32 length ID).
     * @return the address of the DID owner.
     */
    function getDIDOwner(bytes32 _did)
        public
        view
        returns (address didOwner)
    {
        return didRegisterList.didRegisters[_did].owner;
    }

    /**
     * @return the length of the DID registry.
     */
    function getDIDRegistrySize()
        public
        view
        returns (uint size)
    {
        return didRegisterList.didRegisterIds.length;
    }

    /**
     * @return the length of the DID registry.
     */
    function getDIDRegisterIds()
        public
        view
        returns (bytes32[] memory)
    {
        return didRegisterList.didRegisterIds;
    }

    /**
     * @notice transferDIDOwnership transfer DID ownership
     * @param _did refers to decentralized identifier (a bytes32 length ID)
     * @param _newOwner new owner address
     */
    function transferDIDOwnership(bytes32 _did, address _newOwner)
        external
        onlyDIDOwner(_did)
    {
        address _previousOwner = didRegisterList.didRegisters[_did].owner;
        didRegisterList.updateDIDOwner(_did, _newOwner);
        
        emit DIDOwnershipTransferred(
            _did,
            _previousOwner,
            _newOwner
        );
    }

    /**
     *  @notice Evaluate of data of DID
     *  @param _did referes to decentralized identifier (a bytes32 length ID)
     *  @param _eval refers to evaluation of data of DID 
     *  @param _grantee is the address of the granted user of the DID owner or provider
     *  @param _contractAddress address of AccessSecret
     */
    function evaluateDID(bytes32 _did, int8 _eval, address _grantee, address _contractAddress) external returns (bool) { 
        if (accessSecretRegistryList[_did][_grantee] == _contractAddress) {
            evaluation += _eval;
            return true;
        }
        return false;   
    }

    /**
     *  @notice Get evaluation of data of DID
     */
    function getEvaluation() public view returns (int) {
        return evaluation;
    }

    /**
     *  @notice Set contract address of AccessSecretRegistry
     *  @param _did (bytes32)
     *  @param _contractAddress contract address of AccessSecretRegistry 
     *  @param _grantee is the address of the grantee 
     *  @return bool
     */
    function setAccessSecretRegistry(bytes32 _did, address _contractAddress, address _grantee) 
        onlyDIDOwner(_did) external returns (bool) 
    {
        accessSecretRegistryList[_did][_grantee] = _contractAddress;
    }

    /**
     * @notice Whether address of AccessSecretRegistry is setted in this contract.
     * @param _did (bytes32)
     * @param _contractAddress contract address of AccessSecretRegistry
     * @param _grantee is the address of the grantee
     * @return bool
     */
    function isAccessSecretRegistry(bytes32 _did, address _contractAddress, address _grantee)
        external returns (bool)
    {
        return accessSecretRegistryList[_did][_grantee] == _contractAddress;
    }

    /**
    * @notice checkPermissions is called by Parity secret store
    * @param grantee is the address of the granted user of the DID owner or provider
    * @param did referes to the DID in which secret sotre will issue the decryption keys
    * @return true if the access was granted
    */
    function checkPermissions(
        address grantee,
        bytes32 did
    )
        external view
        returns (bool permissionGranted)
    {
        address accessSecretRegistryAddress = accessSecretRegistryList[did][grantee];
        bool checkPermission = AccessSecretRegistry(accessSecretRegistryAddress).checkPermissions(grantee, did);
        return checkPermission == true;
    }

}