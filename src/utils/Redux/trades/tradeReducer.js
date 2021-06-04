import {
  CREATE_TRADE,
  LOAD_SINGLE_TRADE,
  LOAD_ALL_TRADES_SUCCESS,
  LOAD_ALL_MARGIN_LENDING_TRADES
} from './actionTypes';

const initialState = {
  trades: [],           // To store all our trades
  marginTrades: [],
  individualTrade: {}
}
// action refers to:
// - type of action i.e. create, save, delete etc.
// - payload which is the trade from the back
export const tradesReducer = (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case CREATE_TRADE: {
      const { trade } = payload;
      return {
        ...state,                    // makes a copy of the state, must always make a copy when using redux.
        trades: state?.trades?.data?.concat(trade.data),  // then adds the new trade to the copy
      }
    }
    case LOAD_SINGLE_TRADE: {
      const { singleTrade } = payload;
      return {
        ...state,
        individualTrade: singleTrade
      }
    }
    case LOAD_ALL_TRADES_SUCCESS: {
      const { allTrades } = payload;
      return {
        ...state,
        trades: allTrades
      }
    }
    case LOAD_ALL_MARGIN_LENDING_TRADES: {
      const { allMarginTrades } = payload;
      return {
        ...state,
        allMarginTrades: allMarginTrades
      }
    }
    default:
      return state;
  }
}