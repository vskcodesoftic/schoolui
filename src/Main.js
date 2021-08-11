import React from 'react';
import { useIntl } from 'react-intl';
import Switch from 'react-switch';
import { FaHeart, FaBars } from 'react-icons/fa';
import reactLogo from './assets/logo.svg';
import { Route } from 'react-router';

import AdminDashboard from './components/Admin/sections/AdminDashboard'

import SuperAdminDashboard from './components/superAdmin/sections/SuperAdminDashboard'

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

  </main>
  );
};

export default Main;
