import axios from 'axios';

const backendBaseUrl = "http://localhost:8088/datagen";
const headers = { "Content-Type": "application/json;charset=UTF-8" };

export const createTradeProduct = body => axios({
  method: "POST",
  url: `${backendBaseUrl}/tradeController/CreateTradeProduct`,
  headers: headers,
  data: body
});

export const getAllTradeProducts = () => axios({
  method: "GET",
  url: `${backendBaseUrl}/tradeController/GetAllTradeProducts`,
  headers: headers
});

export const getAllMarginLendingProducts = () => axios({
  method: "GET",
  url: `${backendBaseUrl}/tradeController/GetAllMarginLendingProducts`,
  headers: headers
});

export const getTradeProductById = tradeId => axios({
  method: "GET",
  url: `${backendBaseUrl}/tradeController/GetTradeProductById/${tradeId}`,
  headers: headers
});

export const getTradeFileById = tradeId => axios({
  method: "POST",
  url: `${backendBaseUrl}/fileController/ExportToFile/${tradeId}`,
  headers: headers
});

export const getAllTradesFile = () => axios({
  method: "POST",
  url: `${backendBaseUrl}/fileController/ExportAllTradesToFile/`, // address trailing backslash issue - ToDo
  headers: headers
});
