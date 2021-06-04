import React from 'react';

export const CounterPartyDetails = ({ trade_counterparty }) => (
  <>
    <h3>Counter Party Details</h3>
    <p>Reporting Counter Party: {trade_counterparty?.reporting_counterparty}</p>
    <p>Other Counterparty: {trade_counterparty?.other_counterparty}</p>
    <p>Entity Responsible for Report: {trade_counterparty?.entity_responsible_for_report}</p>
    <p>Report Submitting Entity: {trade_counterparty?.report_SubmittingEntity}</p>
    <p>Branch of Reporting Counter Party: {trade_counterparty?.branch_reporting_counterparty}</p>
    <p>Branch of Other Counter Party: {trade_counterparty?.branch_other_counterparty}</p>
    <p>Country of the other Counterparty: {trade_counterparty?.other_counterparty_country}</p>
    <p>Nature of the reporting Counterparty: {trade_counterparty?.counterparty_nature}</p>
    <p>Additional Sector Classification: {trade_counterparty?.additional_sector_classification}</p>
    <p>Sector of Reporting Counter Party: {trade_counterparty?.sector_of_reporting_counterparty}</p>
    <p>Counter Party Side: {trade_counterparty?.counterparty_side}</p>
    <br/>
  </>
)
