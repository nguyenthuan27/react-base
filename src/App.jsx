import React from "react";
import "./App.css";
import { PersistGate } from "redux-persist/lib/integration/react";
import { Provider } from "react-redux";
import store, { persistor } from "./store";
import "antd/dist/reset.css";
import "leaflet/dist/leaflet.css";
import { HashRouter } from "react-router-dom";
import Router from "./routes/index";
function App() {
  return (
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <HashRouter>
          <Router />
        </HashRouter>
      </PersistGate>
    </Provider>
  );
}

export default App;
