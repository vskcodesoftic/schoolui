import React from 'react'
import Header from '../../Header'
import NonPermanentAttendenceChart from '../../sections/Charts/NonPemanentStaffAttendenceChart'
import NonPermanentAttendenceDataTable from '../../DataTables/NonPermanentStaff'

const NonPermanentAttendence = (props) => {
    return (
        <>
        <div class="grid grid-flow-col grid-col-4 ">
                <div className="grid col-span-3">
                            <div className="">
                                   <Header />
                                   <div className="flex p-5 m-1 shadow-2lg justify-center">
                                        <h1 className="text-center text-green-400 font-bold text-2xl underline"> Attendence </h1>
                                    </div>
                                   <div className="flex justify-center items-center p-5 bg-white shadow-2xl m-2">
                                   <NonPermanentAttendenceChart />

                                   </div>
                            <div className=" grid grid-flow-col grid-rows-3 md:grid-rows-3 p-5 shadow-2xl m-2 bg-white">
                                     
                                    <NonPermanentAttendenceDataTable className="" />
     

                            </div>


                         </div>
                    
                            
                            </div>
                </div>
        
        </>
    )
}

export default NonPermanentAttendence
