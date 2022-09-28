import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import 'animate.css';
import "rsuite/dist/rsuite.min.css";
import { BrowserRouter} from 'react-router-dom'
import { store } from "./store/store";
import { Provider } from "react-redux";
import { CustomProvider } from "rsuite";

ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <Provider store={store}>
      <React.StrictMode>
        <CustomProvider theme="dark">
          <App />
        </CustomProvider>
      </React.StrictMode>
    </Provider>
  </BrowserRouter>
);
