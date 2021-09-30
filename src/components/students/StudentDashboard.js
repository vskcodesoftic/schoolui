import React from 'react'
import StudentAttendenceChart from './Sections/Attendence'


const StudentDashboard = () => {
    return (
        <div>
                          <div className="p-5 mt-2">
                 <h1 className="text-center text-3xl capitalize">Welcome Jordan</h1>

                 <div className="flex gap-4 gap-x-4 gap-y-4 xl:grid-cols-2 grid-col-1 mt-5">
                    <div className="bg-orange-100 p-5 w-full">
                        <StudentAttendenceChart />
                    </div>
                    <div className="p-5 bg-red-100 w-1/4 w-full">
                        <StudentAttendenceChart />
                    </div>
                 </div>



                 {/* second row */}

                 <div className="grid gap-4  gap-x-8 gap-y-4 grid-cols-2 mt-5">
                    <div className="bg-orange-100  w-full p-5"><StudentAttendenceChart /></div>
                    <div className="p-5 bg-red-100">2</div>
                   
                 </div>

            </div>
        </div>
   )
}

export default StudentDashboard
