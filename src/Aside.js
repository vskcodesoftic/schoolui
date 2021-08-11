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

import { FaTachometerAlt, FaGem, FaList, FaGithub, FaRegLaughWink, FaHeart, FaUser, FaMailBulk, FaMoneyBill } from 'react-icons/fa';
import sidebarBg from './assets/bg1.jpg';

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
            <Link to="/admin/dashboard" />
          </MenuItem>
          <MenuItem icon={<FaMoneyBill/>}> {intl.formatMessage({ id: 'Revenue' })}  
</MenuItem>
        </Menu>
        <Menu iconShape="circle">

          <SubMenu title={intl.formatMessage({ id: 'Roles' })} icon={<FaList />}>
         
          <SubMenu title={`${intl.formatMessage({ id: 'Admin' })} `}>
              <MenuItem>{intl.formatMessage({ id: 'View Data' })}  </MenuItem>
              <MenuItem>{intl.formatMessage({ id: 'View Attendence' })} <Link to="/superadmin/attendence/admin" />  </MenuItem>
          </SubMenu>

          <SubMenu title={`${intl.formatMessage({ id: 'Accountant' })} `}>
              <MenuItem>{intl.formatMessage({ id: 'View Data' })}  </MenuItem>
              <MenuItem>{intl.formatMessage({ id: 'View Attendence' })}  <Link to="/superadmin/attendence/accountant" />   </MenuItem>
          </SubMenu>

          <SubMenu title={`${intl.formatMessage({ id: 'Clerk' })} `}>
              <MenuItem>{intl.formatMessage({ id: 'View Data' })}  </MenuItem>
              <MenuItem>{intl.formatMessage({ id: 'View Attendence' })}  <Link to="/superadmin/attendence/clerk" />  </MenuItem>
          </SubMenu>

          <SubMenu title={`${intl.formatMessage({ id: 'librarian' })} `}>
              <MenuItem>{intl.formatMessage({ id: 'View Data' })}  </MenuItem>
              <MenuItem>{intl.formatMessage({ id: 'View Attendence' })}  <Link to="/superadmin/attendence/librarian" />  </MenuItem>
          </SubMenu>

            <SubMenu title={`${intl.formatMessage({ id: 'Students' })} `}>
              <MenuItem>{intl.formatMessage({ id: 'View Data' })}   </MenuItem>
              <MenuItem>{intl.formatMessage({ id: 'View Attendence' })}  <Link to="/superadmin/attendence/student" /> </MenuItem>
            </SubMenu>

                
          <SubMenu title={intl.formatMessage({ id: 'Teachers' })} icon={<FaList />}>

    <SubMenu title={`${intl.formatMessage({ id: 'Permanent' })}  `}>
    <MenuItem>{intl.formatMessage({ id: 'View Attendence' })} <Link to="/superadmin/attendence/teacher" /> </MenuItem>

</SubMenu>
<SubMenu title={`${intl.formatMessage({ id: 'Tempaory' })}  `}>
<MenuItem>{intl.formatMessage({ id: 'View Attendence' })} <Link to="/superadmin/attendence/temporary-teacher" /> </MenuItem>

  </SubMenu>
</SubMenu>

        </SubMenu>
          
          

        <MenuItem icon={<FaMailBulk />}> {intl.formatMessage({ id: 'Announcements' })}  
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
