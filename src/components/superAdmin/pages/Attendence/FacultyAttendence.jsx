import React from 'react'
import Header from '../../Header'
import FacultyAttendenceChart from '../../sections/Charts/FacultyAttendenceChart'
import FacultyAttendenceDataTable from '../../DataTables/FacultytAttendenceDataTable'

const FacultyAttendence = (props) => {
    return (
        <>
        <div class="grid grid-flow-col grid-col-4 ">
                <div className="grid col-span-3">
                            <div className="">
                                   <Header />
                                   <div className="flex p-5 m-1 shadow-2lg justify-center">
                                        <h1 className="text-center text-green-400 font-bold text-2xl underline">Faculty Attendence </h1>
                                    </div>
                                   <div className="flex justify-center items-center p-5 bg-white shadow-2xl m-2">
                                   <FacultyAttendenceChart />

                                   </div>
                            <div className=" grid grid-flow-col grid-rows-3 md:grid-rows-3 p-5 shadow-2xl m-2 bg-white">
                                     
                                    <FacultyAttendenceDataTable className="" />
     

                            </div>


                         </div>
                    
                            
                            </div>
                </div>
        
        </>
    )
}

export default FacultyAttendence
