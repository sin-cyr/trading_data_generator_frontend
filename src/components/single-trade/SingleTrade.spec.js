import React from 'react'
import { render, fireEvent } from '@testing-library/react'
import { SingleTrade } from './SingleTrade';

const renderComponent = props => (
  render(<SingleTrade {...props} />)
)

it('renders', () => {
  const { queryByTestId } = renderComponent({ individualTrade: {} });

  expect(queryByTestId('single-trade')).not.toBeNull();
});

it('renders null when individualTrade is undefined', () => {
  const { queryByTestId } = renderComponent();

  expect(queryByTestId('single-trade')).toBeNull();
});

it('calls onPressedExportTrade with correct trade id when export trade button is clicked', () => {
  const mockOnPressedExportTrade = jest.fn();
  const individualTrade = {
    trade_Id: 7
  }

  const { getByTestId } = renderComponent({ onPressedExportTrade: mockOnPressedExportTrade, individualTrade });
  fireEvent.click(getByTestId('export-trade-button'));

  expect(mockOnPressedExportTrade).toHaveBeenCalledWith(individualTrade.trade_Id);
});
