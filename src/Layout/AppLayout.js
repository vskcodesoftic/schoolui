import Navbar from 'components/Navbar'
import React from 'react'
import DashboardLayout from './AdminLayout'
import BodyWrapper from './BodyWrapper'
import { NavSidebar } from './NavSidebar'

const AppLayout = ({children}) => {
    return (
        <>
        <BodyWrapper>
            <Navbar />
        <div className="flex h-screen bg-gray-200">
          <NavSidebar />
  
          <div className="flex flex-col flex-1 overflow-hidden">
            <main className="content">
              <section className="">
                <div
                  className="content-box"
                  style={{ flexGrow: 2, flexBasis: "0%" }}
                >
                  {children}
                </div>
              </section>
            </main>
          </div>
        </div>
      </BodyWrapper>
</>
    )
}

export default AppLayout
