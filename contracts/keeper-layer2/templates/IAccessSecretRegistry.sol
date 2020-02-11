pragma solidity ^0.5.12;

interface IAccessSecretRegistry {
    
    event settedDID(bytes32 did);

    /**
     * @notice Get the app outcome.
     */
    function getOutcome(bytes calldata _query) external view returns (bool);

    /**
     * @notice Get did by key
     */
    function getDID(int8 _key) external view returns (bytes32);

    /**
     *  @notice Set did to didList
     *  @param _did (bytes32)
     *  @param _didRegistryAddress (address)
     */
    function setDID(bytes32 _did, address _didRegistryAddress) external returns (bool);

    /**
     * @notice Get key of didList
     */
    function getKeyDID(bytes32 _did) external view returns (int8);

    /**
    * @notice checkPermissions is called by Parity secret store
    */
    function checkPermissions(
        address user,
        bytes32 documentKeyId
    )
    external view
    returns (bool permissionGranted);

    /**
     *  Get owner of address
     */
    function getOwner() external view returns (address);

    /**
     *  Get owner of grantee
     */
    function getGrantee() external view returns (address);
}