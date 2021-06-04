import {
  createTradeAction,
  loadAllMarginLendingTradesAction,
  loadAllTradesSuccessAction,
  loadSingleTradeAction
} from './tradeActions';
import {
  createTradeProduct,
  getAllTradeProducts,
  getAllMarginLendingProducts,
  getTradeProductById,
  getTradeFileById,
  getAllTradesFile
} from '../../api/apiCalls';

export const createTradeRequest = body => dispatch => {
  try {
    createTradeProduct(body)
      .then(res => {
        dispatch(createTradeAction(res));
        window.location = "/";
      });
  } catch (err) {
    dispatch(displayAlert(err));
  }
};

export const loadAllTrades = () => dispatch => {
  try {
    getAllTradeProducts().then(res => {
      dispatch(loadAllTradesSuccessAction(res.data));
    })
  }
  catch (err) {
    dispatch(displayAlert(err));
  }
}

export const allMarginLendingTrades = () => async dispatch => {
  try {
    getAllMarginLendingProducts().then(res => {
      dispatch(loadAllMarginLendingTradesAction(res.data));
    })
  } catch (err) {
    dispatch(displayAlert(err));
  }
};

export const getSingleTrade = (tradeId) => async dispatch => {
  try {
    getTradeProductById(tradeId).then(res => {
      dispatch(loadSingleTradeAction(res.data));
    })
  } catch (err) {
    dispatch(displayAlert(err));
  }
}

export const exportTradeToFile = (tradeId) => async dispatch => {
  try {
    getTradeFileById(tradeId).then(() => {
      window.location = "/"
    })
  } catch (err) {
    dispatch(displayAlert(err));
  }
}

export const exportAllTradesToFile = () => async dispatch => {
  try {
    getAllTradesFile().then(() => {
      window.location = "/"
    })
  } catch (err) {
    dispatch(displayAlert(err));
  }
}

export const displayAlert = (text) => () => {
  alert(text);
};