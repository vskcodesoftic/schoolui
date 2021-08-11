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
import 'react-pro-sidebar/dist/css/styles.css';

import { FaTachometerAlt, FaGem, FaList, FaGithub, FaRegLaughWink, FaHeart } from 'react-icons/fa';

const SideNav = ({ image, collapsed, rtl, toggled, handleToggleSidebar }) => {
  return (
    <ProSidebar
    collapsed={collapsed}
    toggled={toggled}
    breakPoint="md"
    onToggle={handleToggleSidebar}
    >
    <Menu iconShape="square">
      <MenuItem icon={<FaGem />}>Dashboard</MenuItem>
      <SubMenu title="Components" icon={<FaHeart />}>
        <MenuItem>Component 1</MenuItem>
        <MenuItem>Component 2</MenuItem>
      </SubMenu>
    </Menu>
  </ProSidebar>);
};

export default SideNav;
