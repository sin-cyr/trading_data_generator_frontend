import React from "react";
import { connect } from "react-redux";

import { createTradeRequest } from "../utils/Redux/trades/tradeThunk";
import { CreateTrade } from '../components/create-trade/CreateTrade';

const CreateTradeContainer = ({ onCreateTradesPressed }) => (
  <CreateTrade onCreateTradesPressed={onCreateTradesPressed} />
)

const mapStateToProps = state => ({});

const mapDispatchToProps = dispatch => ({
  onCreateTradesPressed: body => dispatch(createTradeRequest(body)),
})

export default connect(mapStateToProps, mapDispatchToProps)(CreateTradeContainer);
