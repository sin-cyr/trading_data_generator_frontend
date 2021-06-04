import React from 'react';

export const TransactionDetails = ({ trade_transaction }) => (
  <>
    <h3>Transaction Details</h3>
    <p>Type of SFT: {trade_transaction?.type_Of_Sft}</p>
    <p>Event Date: {trade_transaction?.event_date}</p>
    <p>Execution Timestamp: {trade_transaction?.execution_timestamp}</p>
    <p>Termination Date: {trade_transaction?.termination_date}</p>
    <br/>
  </>
)
