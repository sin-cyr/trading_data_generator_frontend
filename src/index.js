import React from "react";
import ReactDOM from "react-dom";
import { persistStore } from "redux-persist";
import { PersistGate } from "redux-persist/lib/integration/react";
import { Provider } from "react-redux";
import { configureStore } from "./utils/Redux/store";
import 'bootstrap/dist/css/bootstrap.min.css';
import { App } from './App';

// creates the store 
const store = configureStore();
// uses "persistStore" function so store is not cleared on refresh
const persistor = persistStore(store);


ReactDOM.render(
  // "Provider" connects the store to components
  <Provider store={store}>
    <PersistGate loading={<div>Loading...</div>} persistor={persistor}>
      <React.StrictMode>
        <App />
      </React.StrictMode>
    </PersistGate>
  </Provider>,
  document.getElementById('root')
);
