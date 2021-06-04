import {
  CREATE_TRADE,
  LOAD_SINGLE_TRADE,
  LOAD_ALL_TRADES_SUCCESS,
  LOAD_ALL_MARGIN_LENDING_TRADES
} from './actionTypes';

// When this action is called it triggers the corresponding action in the "tradeReducer.js" file 
// to update the store with the new trade
export const createTradeAction = trade => ({
  type: CREATE_TRADE,
  payload: { trade },
});

export const loadSingleTradeAction = singleTrade => ({
  type: LOAD_SINGLE_TRADE,
  payload: { singleTrade },
});

export const loadAllTradesSuccessAction = allTrades => ({
  type: LOAD_ALL_TRADES_SUCCESS,
  payload: { allTrades },
});

export const loadAllMarginLendingTradesAction = allMarginTrades => ({
  type: LOAD_ALL_MARGIN_LENDING_TRADES,
  payload: { allMarginTrades },
});
