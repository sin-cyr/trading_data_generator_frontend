import React, { useEffect } from 'react';
import { connect } from "react-redux";
import { exportTradeToFile, getSingleTrade } from '../utils/Redux/trades/tradeThunk';
import { useParams } from "react-router-dom";

import { selectIndividualTrade } from "../utils/Redux/trades/tradeSelector";
import { SingleTrade } from "../components/single-trade/SingleTrade";

const SingleTradeContainer = ({ getTradeById, individualTrade, onPressedExportTrade }) => {
  const { tradeId } = useParams()

  useEffect(() => {
    getTradeById(tradeId);
  }, []);

  return (
    <SingleTrade 
      individualTrade={individualTrade} 
      onPressedExportTrade={onPressedExportTrade} 
    />
  )
}

const mapStateToProps = state => ({
  individualTrade: selectIndividualTrade(state),
});

const mapDispatchToProps = dispatch => ({
  onPressedExportTrade: id => dispatch(exportTradeToFile(id)),
  getTradeById: id => dispatch(getSingleTrade(id))
});

export default connect(mapStateToProps, mapDispatchToProps)(SingleTradeContainer);