const constants = {
    keeper: {
        nodeUrl: `http://localhost:${process.env.ETHEREUM_RPC_PORT || '8545'}`
    },
    address: {
        zero: '0x0000000000000000000000000000000000000000',
        dummy: '0xeE9300b7961e0a01d9f0adb863C7A227A07AaD75',
        error: {
            invalidAddress0x0: 'Invalid address'
        }
    },
    bytes32: {
        zero: '0x0000000000000000000000000000000000000000000000000000000000000000',
        one: '0x0000000000000000000000000000000000000000000000000000000000000001',
        two: '0x0000000000000000000000000000000000000000000000000000000000000002',
        three: '0x0000000000000000000000000000000000000000000000000000000000000003'
    },
    error: {
        idAlreadyExists: 'Id already exists',
        revert: 'Returned error: VM Exception while processing transaction: revert'
    },
    did: [
        '0x0000000000000000000000000000000000000000000000000000000001111111',
        '0x319d158c3a5d81d15b0160cf8929916089218bdb4aa78c3ecd16633afd44b8ae',
        '0x319d158c3a5d81d15b0160cf8929916089218bdb4aa78c3ecd16633afd44b123'
    ],
    checksum: [
        '0x3bda213fc5ecd195a546d035d2c40ce500000000000000000000000000000000',
        '0x3bda213fc5ecd195a546d035d2c40ce500000000000000000000000000000001',
        '0x3bda213fc5ecd195a546d035d2c40ce500000000000000000000000000000002'
    ],
    registry: {
        error: {
            onlyDIDOwner: 'Attributes must be registered by the DID owners.',
            invalidValueSize: 'Invalid value size',
            didNotRegistered: 'DID not registered'
        },
        url: 'https://example.com/did/ocean/test-attr-example.txt'
    }
}

module.exports = constants