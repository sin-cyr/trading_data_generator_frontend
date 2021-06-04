import { createSelector } from 'reselect';

export const selectAllTrades = state => state?.tradesReducer?.trades || [];

export const selectIndividualTrade = state => state?.tradesReducer?.individualTrade || [];

export const selectAllCleanTrades = createSelector(
    selectAllTrades,
    trades => trades.filter(trade => trade.trade_quality === 'Clean'),
)

export const selectAllDirtyTrades = createSelector(
    selectAllTrades,
    trades => trades.filter(trade => trade.trade_quality === 'Dirty'),
)
