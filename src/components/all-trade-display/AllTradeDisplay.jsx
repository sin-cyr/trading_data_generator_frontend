import React from "react";
import { Button, Table } from "react-bootstrap";
import { TradeProduct } from "./TradeProduct";

export const AllTradeDisplay = ({
  onPressedExportTrade,
  allTrades
}) => (
  <>
    <Button className="col-md-2" onClick={() => onPressedExportTrade()}>Export all trades</Button>

    <br />

    <Table striped bordered hover size="sm">
      <thead>
        <tr>
          <th>Trade Product ID:</th>
          <th>Trade Type:</th>
          <th>Trade Level:</th>
          <th>Data Quality:</th>
          <th>Trade created on:</th>
        </tr>
      </thead>
      <tbody>
        {allTrades.map(trade =>
          <tr key={trade.trade_Id}>
            <td>
              <a href={`/singleTrade/${trade.trade_Id}`} >{trade.trade_Id}</a>
            </td>
            <td>{trade.trade_type}</td>
            <td>{trade.trade_level}</td>
            <td>{trade.trade_quality}</td>
            <td>{trade.reporting_timestamp}</td>
          </tr>
        )}
      </tbody>
    </Table>

  </>
);
