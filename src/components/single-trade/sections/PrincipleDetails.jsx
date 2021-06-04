import React from 'react';

export const PrincipleDetails = ({ trade_principle }) => (
  <>
    <h3>Principle Details</h3>
    <p>Day Count Convention: {trade_principle?.day_count_convention}</p>
    <p>Float rate reference period - time period: {trade_principle?.float_ref_period_time}</p>
    <p>Float rate reference period - multiplier:  {trade_principle?.float_ref_period_multi}</p>
    <p>Float rate payment frequency - time period: {trade_principle?.float_pay_freq_time}</p>
    <p>Float rate payment frequency - multiplier:  {trade_principle?.float_pay_freq_multi}</p>
    <p>Float rate reset frequency - time period: {trade_principle?.float_reset_freq_time}</p>
    <p>Float rate reset frequency - multiplier: {trade_principle?.float_reset_freq_multi}</p>
    <p>Margin Lending Currency Amount: {trade_principle?.margin_currency_amount}</p>
    <p>Margin Lending Currency: {trade_principle?.margin_currency}</p>
    <p>Base Currency of Outstanding Margin Loan: {trade_principle?.outstanding_ML_base_currency}</p>
    <p>Floating Rate: {trade_principle?.floating_rate}</p>
    <p>Fixed Rate: {trade_principle?.fixed_rate}%</p>
    <p>Outstanding Margin Loan: {trade_principle?.outstanding_margin_loan}</p>
    <p>Short Market Value: {trade_principle?.short_market_value}</p>
    
    <p>Spread: {trade_principle?.spread}</p>
    <br/>
  </>
)
