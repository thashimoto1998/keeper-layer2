pragma solidity >=0.5.0 < 0.6.0

interface IAccessSecretRegistry {
    
    event settedDID(bytes32 did);

    /**
     * @notice Get the app outcome.
     */
    function getOutcome(bytes calldata _query) external;

    /**
     * @notice Set did to didList
     */
    function setDID(bytes32 _did, address _didRegistryAddress) public returns(bool);

    /**
     * @notice Get did by key
     */
    function getDID(int8 _key) public view returns (bytes32);

    /**
     * @notice Get key of didList
     */
    function getKeyDID(bytes32 _did) public view returns (int8);

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
    function getOwner() public view returns (address);

    /**
     *  Get owner of grantee
     */
    function getGrantee() public view returns (address);
}