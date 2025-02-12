import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { Provider } from "react-redux";
import "../src/assets/css/Style.css";
import "../src/assets/css/Responsive.css";
import store from "./app/store.js";
// import { BrowserRouter } from "react-router-dom";
import { ThemeProvider } from "./components/ThemeContext.jsx";
// import ProviderWeb3 from "./config/ProviderWeb3.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <ThemeProvider>
    <React.StrictMode>
      {/* <ProviderWeb3 >  */}
        <Provider store={store}>
          <App  />
        </Provider>
      {/* </ProviderWeb3> */}
    </React.StrictMode>
  </ThemeProvider>
);
