import React from 'react';

export const CollateralDetails = ({ trade_collateral }) => (
  <>
    <h3>Collateral Details</h3>
    <p>Jurisdiction of Issuer: {trade_collateral?.jurisdiction_of_issuer}</p>
    <p>Cash Collateral Currency: {trade_collateral?.reused_collateral_currency}</p>
    <p>Funding Sources Currency: {trade_collateral?.funding_sources_currency}</p>
    <p>Funding Sources: {trade_collateral?.funding_sources}</p>
    <p>Price Currency: {trade_collateral?.price_currency}</p>
    <p>Currency of Nominal Amount: {trade_collateral?.currency_collateral_nom_amount}</p>
    <p>Type of Collateral Component: {trade_collateral?.collateral_component}</p>
    <p>Collateral Quality: {trade_collateral?.collateral_quality}</p>
    <p>Collateral Type: {trade_collateral?.collateral_type}</p>
    <p>Method used to Provide Collateral: {trade_collateral?.method_to_provide_collateral}</p>
    <p>Collateral Market Value: {trade_collateral?.collateral_market_value}</p>
    <p>Price Per Unit: {trade_collateral?.price_per_unit}</p>
    <p>Collateral Quantity or Nominal Amount: {trade_collateral?.collateral_quantity_or_nom_amount}</p>
    <p>Haircut or Margin: {trade_collateral?.haircut_or_margin}</p>
    <p>Estimated Reuse of Collateral: {trade_collateral?.estimated_reuse_of_collateral}</p>
    <p>Value of Reused Collateral: {trade_collateral?.value_of_reused_collateral}</p>
    <p>Maturity Date of the Security: {trade_collateral?.maturity_date_of_the_security}</p>
    <p>Classification of Security used as a Collateral: {trade_collateral?.classification_of_security_used_as_collateral}</p>
    <p>Availabilty for Collateral Reuse: {trade_collateral?.availability_for_collateral_reuse ? "True" : "False"}</p>
    <p>Identification of Security as Collateral: {trade_collateral?.identification_of_security_as_collateral}</p>
    <p>LEI of Issuer: {trade_collateral?.lei_of_issuer}</p>
    <p>Market Value of Funding Sources: {trade_collateral?.market_value_of_funding_sources}</p>
    <br/>
  </>
)
