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

import { FaTachometerAlt, FaGem, FaList, FaGithub, FaRegLaughWink, FaHeart, FaUser, FaMailBulk, FaMoneyBill, FaMailchimp, FaFax, FaUniversity, FaWpforms, FaBook, FaRegThumbsUp } from 'react-icons/fa';

const LibrarianAside = ({ image, collapsed, rtl, toggled, handleToggleSidebar }) => {
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
            <Link to="/Librarian/dashboard" />
          </MenuItem>

          
          <MenuItem icon={<FaList/>}> {intl.formatMessage({ id: 'Book List' })} <Link to="/Librarian/books/list" />  </MenuItem>

          <MenuItem icon={<FaBook/>}> {intl.formatMessage({ id: 'Book Issued' })} <Link to="/Librarian/books/issued" />  </MenuItem>

          <MenuItem icon={<FaRegThumbsUp/>}> {intl.formatMessage({ id: 'Book Returned' })} <Link to="/Librarian/books/return" />  </MenuItem>
        
          <MenuItem icon={<FaRegThumbsUp/>}> {intl.formatMessage({ id: 'Add Books' })} <Link to="/Librarian/books/addBooks" />  </MenuItem>

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

export default LibrarianAside;
