export const interactionErrorPhrases = {
  collateralRequired: 'markets.errors.collateralRequired',
  collateralEnableError: (args: { assetName: string }) =>
    `markets.errors.collateralEnableError, ${args}`,
  collateralDisableError: (args: { assetName: string }) =>
    `markets.errors.collateralDisableError', ${args}`,
  accountError: 'markets.errors.accountError',
  createProposalFailed: 'vote.createProposalForm.submitError',
  unsupportedWallet: 'wallets.errors.unsupportedWallet',
  authorizeAccess: 'wallets.errors.authorizeAccess',
  noProvider: 'wallets.errors.noProvider',
};
