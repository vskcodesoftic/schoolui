import DashboardLayout from 'Layout/AdminLayout'
import AppLayout from 'Layout/AppLayout'
import React from 'react'
import AnnouncementsPage from './Sections/Annoucements'
import AttendencePieChart from './Sections/Attendence'
import OtherExpense from './Sections/OtherExpense'
import SchoolFee from './Sections/SchoolFee'


const StudentDashboard = () => {
    return (
        <div>
            <AppLayout>            <div className="p-5 mt-2">
                 <h1 className="text-center text-3xl capitalize">Welcome Jordan</h1>

                 <div className="flex gap-4 gap-x-4 gap-y-4 xl:grid-cols-2 grid-col-1 mt-5">
                    <div className="bg-orange-100 p-5 w-full">
                        <AnnouncementsPage />
                    </div>
                    <div className="p-5 bg-red-100 w-1/4 w-full">
                        <AttendencePieChart />
                    </div>
                 </div>



                 {/* second row */}

                 <div className="grid gap-4  gap-x-8 gap-y-4 grid-cols-2 mt-5">
                    <div className="bg-orange-100  w-full p-5"><OtherExpense /></div>
                    <div className="p-5 bg-red-100">2</div>
                   
                 </div>

            </div>
            </AppLayout>
        </div>
   )
}

export default StudentDashboard
