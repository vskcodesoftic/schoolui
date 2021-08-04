import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";


import "@fortawesome/fontawesome-free/css/all.min.css";
import './index.css';
import "./styles/main.bundle.css";

import Landing from "views/Landing.js";
import AppLayout from "Layout/AppLayout";
import StudentDashboard from "components/students/StudentDashboard";
import AllAnnouncementsPage from "components/students/Sections/AllAnnouncementsPage";
import StudentMainDashboard from "components/students/Sections/studentProfile/StudentMainDashboard";
import DashboardLayout from "Layout/AdminLayout";
import FeeAnnoucementsPage from "components/students/Sections/FeeAnnouncementsPage";
import LoginPage from "components/students/Sections/Auth/Login/LoginPage";

ReactDOM.render(
  <BrowserRouter>
    <Switch>
      <Route exact path="/studentProfile" component={StudentMainDashboard} />  

      <Route exact path="/dashboard" component={StudentDashboard} />  
      <Route exact path="/AllAnnouncements" component={AllAnnouncementsPage} />  
      <Route exact path="/feeAnnouncements" component={FeeAnnoucementsPage} />

      <Route exact path="/login" component={LoginPage} />

      <Redirect from='/' to='/dashboard' />
    </Switch>
  </BrowserRouter>

,
  document.getElementById("root")
);
