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

const Aside = ({ image, collapsed, rtl, toggled, handleToggleSidebar }) => {
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
            <Link to="/teacher/dashboard" />
          </MenuItem>

          <MenuItem icon={<FaUser/>}> {intl.formatMessage({ id: 'Profile' })} <Link to="/teacher/profile/view" />  </MenuItem>
         
          <MenuItem icon={<FaUniversity/>}> {intl.formatMessage({ id: 'Student Details' })}  <Link to="/teacher/view/studentDetails" /> </MenuItem>

          <MenuItem icon={<FaMailBulk/>}> {intl.formatMessage({ id: 'Message to Gurdain' })} <Link to="/teacher/message/toGuardian" />  </MenuItem>


        
        </Menu>
        <Menu iconShape="circle">

          <SubMenu title={intl.formatMessage({ id: 'Attendence' })} icon={<FaList />}>
         
          <SubMenu title={`${intl.formatMessage({ id: 'Student' })} `}>
              <MenuItem>{intl.formatMessage({ id: 'Mark Attendence' })}  <Link to="/teacher/mark-attendence/student" /> </MenuItem>
              <MenuItem>{intl.formatMessage({ id: 'View Attendence' })} <Link to="/teacher/attendence/view/student" />  </MenuItem>
              
          </SubMenu>

          <SubMenu title={`${intl.formatMessage({ id: 'My Attendence' })} `}>
              <MenuItem>{intl.formatMessage({ id: 'View Attendence' })}  <Link to="/teacher/attendence/view" />   </MenuItem>
          </SubMenu>

        </SubMenu>
          
          
        <SubMenu title={`${intl.formatMessage({ id: 'Assignments' })} `} icon={<FaWpforms />}>
        <MenuItem icon={<FaMailBulk />}> {intl.formatMessage({ id: 'Assign Assignments' })}  
        <Link to="/teacher/assign/assignment" />
        </MenuItem>
        </SubMenu>
     
        <MenuItem icon={<FaFax/>}> {intl.formatMessage({ id: 'Leave Applicaion' })}  
        <Link to="/teacher/apply/forLeave" />
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

export default Aside;
