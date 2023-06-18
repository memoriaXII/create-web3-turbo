import {
  ComptrollerErrorReporterError,
  ComptrollerErrorReporterFailureInfo,
  TokenErrorReporterError,
  TokenErrorReporterFailureInfo,
  VaiControllerErrorReporterError,
  VaiControllerErrorReporterFailureInfo,
} from 'constants/contracts/errorReporter';

export const transactionErrorPhrases: Record<
  | keyof typeof ComptrollerErrorReporterError
  | keyof typeof ComptrollerErrorReporterFailureInfo
  | keyof typeof TokenErrorReporterError
  | keyof typeof TokenErrorReporterFailureInfo
  | keyof typeof VaiControllerErrorReporterError
  | keyof typeof VaiControllerErrorReporterFailureInfo,
  string
> = {
  NO_ERROR: 'transactionErrors.noError',
  UNAUTHORIZED: 'transactionErrors.unauthorized',
  COMPTROLLER_MISMATCH: 'transactionErrors.comptrollerMismatch',
  INSUFFICIENT_SHORTFALL: 'transactionErrors.insufficientShortfall',
  INSUFFICIENT_LIQUIDITY: 'transactionErrors.insufficientLiquidity',
  INVALID_CLOSE_FACTOR: 'transactionErrors.invalidCloseFactor',
  INVALID_COLLATERAL_FACTOR: 'transactionErrors.invalidCollateralFactor',
  INVALID_LIQUIDATION_INCENTIVE:
    'transactionErrors.invalidLiquidationIncentive',
  MARKET_NOT_ENTERED: 'transactionErrors.marketNotEntered',
  MARKET_NOT_LISTED: 'transactionErrors.marketNotListed',
  MARKET_ALREADY_LISTED: 'transactionErrors.marketAlreadyListed',
  MATH_ERROR: 'transactionErrors.mathError',
  NONZERO_BORROW_BALANCE: 'transactionErrors.nonzeroBorrowBalance',
  PRICE_ERROR: 'transactionErrors.priceError',
  REJECTION: 'transactionErrors.rejection',
  SNAPSHOT_ERROR: 'transactionErrors.snapshotError',
  TOO_MANY_ASSETS: 'transactionErrors.tooManyAssets',
  TOO_MUCH_REPAY: 'transactionErrors.tooMuchRepay',
  INSUFFICIENT_BALANCE_FOR_VAI: 'transactionErrors.insufficientBalanceForVai',
  ACCEPT_ADMIN_PENDING_ADMIN_CHECK:
    'transactionErrors.acceptAdminPendingAdminCheck',
  ACCEPT_PENDING_IMPLEMENTATION_ADDRESS_CHECK:
    'transactionErrors.acceptPendingImplementationAddressCheck',
  EXIT_MARKET_BALANCE_OWED: 'transactionErrors.exitMarketBalanceOwed',
  EXIT_MARKET_REJECTION: 'transactionErrors.exitMarketRejection',
  SET_CLOSE_FACTOR_OWNER_CHECK: 'transactionErrors.setCloseFactorOwnerCheck',
  SET_CLOSE_FACTOR_VALIDATION: 'transactionErrors.setCloseFactorValidation',
  SET_COLLATERAL_FACTOR_OWNER_CHECK:
    'transactionErrors.setCollateralFactorOwnerCheck',
  SET_COLLATERAL_FACTOR_NO_EXISTS:
    'transactionErrors.setCollateralFactorNoExists',
  SET_COLLATERAL_FACTOR_VALIDATION:
    'transactionErrors.setCollateralFactorValidation',
  SET_COLLATERAL_FACTOR_WITHOUT_PRICE:
    'transactionErrors.setCollateralFactorWithoutPrice',
  SET_IMPLEMENTATION_OWNER_CHECK:
    'transactionErrors.setImplementationOwnerCheck',
  SET_LIQUIDATION_INCENTIVE_OWNER_CHECK:
    'transactionErrors.setLiquidationIncentiveOwnerCheck',
  SET_LIQUIDATION_INCENTIVE_VALIDATION:
    'transactionErrors.setLiquidationIncentiveValidation',
  SET_MAX_ASSETS_OWNER_CHECK: 'transactionErrors.setMaxAssetsOwnerCheck',
  SET_PENDING_ADMIN_OWNER_CHECK: 'transactionErrors.setPendingAdminOwnerCheck',
  SET_PENDING_IMPLEMENTATION_OWNER_CHECK:
    'transactionErrors.setPendingImplementationOwnerCheck',
  SET_PRICE_ORACLE_OWNER_CHECK: 'transactionErrors.setPriceOracleOwnerCheck',
  SUPPORT_MARKET_EXISTS: 'transactionErrors.supportMarketExists',
  SUPPORT_MARKET_OWNER_CHECK: 'transactionErrors.supportMarketOwnerCheck',
  SET_PAUSE_GUARDIAN_OWNER_CHECK:
    'transactionErrors.setPauseGuardianOwnerCheck',
  SET_VAI_MINT_RATE_CHECK: 'transactionErrors.setVaiMintRateCheck',
  SET_VAICONTROLLER_OWNER_CHECK: 'transactionErrors.setVaiControllerOwnerCheck',
  SET_MINTED_VAI_REJECTION: 'transactionErrors.setMintedVaiRejection',
  SET_TREASURY_OWNER_CHECK: 'transactionErrors.setTreasuryOwnerCheck',
  BAD_INPUT: 'transactionErrors.badInput',
  COMPTROLLER_REJECTION: 'transactionErrors.comptrollerRejection',
  COMPTROLLER_CALCULATION_ERROR:
    'transactionErrors.comptrollerCalculationError',
  INTEREST_RATE_MODEL_ERROR: 'transactionErrors.interestRateModelError',
  INVALID_ACCOUNT_PAIR: 'transactionErrors.invalidAccountPair',
  INVALID_CLOSE_AMOUNT_REQUESTED:
    'transactionErrors.invalidCloseAmountRequested',
  MARKET_NOT_FRESH: 'transactionErrors.marketNotFresh',
  TOKEN_INSUFFICIENT_ALLOWANCE: 'transactionErrors.tokenInsufficientAllowance',
  TOKEN_INSUFFICIENT_BALANCE: 'transactionErrors.tokenInsufficientBalance',
  TOKEN_INSUFFICIENT_CASH: 'transactionErrors.tokenInsufficentCash',
  TOKEN_TRANSFER_IN_FAILED: 'transactionErrors.tokenTransferInFailed',
  TOKEN_TRANSFER_OUT_FAILED: 'transactionErrors.tokenTransferOutFailed',
  TOKEN_PRICE_ERROR: 'transactionErrors.tokenPriceError',
  ACCRUE_INTEREST_ACCUMULATED_INTEREST_CALCULATION_FAILED:
    'transactionErrors.accrueInterestAccumulatedInterestCalculationFailed',
  ACCRUE_INTEREST_BORROW_RATE_CALCULATION_FAILED:
    'transactionErrors.accrueInterestBorrowRateCalculationFailed',
  ACCRUE_INTEREST_NEW_BORROW_INDEX_CALCULATION_FAILED:
    'transactionErrors.accrueInterestNewBorrowIndexCalculationFailed',
  ACCRUE_INTEREST_NEW_TOTAL_BORROWS_CALCULATION_FAILED:
    'transactionErrors.accrueInterestNewTotalBorrowsCalculationFailed',
  ACCRUE_INTEREST_NEW_TOTAL_RESERVES_CALCULATION_FAILED:
    'transactionErrors.accrueInterestNewTotalReservesCalculationFailed',
  ACCRUE_INTEREST_SIMPLE_INTEREST_FACTOR_CALCULATION_FAILED:
    'transactionErrors.accrueInterestSimpleInterestFactorCalculationFailed',
  BORROW_ACCUMULATED_BALANCE_CALCULATION_FAILED:
    'transactionErrors.borrowAccumulatedBalanceCalculationFailed',
  BORROW_ACCRUE_INTEREST_FAILED: 'transactionErrors.borrowAccrueInterestFailed',
  BORROW_CASH_NOT_AVAILABLE: 'transactionErrors.borrowCashNotAvailable',
  BORROW_FRESHNESS_CHECK: 'transactionErrors.borrowFreshnessCheck',
  BORROW_NEW_TOTAL_BALANCE_CALCULATION_FAILED:
    'transactionErrors.borrowNewTotalBalanceCalculationFailed',
  BORROW_NEW_ACCOUNT_BORROW_BALANCE_CALCULATION_FAILED:
    'transactionErrors.borrowNewAccountBorrowBalanceCalculationFailed',
  BORROW_MARKET_NOT_LISTED: 'transactionErrors.borrowMarketNotListed',
  BORROW_COMPTROLLER_REJECTION: 'transactionErrors.borrowComptrollerRejection',
  LIQUIDATE_ACCRUE_BORROW_INTEREST_FAILED:
    'transactionErrors.liquidateAccrueBorrowInterestFailed',
  LIQUIDATE_ACCRUE_COLLATERAL_INTEREST_FAILED:
    'transactionErrors.liquidateAccrueCollateralInterestFailed',
  LIQUIDATE_COLLATERAL_FRESHNESS_CHECK:
    'transactionErrors.liquidateCollateralFreshnessCheck',
  LIQUIDATE_COMPTROLLER_REJECTION:
    'transactionErrors.liquidateComptrollerRejection',
  LIQUIDATE_COMPTROLLER_CALCULATE_AMOUNT_SEIZE_FAILED:
    'transactionErrors.liquidateComptrollerCalculateAmountSeizeFailed',
  LIQUIDATE_CLOSE_AMOUNT_IS_UINT_MAX:
    'transactionErrors.liquidateCloseAmountIsUintMax',
  LIQUIDATE_CLOSE_AMOUNT_IS_ZERO:
    'transactionErrors.liquidateCloseAmountIsZero',
  LIQUIDATE_FRESHNESS_CHECK: 'transactionErrors.liquidateFreshnessCheck',
  LIQUIDATE_LIQUIDATOR_IS_BORROWER:
    'transactionErrors.liquidateSeizeIsBorrower',
  LIQUIDATE_REPAY_BORROW_FRESH_FAILED:
    'transactionErrors.liquidateSeizeBorrowFreshFailed',
  LIQUIDATE_SEIZE_BALANCE_INCREMENT_FAILED:
    'transactionErrors.liquidateSeizeBalanceIncrementFailed',
  LIQUIDATE_SEIZE_BALANCE_DECREMENT_FAILED:
    'transactionErrors.liquidateSeizeBalanceDecrementFailed',
  LIQUIDATE_SEIZE_COMPTROLLER_REJECTION:
    'transactionErrors.liquidateSeizeComptrollerRejection',
  LIQUIDATE_SEIZE_LIQUIDATOR_IS_BORROWER:
    'transactionErrors.liquidateSeizeLiquidatorIsBorrower',
  LIQUIDATE_SEIZE_TOO_MUCH: 'transactionErrors.liquidateSeizeTooMuch',
  MINT_ACCRUE_INTEREST_FAILED: 'transactionErrors.mintAccrueInterestFailed',
  MINT_COMPTROLLER_REJECTION: 'transactionErrors.mintComptrollerRejection',
  MINT_EXCHANGE_CALCULATION_FAILED:
    'transactionErrors.mintExchangeRateReadFailed',
  MINT_EXCHANGE_RATE_READ_FAILED:
    'transactionErrors.mintExchangeRateReadFailed',
  MINT_FRESHNESS_CHECK: 'transactionErrors.mintFreshnessCheck',
  MINT_NEW_ACCOUNT_BALANCE_CALCULATION_FAILED:
    'transactionErrors.mintNewAccountBalanceCalculationFailed',
  MINT_NEW_TOTAL_SUPPLY_CALCULATION_FAILED:
    'transactionErrors.mintNewTotalSupplyCalculationFailed',
  MINT_TRANSFER_IN_FAILED: 'transactionErrors.mintTransferInFailed',
  MINT_TRANSFER_IN_NOT_POSSIBLE: 'transactionErrors.mintTransferNotPossible',
  REDEEM_ACCRUE_INTEREST_FAILED: 'transactionErrors.redeemAccrueInterestFailed',
  REDEEM_COMPTROLLER_REJECTION: 'transactionErrors.redeemComptrollerRejection',
  REDEEM_EXCHANGE_TOKENS_CALCULATION_FAILED:
    'transactionErrors.redeemExchangeTokensCalculationFailed',
  REDEEM_EXCHANGE_AMOUNT_CALCULATION_FAILED:
    'transactionErrors.redeemExchangeAmountCalculatioFailed',
  REDEEM_EXCHANGE_RATE_READ_FAILED:
    'transactionErrors.redeemExchangeRateReadFailed',
  REDEEM_FRESHNESS_CHECK: 'transactionErrors.redeemFreshnessCheck',
  REDEEM_NEW_ACCOUNT_BALANCE_CALCULATION_FAILED:
    'transactionErrors.redeemNewAccountBalanceCalculationFailed',
  REDEEM_NEW_TOTAL_SUPPLY_CALCULATION_FAILED:
    'transactionErrors.redeemNewTotalSupplyCalculationFailed',
  REDEEM_TRANSFER_OUT_NOT_POSSIBLE:
    'transactionErrors.redeemTransferOutNotPossible',
  REDUCE_RESERVES_ACCRUE_INTEREST_FAILED:
    'transactionErrors.reduceReservesAccrueInterestFailed',
  REDUCE_RESERVES_ADMIN_CHECK: 'transactionErrors.reduceReservesAdminCheck',
  REDUCE_RESERVES_CASH_NOT_AVAILABLE:
    'transactionErrors.reduceReservesCashNotAvailable',
  REDUCE_RESERVES_FRESH_CHECK: 'transactionErrors.reduceReservesFreshCheck',
  REDUCE_RESERVES_VALIDATION: 'transactionErrors.reduceReservesValidation',
  REPAY_BEHALF_ACCRUE_INTEREST_FAILED:
    'transactionErrors.repayBehalfAccrueInterestFailed',
  REPAY_BORROW_ACCRUE_INTEREST_FAILED:
    'transactionErrors.repayBorrowAccrueInterestFailed',
  REPAY_BORROW_ACCUMULATED_BALANCE_CALCULATION_FAILED:
    'transactionErrors.repayBorrowAccumulatedBalanceCalculationFailed',
  REPAY_BORROW_COMPTROLLER_REJECTION:
    'transactionErrors.repayBorrowComptrollerRejection',
  REPAY_BORROW_FRESHNESS_CHECK: 'transactionErrors.repayBorrowFreshnessCheck',
  REPAY_BORROW_NEW_ACCOUNT_BORROW_BALANCE_CALCULATION_FAILED:
    'transactionErrors.repayBorrowNewAccountBorrowBalanceCalculationFailed',
  REPAY_BORROW_NEW_TOTAL_BALANCE_CALCULATION_FAILED:
    'transactionErrors.repayBorrowTransferNotPossible',
  REPAY_BORROW_TRANSFER_IN_NOT_POSSIBLE:
    'transactionErrors.repayBorrowTransferInNotPossible',
  SET_COMPTROLLER_OWNER_CHECK: 'transactionErrors.setComptrollerOwnerCheck',
  SET_INTEREST_RATE_MODEL_ACCRUE_INTEREST_FAILED:
    'transactionErrors.setInterestRateModelAccrueInterestFailed',
  SET_INTEREST_RATE_MODEL_FRESH_CHECK:
    'transactionErrors.setInterestRateModelFreshCheck',
  SET_INTEREST_RATE_MODEL_OWNER_CHECK:
    'transactionErrors.setInterestRateModelOwnerCheck',
  SET_ORACLE_MARKET_NOT_LISTED: 'transactionErrors.setOracleMarketNotListed',
  SET_RESERVE_FACTOR_ACCRUE_INTEREST_FAILED:
    'transactionErrors.setReserveFactorAccrueInterestFailed',
  SET_RESERVE_FACTOR_ADMIN_CHECK:
    'transactionErrors.setReserveFactorAdminCheck',
  SET_RESERVE_FACTOR_FRESH_CHECK:
    'transactionErrors.setReserveFactorFreshCheck',
  SET_RESERVE_FACTOR_BOUNDS_CHECK:
    'transactionErrors.setReserveFactorBoundsCheck',
  TRANSFER_COMPTROLLER_REJECTION:
    'transactionErrors.transferComptrollerRejection',
  TRANSFER_NOT_ALLOWED: 'transactionErrors.transferNotAllowed',
  TRANSFER_NOT_ENOUGH: 'transactionErrors.transferNotEnough',
  TRANSFER_TOO_MUCH: 'transactionErrors.transferTooMuch',
  ADD_RESERVES_ACCRUE_INTEREST_FAILED:
    'transactionErrors.addReservesAccrueInterestFailed',
  ADD_RESERVES_FRESH_CHECK: 'transactionErrors.addReservesFreshCheck',
  ADD_RESERVES_TRANSFER_IN_NOT_POSSIBLE:
    'transactionErrors.addReservesTransferInNotPossible',
  TOKEN_GET_UNDERLYING_PRICE_ERROR:
    'transactionErrors.tokenGetUnderlyingPriceError',
  REPAY_VAI_COMPTROLLER_REJECTION:
    'transactionErrors.repayVaiComptrollerRejection',
  REPAY_VAI_FRESHNESS_CHECK: 'transactionErrors.repayVaiFreshnessCheck',
  VAI_MINT_EXCHANGE_CALCULATION_FAILED:
    'transactionErrors.vaiMintExchangeCalculationFailed',
  SFT_MINT_NEW_ACCOUNT_BALANCE_CALCULATION_FAILED:
    'transactionErrors.sftMintNewAccountBalanceCalculationFailed',
  REDEEM_FEE_CALCULATION_FAILED: 'transactionErrors.redeemFeeCalculationFailed',
  VAI_MINT_REJECTION: 'transactionErrors.vaiMintRejection',
  VAI_BURN_REJECTION: 'transactionErrors.vaiBurnRejection',
  VAI_LIQUIDATE_ACCRUE_BORROW_INTEREST_FAILED:
    'transactionErrors.vaiLiquidateAccrueBorrowInterestFailed',
  VAI_LIQUIDATE_ACCRUE_COLLATERAL_INTEREST_FAILED:
    'transactionErrors.vaiLiquidateAccrueCollateralInterestFailed',
  VAI_LIQUIDATE_COLLATERAL_FRESHNESS_CHECK:
    'transactionErrors.vaiLiquidateCollateralFreshnessCheck',
  VAI_LIQUIDATE_COMPTROLLER_REJECTION:
    'transactionErrors.vaiLiquidateComptrollerRejection',
  VAI_LIQUIDATE_COMPTROLLER_CALCULATE_AMOUNT_SEIZE_FAILED:
    'transactionErrors.vaiLiquidateComptrollerCalculateAmountSeizeFailed',
  VAI_LIQUIDATE_CLOSE_AMOUNT_IS_UINT_MAX:
    'transactionErrors.vaiLiquidateCloseAmountIsUintMax',
  VAI_LIQUIDATE_CLOSE_AMOUNT_IS_ZERO:
    'transactionErrors.vaiLiquidateCloseAmountIsZero',
  VAI_LIQUIDATE_FRESHNESS_CHECK: 'transactionErrors.vaiLiquidateFreshnessCheck',
  VAI_LIQUIDATE_LIQUIDATOR_IS_BORROWER:
    'transactionErrors.vaiLiquidateLiquidatorIsBorrower',
  VAI_LIQUIDATE_REPAY_BORROW_FRESH_FAILED:
    'transactionErrors.vaiLiquidateRepayBorrowFreshFailed',
  VAI_LIQUIDATE_SEIZE_BALANCE_INCREMENT_FAILED:
    'transactionErrors.vaiLiquidateSeizeBalanceIncrementFailed',
  VAI_LIQUIDATE_SEIZE_BALANCE_DECREMENT_FAILED:
    'transactionErrors.vaiLiquidateSeizeBalanceDecrementFailed',
  VAI_LIQUIDATE_SEIZE_COMPTROLLER_REJECTION:
    'transactionErrors.vaiLiquidateSeizeComptrollerRejection',
  VAI_LIQUIDATE_SEIZE_LIQUIDATOR_IS_BORROWER:
    'transactionErrors.vaiLiquidateSeizeLiquidatorIsBorrower',
  VAI_LIQUIDATE_SEIZE_TOO_MUCH: 'transactionErrors.vaiLiquidateSeizeTooMuch',
  MINT_FEE_CALCULATION_FAILED: 'transactionErrors.mintFeeCalculationFailed',
};
