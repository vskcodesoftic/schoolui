/* eslint-disable react/display-name, jsx-a11y/click-events-have-key-events */
import { Navigation } from "react-minimal-side-navigation";
import { useHistory, useLocation } from "react-router-dom";
import Icon from "awesome-react-icons";
import React, { useState } from "react";

import "react-minimal-side-navigation/lib/ReactMinimalSideNavigation.css";
import Navbar from "components/Navbar";

export const NavSidebar = () => {
  const history = useHistory();
  const location = useLocation('');
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  return (
      
    <React.Fragment>
      {/* Sidebar Overlay */}
      <div
        onClick={() => setIsSidebarOpen(false)}
        className={`fixed inset-0 z-20 block transition-opacity bg-black opacity-50 lg:hidden ${
          isSidebarOpen ? "block" : "hidden"
        }`}
      />

      <div className="absolute right-0">
        <a href="#"></a>
      </div>

      <div>
        <button
          className="btn-menu"
          onClick={() => setIsSidebarOpen(!isSidebarOpen)}
          type="button"
        >
          <Icon name="burger" className="w-6 h-6" />
        </button>
      </div>

      {/* Sidebar */}
      <div
        className={`fixed inset-y-0 left-0 z-30 w-64 overflow-y-auto transition duration-300 ease-out transform translate-x-0 bg-white border-r-2 lg:translate-x-0 lg:static lg:inset-0 ${
          isSidebarOpen ? "ease-out translate-x-0" : "ease-in -translate-x-full"
        }`}
      >
      

        <Navigation
          activeItemId={location.pathname}
          onSelect={({ itemId }) => {
            history.push(itemId);
          }}
          items={[
            {
              title: "Home",
              itemId: "/",
              elemBefore: () => <Icon name="circle" />
            },
            {
                title: "My Profile",
                itemId: "/studentProfile",
                elemBefore: () => <Icon name="arrow-right" />
              },
              {
                title: "All Announcements",
                itemId: "/allAnnouncements",
                elemBefore: () => <Icon name="arrow-right" />
              },
              {
                title: "Fee",
                itemId: "/feeAnnouncements",
                elemBefore: () => <Icon name="arrow-right" />
              },
              {
                title: "Class TimeTable",
                itemId: "/studentProfile",
                elemBefore: () => <Icon name="arrow-right" />
              },
              {
                title: "Syllabus",
                itemId: "/studentProfile",
                elemBefore: () => <Icon name="arrow-right" />
              },
              {
                title: "Attendence",
                itemId: "/studentProfile",
                elemBefore: () => <Icon name="arrow-right" />
              },
              {
                title: "Subjects",
                itemId: "/studentProfile",
                elemBefore: () => <Icon name="arrow-right" />
              },
              {
                title: "Teacher",
                itemId: "/studentProfile",
                elemBefore: () => <Icon name="arrow-right" />
              },  {
                title: "HomeWork",
                itemId: "/studentProfile",
                elemBefore: () => <Icon name="arrow-right" />
              },  {
                title: "Examination",
                itemId: "/studentProfile",
                elemBefore: () => <Icon name="arrow-right" />
              },  {
                title: "Library",
                itemId: "/studentProfile",
                elemBefore: () => <Icon name="arrow-right" />
              },
            // {
            //   title: "Teacher",
            //   itemId: "/AllAnnouncements",
            //   elemBefore: () => <Icon name="user" />,
            //   subNav: [
            //     {
            //       title: "HomeWork",
            //       itemId: "/about/projects"
            //     },
            //     {
            //       title: "Examination",
            //       itemId: "/about/members"
            //     }
            //   ]
            // },
            // {
            //   title: "Another Tab",
            //   itemId: "/another",
            //   subNav: [
            //     {
            //       title: "Teams",
            //       itemId: "/another/teams"
            //     }
            //   ]
            // }
          ]}
        />

      </div>
    </React.Fragment>
  );
};
