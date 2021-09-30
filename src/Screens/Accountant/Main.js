import React from 'react';
import { useIntl } from 'react-intl';
import Switch from 'react-switch';
import { FaHeart, FaBars } from 'react-icons/fa';
import { Redirect, Route } from 'react-router';

import AccountantDashboard from '../../components/Accountant/sections/AccountantDashboard';
import { FeesCollectionPage } from '../../components/Accountant/pages/Fees/FeesCollectionPage';
import { CheckIncomePage } from '../../components/Accountant/pages/Income/CheckIncome';
import AddIncomePage from '../../components/Accountant/pages/Income/AddIncomePage';
import { CheckExpensePage } from '../../components/Accountant/pages/Expense/CheckExpensePage';
import AddExpensePage from '../../components/Accountant/pages/Expense/AddExpensePage';
import AddStudentPage from '../../components/Accountant/pages/Students/AddStudentPage';
import LeaveApplicationPage from '../../components/Accountant/pages/LeaveApplication/LeaveApplicationPage';
import ViewStudentsPage from '../../components/Accountant/pages/Students/ViewStudentsPage';

const AccountantMain = ({
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
     
      
    
    <Route exact path="/Accountant/dashboard">
      <AccountantDashboard />
    </Route>

    <Route exact path="/Accountant/fee/feeCollection">
      <FeesCollectionPage />
    </Route>

    <Route exact path="/Accountant/income/checkincome">
      <CheckIncomePage />
    </Route>

    <Route exact path="/Accountant/income/addincome">
      <AddIncomePage />
    </Route>
   
   <Route exact path="/Accountant/expense/checkExpense">
     <CheckExpensePage />
   </Route>

   <Route exact path="/Accountant/expense/addExpense">
     <AddExpensePage />
   </Route>
  
  <Route exact path="/Accountant/students/AddStudent" >
    <AddStudentPage />
  </Route>

  <Route exact path="/Accountant/students/viewStudents">
    <ViewStudentsPage />
  </Route>

  <Route exact path="/Accountant/apply/forLeave">
    <LeaveApplicationPage />
  </Route>

     <Route exact path="/">   
     <Redirect to="/Accountant/dashboard" />
     </Route>   

  </main>
  );
};

export default AccountantMain;
