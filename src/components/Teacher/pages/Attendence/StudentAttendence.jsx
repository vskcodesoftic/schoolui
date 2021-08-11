import React from 'react'
import AttendenceCard from '../../sections/Cards/AttendenceCard'
import StudentAttendenceChart from '../../sections/Charts/StudentAttendenceChart'
import IncomeChart from '../../sections/Charts/FacultyAttendenceChart'
import FeesOverview from '../../sections/FeesOverview'
import Header from '../../Header'
import LibarayOverview from '../../sections/LibarayOverview'

import { Listbox } from '@headlessui/react'
import { ChevronDownIcon } from '@heroicons/react/solid'
import DropListBox from '../../sections/DropDown/ClassSectionDropDown'
import StudentAttendenceDataTable from 'components/Admin/DataTables/StudentAttendenceDataTable'
import FeeAnnoucementsDataTable from 'components/students/Sections/DataTables/FeeAnnoucementsDataTable'
import AllAnnouncementsDataTable from 'components/students/Sections/DataTables/AllAnnouncementsDataTable'

const StudentAttendence = (props) => {
    return (
        <>
          <div class="grid grid-flow-col grid-col-4 ">
                <div className="grid col-span-3">
                            <div className="">
                                       <Header />
                                   <div className="flex p-5 m-1 shadow-2lg justify-center">
                                        <h1 className="text-center text-green-400 font-bold text-2xl underline">Students Attendence </h1>
                                    </div>
                                   <div className="flex justify-center items-center p-5 bg-white shadow-2xl m-2">
                                        <StudentAttendenceChart />
                                   </div>
                                <div className=" flex grid grid-flow-col grid-rows-2 md:grid-rows-2 p-5 shadow-2xl m-2 bg-white">               
                                        <StudentAttendenceDataTable className="" />
                                </div>
                          </div>                       
                  </div>
          </div>
        
        </>
    )
}

export default StudentAttendence
