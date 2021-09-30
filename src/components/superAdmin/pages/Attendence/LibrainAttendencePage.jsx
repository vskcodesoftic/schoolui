import React from 'react'
import Header from '../../Header'
import LibrainAttendencePageChart from '../../sections/Charts/LibrainAttendenceChart'
import LibrainAttendencePageDataTable from '../../DataTables/Attendence/LibrainAttendenceDataTable'

const LibrainAttendencePage = (props) => {
    return (
        <>
        <div class="grid grid-flow-col grid-col-4 ">
                <div className="grid col-span-3">
                            <div className="">
                                   <Header />
                                   <div className="flex p-5 m-1 shadow-2lg justify-center">
                                        <h1 className="text-center text-green-400 font-bold text-2xl underline">librarian Attendence </h1>
                                    </div>
                                   <div className="flex justify-center items-center p-5 bg-white shadow-2xl m-2">
                                   <LibrainAttendencePageChart />

                                   </div>
                            <div className=" grid grid-flow-col grid-rows-3 md:grid-rows-3 p-5 shadow-2xl m-2 bg-white">
                                     
                                    <LibrainAttendencePageDataTable className="" />
     

                            </div>


                         </div>
                    
                            
                            </div>
                </div>
        
        </>
    )
}

export default LibrainAttendencePage
