import React , { useState } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { ToastContainer, Slide } from "react-toastify";
import { Provider } from "react-redux";
import { store , persistedStore } from "./store";
import "react-toastify/dist/ReactToastify.css";
import Login from "./components/Teacher/Auth/Login/LoginPage";
import AdminWelcome from "./components/TEST/TestAdmin";
import { IntlProvider } from "react-intl";

import { PersistGate } from 'redux-persist/integration/react'
import messages from "./messages";
import "./styles/App.scss";
import Layout from "./Layout";

function App() {
  const [locale, setLocale] = useState("en");
  const [RoleType, setRoleType] = useState("librarian");

  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistedStore}>
        <IntlProvider locale={locale} messages={messages[locale]}>
          <Router>
            <React.Fragment>
              <ToastContainer
                position="top-right"
                autoClose={2000}
                hideProgressBar
                newestOnTop
                closeOnClick
                transition={Slide}
              />
              <Switch>
                <Route exact path="/" component={Login} />
                <Layout setLocale={setLocale} />
              </Switch>
            </React.Fragment>
          </Router>
        </IntlProvider>
      </PersistGate>
    </Provider>
  );
}

export default App;
