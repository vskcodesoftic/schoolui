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
import ForgetPasswordPage from "components/students/Sections/Auth/ForgetPassword/ForgetPasswordPage";
import AuthScreens from "components/students/Sections/Auth/AuthScreens";
import ChangePasswordPage from "components/students/Sections/Auth/ChangePassword/ChangePasswordPage";
import SuperAdminDashboard from "components/superAdmin/sections/SuperAdminDashboard";
import AdminDashboard from "components/Admin/sections/AdminDashboard";
import StudentAttendence from "components/Admin/pages/Attendence/StudentAttendence";

ReactDOM.render(
  <BrowserRouter>
    <Switch>
      <Route exact path="/studentProfile" component={StudentMainDashboard} />  

      <Route exact path="/dashboard" component={StudentDashboard} />  
      <Route exact path="/AllAnnouncements" component={AllAnnouncementsPage} />  
      <Route exact path="/feeAnnouncements" component={FeeAnnoucementsPage} />

      <Route exact path="/login" component={LoginPage} />
      <Route exact path="/changePassword" component={ChangePasswordPage} />
      <Route exact path="/forgetPassword" component={ForgetPasswordPage} />
      <Route exact path="/auth" component={AuthScreens} />

       {/* //superAdminRoutes */}
       <Route exact path="/superAdminDashboard" component={SuperAdminDashboard} />

        {/* //AdminRoutes */}
        <Route exact path="/adminDashboard" component={AdminDashboard} />
        <Route exact path="/admin/getStudentAttendence" component={StudentAttendence} />


      <Redirect from='/' to='/dashboard' />
    </Switch>
  </BrowserRouter>

,
  document.getElementById("root")
);
