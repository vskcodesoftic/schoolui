import AppLayout from 'Layout/AppLayout'
import React from 'react'
import AllAnnouncementsDataTable from './DataTables/AllAnnouncementsDataTable'
import FeeAnnoucementsDataTable from './DataTables/FeeAnnoucementsDataTable'

const AllAnnouncementsPage = () => {
    return (
        <div>
            <AppLayout>
            <div className="m-5 p-5 shadow-lg bg-white ">
             <AllAnnouncementsDataTable />
            </div>
            <div className="m-5 p-5 shadow-lg bg-white" >
            <FeeAnnoucementsDataTable />
            </div>
            </AppLayout>
        </div>
    )
}

export default AllAnnouncementsPage
