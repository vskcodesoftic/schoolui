import React from 'react';
import { useIntl } from 'react-intl';
import Switch from 'react-switch';
import { FaHeart, FaBars } from 'react-icons/fa';
import { Redirect, Route } from 'react-router';

import TeacherDashboard from '../../components/Teacher/sections/TeacherDashboard';
import StudentAttendence from '../../components/Teacher/pages/Attendence/StudentAttendence';
import MarkStudentAttendence from '../../components/Teacher/pages/Attendence/MarkStudentAttendence';

import MyAttendencePage from '../../components/Teacher/pages/Attendence/MyAttendencePage'
import ProfilePage from '../../components/Teacher/pages/Profile/ProfilePage';
import EditTeacherProfile from '../../components/Teacher/pages/Profile/EditProfile';
import StudentDetailsPage from '../../components/Teacher/pages/StudentDetails/StudentDetailsPage';
import MessageToGuardian from '../../components/Teacher/pages/MesageToGuardian/MessageToGuardian';
import AssignmentsPage from '../../components/Teacher/pages/Assignment/AssingmentsPage';
import LeaveApplicationPage from '../../components/Teacher/pages/LeaveApplication/LeaveApplicationPage';

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
      <div className="btn-toggle p-2 mt-3" onClick={() => handleToggleSidebar(true)}>
        <FaBars className="" />
      </div>
     
   
    
    <Route exact path="/teacher/dashboard">
      <TeacherDashboard />
    </Route>

{/* Mark Attendence */}

<Route exact path="/teacher/mark-attendence/student">
    <MarkStudentAttendence />
</Route>

<Route exact path="/teacher/attendence/view/student">
    <StudentAttendence />
</Route>


<Route exact path="/teacher/attendence/view">
    <MyAttendencePage />
</Route>

{/*end   Attendence */}

{/* Profile page */}

<Route exact path="/teacher/profile/view">
  <ProfilePage />
</Route>

<Route exact path="/teacher/profile/edit">
  <EditTeacherProfile />
</Route>

<Route exact path="/teacher/view/studentDetails">
  <StudentDetailsPage />
</Route>


<Route exact path="/teacher/message/toGuardian">
  <MessageToGuardian />
</Route>

<Route exact path="/teacher/assign/assignment">
  <AssignmentsPage />
</Route>

<Route exact path="/teacher/apply/forLeave">
  <LeaveApplicationPage />
</Route>
     <Route exact path="/">   
     <Redirect to="/teacher/dashboard" />
     </Route>   

     <Redirect exact from="/" to="/teacher/dashboard" /> 
  </main>
  );
};

export default Main;
