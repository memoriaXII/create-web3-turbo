module.exports = {
    skipFiles: [
        'Migrations.sol',
        'SocolToken.sol',
        'CommunityV2.sol',
        'TestUtil/Community.sol',
        'TestUtil/LazyTierPassNative2.sol',
        'TestUtil/NFTTransferApproval.sol',
        'TestUtil/CommunityAlwaysFalse.sol',
    ],
    configureYulOptimizer: true
};