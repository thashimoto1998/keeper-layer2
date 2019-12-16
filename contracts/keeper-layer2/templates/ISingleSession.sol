pragma solidity >=0.5.0 < 0.6.0;

interface ISingleSession {

    enum AppStatus {IDLE, SETTLE, FINALIZED}

    event IntendSettle(uint seq);

    /**
     * @notice Submit off-chain state and start to dispute
     */
    function intendSettle(bytes calldata _stateProof) external;

    /**
     *  @notice get app state settle finalize time
     */
    function getSettleFinalizedTime() external view returns (uint);

    /**
     * @notice get app status
     */
    function getStatus() external view returns (AppStatus);

    /**
     * @notice get app sequence number
     */
    function getSeqNum() external view returns (uint);

}