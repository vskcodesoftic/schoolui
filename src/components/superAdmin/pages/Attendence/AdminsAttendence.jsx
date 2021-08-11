import React from 'react'
import Header from '../../Header'
import AdminsAttendenceChart from '../../sections/Charts/AdminsAttendenceChart'
import AdminsAttendenceDataTable from '../../DataTables/AdminAttendenceDataTable'

const AdminsAttendence = (props) => {
    return (
        <>
        <div class="grid grid-flow-col grid-col-4 ">
                <div className="grid col-span-3">
                            <div className="">
                                   <Header />
                                   <div className="flex p-5 m-1 shadow-2lg justify-center">
                                        <h1 className="text-center text-green-400 font-bold text-2xl underline">Admins Attendence </h1>
                                    </div>
                                   <div className="flex justify-center items-center p-5 bg-white shadow-2xl m-2">
                                   <AdminsAttendenceChart />

                                   </div>
                            <div className=" grid grid-flow-col grid-rows-3 md:grid-rows-3 p-5 shadow-2xl m-2 bg-white">
                                     
                                    <AdminsAttendenceDataTable className="" />
     

                            </div>


                         </div>
                    
                            
                            </div>
                </div>
        
        </>
    )
}

export default AdminsAttendence
