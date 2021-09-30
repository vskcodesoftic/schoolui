import React from 'react';
import { useIntl } from 'react-intl';
import {
  ProSidebar,
  Menu,
  MenuItem,
  SubMenu,
  SidebarHeader,
  SidebarFooter,
  SidebarContent,
} from 'react-pro-sidebar';
import { Link } from 'react-router-dom';

import { FaTachometerAlt, FaGem, FaList, FaGithub, FaRegLaughWink, FaHeart, FaUser, FaMailBulk, FaMoneyBill, FaMailchimp, FaFax, FaUniversity, FaWpforms } from 'react-icons/fa';

const AccountantAside = ({ image, collapsed, rtl, toggled, handleToggleSidebar }) => {
  const intl = useIntl();
  return (
    <ProSidebar
      image={image ? "https://scx2.b-cdn.net/gfx/news/2020/1-children.jpg" : false}
      rtl={rtl}
      collapsed={collapsed}
      toggled={toggled}
      breakPoint="md"
      onToggle={handleToggleSidebar}
    >
      <SidebarHeader>
        <div
          style={{
            padding: '24px',
            textTransform: 'uppercase',
            fontWeight: 'bold',
            fontSize: 14,
            letterSpacing: '1px',
            overflow: 'hidden',
            textOverflow: 'ellipsis',
            whiteSpace: 'nowrap',
            textAlign:'center'
          }}
        >
          {intl.formatMessage({ id: 'sidebarTitle' })}
        </div>
      </SidebarHeader>

      <SidebarContent>
        <Menu iconShape="circle">
          <MenuItem
            icon={<FaTachometerAlt />}
         >
            {intl.formatMessage({ id: 'dashboard' })}
            <Link to="/Accountant/dashboard" />
          </MenuItem>

          
          <MenuItem icon={<FaUser/>}> {intl.formatMessage({ id: 'Inventory' })} <Link to="/Accountant/profile/view" />  </MenuItem>

        
        </Menu>
        <Menu iconShape="circle">

          <SubMenu title={intl.formatMessage({ id: 'Fees Collection' })} icon={<FaList />}>
         
              <MenuItem>{intl.formatMessage({ id: ' Collection' })}  <Link to="/Accountant/fee/feeCollection" /> </MenuItem>
              <MenuItem>{intl.formatMessage({ id: ' Fees Reminder' })} <Link to="/Accountant/attendence/view/student" />  </MenuItem>
              
        </SubMenu>
          
        <SubMenu title={intl.formatMessage({ id: 'Income' })} icon={<FaList />}>
              <MenuItem>{intl.formatMessage({ id: 'Add Income' })}  <Link to="/Accountant/income/addIncome" />   </MenuItem>
              <MenuItem>{intl.formatMessage({ id: 'Check Income' })}  <Link to="/Accountant/income/checkincome" />   </MenuItem>

          </SubMenu>
          
        <SubMenu title={`${intl.formatMessage({ id: 'Expenses' })} `} icon={<FaWpforms />}>
        <MenuItem icon={<FaMailBulk />}> {intl.formatMessage({ id: 'Add Expense' })}  
        <Link to="/Accountant/expense/addExpense" />
        </MenuItem>

        <MenuItem icon={<FaMailBulk />}> {intl.formatMessage({ id: 'Check Expense' })}  
        <Link to="/Accountant/expense/checkExpense" />
        </MenuItem>
        </SubMenu>
        
        <SubMenu title={`${intl.formatMessage({ id: 'Students' })} `} icon={<FaWpforms />}>
        <MenuItem icon={<FaMailBulk />}> {intl.formatMessage({ id: 'View Data' })}  
        <Link to="/Accountant/students/viewStudents" />
        </MenuItem>

        <MenuItem icon={<FaMailBulk />}> {intl.formatMessage({ id: 'Add Student' })}  
        <Link to="/Accountant/students/AddStudent" />
        </MenuItem>
        </SubMenu>

        <MenuItem icon={<FaFax/>}> {intl.formatMessage({ id: 'Hostel' })}  
        <Link to="/Accountant/apply/forLeave" />
       </MenuItem>

        <MenuItem icon={<FaFax/>}> {intl.formatMessage({ id: 'Leave Applicaion' })}  
        <Link to="/Accountant/apply/forLeave" />
       </MenuItem>

       </Menu>
      </SidebarContent>

      <SidebarFooter style={{ textAlign: 'center' }}>
        <div
          className="sidebar-btn-wrapper"
          style={{
            padding: '20px 24px',
          }}
        >
          <a
            href="https://github.com/azouaoui-med/react-pro-sidebar"
            target="_blank"
            className="sidebar-btn"
            rel="noopener noreferrer"
          >
            <FaUser />
            <span> {intl.formatMessage({ id: 'contact us' })}</span>
          </a>
        </div>
      </SidebarFooter>
    </ProSidebar>
  );
};

export default AccountantAside;
