import React from 'react';
import { useIntl } from 'react-intl';
import Switch from 'react-switch';
import { FaHeart, FaBars } from 'react-icons/fa';
import reactLogo from './assets/logo.svg';
import { Route } from 'react-router';

import AdminDashboard from './components/Admin/sections/AdminDashboard'

import SuperAdminDashboard from './components/superAdmin/sections/SuperAdminDashboard'
import FacultyAttendence from './components/superAdmin/pages/Attendence/FacultyAttendence';
import StudentAttendence from './components/superAdmin/pages/Attendence/StudentAttendence';
import NonPermanentAttendence from './components/superAdmin/pages/Attendence/NonPermanentAttendence';
import AdminsAttendence from './components/superAdmin/pages/Attendence/AdminsAttendence';
import LibrainAttendencePage from './components/superAdmin/pages/Attendence/LibrainAttendencePage';
import AccountantAttendencePage from './components/superAdmin/pages/Attendence/AccountantAttendencePage';
import ClerkAttendencePage from './components/superAdmin/pages/Attendence/ClerkAttendencePage';
import AdminViewDataPage from './components/superAdmin/pages/ViewData/AdminViewDataPage';

const Main = ({
  collapsed,
  rtl,
  image,
  handleToggleSidebar,
  handleCollapsedChange,
  handleRtlChange,
  handleImageChange,
}) => {
  const intl = useIntl();
  return (
    <main>
      <div className="bg-green-500 p-5">

      </div>
      <div className="btn-toggle" onClick={() => handleToggleSidebar(true)}>
        <FaBars />
      </div>
     
     <Route exact path="/admin/dashboard" >
       <AdminDashboard />
     </Route>

     <Route exact path="/superadmin/dashboard" >
       <SuperAdminDashboard />
     </Route>

     <Route exact path="/superadmin/attendence/teacher" >
       <FacultyAttendence />
     </Route>
     <Route exact path="/superadmin/attendence/admin" >
       <AdminsAttendence />
     </Route>

     <Route exact path="/superadmin/attendence/temporary-teacher" >
       <NonPermanentAttendence />
     </Route>

     <Route exact path="/superadmin/attendence/student" >
       <StudentAttendence />
     </Route>

     <Route exact path="/superadmin/attendence/librarian" >
       <LibrainAttendencePage />
     </Route>
     <Route exact path="/superadmin/attendence/accountant" >
       <AccountantAttendencePage />
     </Route>
     <Route exact path="/superadmin/attendence/clerk" >
       <ClerkAttendencePage />
     </Route>

    <Route exact path="/superadmin/data/admin/view">
      <AdminViewDataPage />
    </Route>


  </main>
  );
};

export default Main;
