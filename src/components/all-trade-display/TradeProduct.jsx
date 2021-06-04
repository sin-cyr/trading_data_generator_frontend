import React, { useState } from 'react';
import { Container } from 'react-bootstrap';
import { Link } from "react-router-dom";

export const TradeProduct = ({ trade }) => (
    <Container>
      <Link to={`/singleTrade/${trade.trade_Id}`} >Trade Product ID: {trade.trade_Id}</Link>
      <p>Trade Type: {trade.trade_type}</p>
      <p>Trade Level: {trade.trade_level}</p>
      <p>Data Quality: {trade.trade_quality}</p>
      <p>Trade created on: {trade.reporting_timestamp}</p>
      <br/>
    </Container>
  )
