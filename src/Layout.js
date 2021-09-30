import React, { useEffect, useState } from 'react';
import Aside from './Aside';
import Main from './Main';

import TeacherAside from './Screens/Teacher/Aside'
import TeacherMain from './Screens/Teacher/Main'

import AccountantAside from './Screens/Accountant/Aside'
import AccountantMain from './Screens/Accountant/Main'
import LibrarianAside from './Screens/librarian/Aside';
import LibrarianMain from './Screens/librarian/Main';

import { Route } from 'react-router';
import { useDispatch , useSelector , connect } from 'react-redux';


function Layout(props) {
 console.log("lay props => ", props)
  const userRole = props.authState.userRole;
  const setLocale = "en"

  const [rtl, setRtl] = useState(false);
  const [collapsed, setCollapsed] = useState(false);
  const [image, setImage] = useState(true);
  const [toggled, setToggled] = useState(false);

  const [isAdmin, setisAdmin] = useState(false)
  const [isTeacher, setisTeacher] = useState(false)
  const [isSuperAdmin, setisSuperAdmin] = useState(true)

  const handleCollapsedChange = (checked) => {
    setCollapsed(checked);
  };

  const handleRtlChange = (checked) => {
    setRtl(checked);
    setLocale(checked ? 'ar' : 'en');
  };
  const handleImageChange = (checked) => {
    setImage(checked);
  };

  const handleToggleSidebar = (value) => {
    setToggled(value);
  };



 const role = userRole;

 switch (role) {
   case "superadmin":
     return <p>hello</p>;
   case "admin":
     return (
       <div className={`app ${rtl ? "rtl" : "en"} ${toggled ? "toggled" : ""}`}>
         <Aside
           image={image}
           collapsed={collapsed}
           rtl={rtl}
           toggled={toggled}
           handleToggleSidebar={handleToggleSidebar}
         />
         <Main
           image={image}
           toggled={toggled}
           collapsed={collapsed}
           rtl={rtl}
           handleToggleSidebar={handleToggleSidebar}
           handleCollapsedChange={handleCollapsedChange}
           handleRtlChange={handleRtlChange}
           handleImageChange={handleImageChange}
         />
       </div>
     );
   case "teacher":
     return (
       <div className={`app ${rtl ? "rtl" : ""} ${toggled ? "toggled" : ""}`}>
         <TeacherAside
           image={image}
           collapsed={collapsed}
           rtl={rtl}
           toggled={toggled}
           handleToggleSidebar={handleToggleSidebar}
         />
         <TeacherMain
           image={image}
           toggled={toggled}
           collapsed={collapsed}
           rtl={rtl}
           handleToggleSidebar={handleToggleSidebar}
           handleCollapsedChange={handleCollapsedChange}
           handleRtlChange={handleRtlChange}
           handleImageChange={handleImageChange}
         />
       </div>
     );
   case "accountant":
     return (
       <div className={`app ${rtl ? "rtl" : ""} ${toggled ? "toggled" : ""}`}>
         <AccountantAside
           image={image}
           collapsed={collapsed}
           rtl={rtl}
           toggled={toggled}
           handleToggleSidebar={handleToggleSidebar}
         />
         <AccountantMain
           image={image}
           toggled={toggled}
           collapsed={collapsed}
           rtl={rtl}
           handleToggleSidebar={handleToggleSidebar}
           handleCollapsedChange={handleCollapsedChange}
           handleRtlChange={handleRtlChange}
           handleImageChange={handleImageChange}
         />
       </div>
     );
   case "librarian":
     return (
       <div className={`app ${rtl ? "rtl" : ""} ${toggled ? "toggled" : ""}`}>
         <LibrarianAside
           image={image}
           collapsed={collapsed}
           rtl={rtl}
           toggled={toggled}
           handleToggleSidebar={handleToggleSidebar}
         />
         <LibrarianMain
           image={image}
           toggled={toggled}
           collapsed={collapsed}
           rtl={rtl}
           handleToggleSidebar={handleToggleSidebar}
           handleCollapsedChange={handleCollapsedChange}
           handleRtlChange={handleRtlChange}
           handleImageChange={handleImageChange}
         />
       </div>
     );

   default:
     return <p>default vvv</p>;
 }

}


function mapStateToProps(state) {
  const { auth } = state;
  return { authState: auth };
}

export default connect(mapStateToProps)(Layout);

