import React from 'react'
import Navbar from '../../Navbar'
import SideNav from '../SideNav'
import MonthlyAttendenceCard from './Cards/AttendenceCard'
import StudentAttendenceChart from './Charts/StudentAttendenceChart'
import IncomeChart from './Charts/FacultyAttendenceChart'
import FeesOverview from './FeesOverview'
import Header from '../Header'
import LibarayOverview from './LibarayOverview'
import { NavSidebar } from 'Layout/NavSidebar'
import ImportantTasks from './ImportantTasks'
import TimeTable from './TimeTable'
import TimeTableDataTable from '../DataTables/TimeTableDataTable'
import FacultyAttendenceDataTable from 'components/Admin/DataTables/FeeAnnoucementsDataTable'
import FeeAnnoucementsDataTable from 'components/students/Sections/DataTables/FeeAnnoucementsDataTable'
import TestTabs from './Tabs/Tabs'
const TeacherDashboard = (props) => {
    return (
        <>
        <div class="grid grid-flow-col grid-col-4 ">
                <div className="grid col-span-3">
                            <div className="">
                                   <Header />
                            
                            <div className="p-2  gap-2">
                                         
                                            <div className=" grid grid-flow-col grid-rows-3 md:grid-rows-3 p-5 shadow-2xl m-2 bg-white">
                                           <ImportantTasks />
                                             <>
                                            <TimeTableDataTable  />
                                            </>
                                            <TestTabs />
 
                             </div>
                                         
                            
                            </div>


                            <div className="p-2 grid grid-flow-col grid-rows-3 md:grid-rows-1 gap-2">
                                            <div className="flex p-2 my-2">
                                                <MonthlyAttendenceCard/>
                                            </div>
                                            <div className="flex p-2 my-2">
                                                <FeesOverview />
                                            </div>
                                            {/* <div className="flex p-2 my-2">
                                                <LibarayOverview />
                                            </div> */}
                            </div>
                        
                             
                     
                         </div>
                    
                            
                            </div>
                </div>
        
        </>
    )
}

export default TeacherDashboard
