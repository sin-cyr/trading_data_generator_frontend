import React from 'react';
import { Container } from 'react-bootstrap';
import { Button } from "react-bootstrap";

import { CollateralDetails } from "./sections/CollateralDetails";
import { CounterPartyDetails } from "./sections/CounterPartyDetails";
import { PrincipleDetails } from "./sections/PrincipleDetails";
import { TransactionDetails } from "./sections/TransactionDetails";

export const SingleTrade = ({ individualTrade, onPressedExportTrade = () => {} }) => {
  if (!individualTrade) {
    return null;
  }

  const { 
    trade_transaction,
    trade_principle,
    trade_counterparty,
    trade_collateral
  } = individualTrade;

  return(
    <Container>
      <div data-testid="single-trade" className="components">
        <h2>Trade Product ID: {individualTrade?.trade_Id}</h2>
        <p>Trade Type: {individualTrade?.trade_type}</p>
        <p>Level: {individualTrade?.trade_level}</p>
        <p>Action Type: {individualTrade?.action_type}</p>
        <p>Reporting Timestamp: {individualTrade?.reporting_timestamp}</p>
        <br />

        <TransactionDetails trade_transaction={trade_transaction} />

        <CounterPartyDetails trade_counterparty={trade_counterparty} />

        <CollateralDetails trade_collateral={trade_collateral} />

        <PrincipleDetails trade_principle={trade_principle} />
        
        <Button data-testid="export-trade-button" onClick={() => { onPressedExportTrade(individualTrade?.trade_Id) }}>Export</Button>
      </div>
    </Container>
  )
}