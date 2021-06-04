import React, { useEffect } from "react";
import { connect } from "react-redux";

import { AllTradeDisplay } from '../components/all-trade-display/AllTradeDisplay'
import { selectAllTrades } from "../utils/Redux/trades/tradeSelector";
import { exportAllTradesToFile, loadAllTrades } from '../utils/Redux/trades/tradeThunk';

const AllTradeDisplayContainer = ({
  retrieveAllTrades,
  onPressedExportTrade,
  allTrades
}) => {

  useEffect(() => {
    retrieveAllTrades();
  }, []);

  return (
    <AllTradeDisplay
      allTrades={allTrades}
      onPressedExportTrade={onPressedExportTrade}
    />
  );
};

// This is for pulling data from the store
const mapStateToProps = state => ({
  allTrades: selectAllTrades(state),
});

// components use dispatch to talk to the Thunks, which then talk to the backend.
const mapDispatchToProps = dispatch => ({
  onPressedExportTrade: () => dispatch(exportAllTradesToFile()),
  retrieveAllTrades: () => dispatch(loadAllTrades())   // this method calls the "loadAllTrades" function from the "tradeThunk.js" file
});

// "connect" is used to connect the component to the persisted store 
export default connect(mapStateToProps, mapDispatchToProps)(AllTradeDisplayContainer);