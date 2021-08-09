import React from 'react'
import AttendenceCard from '../../sections/Cards/AttendenceCard'
import StudentAttendenceChart from '../../sections/Charts/StudentAttendenceChart'
import IncomeChart from '../../sections/Charts/IncomeChart'
import FeesOverview from '../../sections/FeesOverview'
import Header from '../../Header'
import LibarayOverview from '../../sections/LibarayOverview'

import { Listbox } from '@headlessui/react'
import { ChevronDownIcon } from '@heroicons/react/solid'
import DropListBox from '../../sections/DropDown/ClassSectionDropDown'

const StudentAttendence = (props) => {
    return (
        <>
        <div class="grid grid-flow-col grid-col-4 ">
                <div className="grid col-span-3">
                            <div className="">
                                   <Header />
                           
                            <div className="p-2 grid grid-flow-col grid-rows-2 md:grid-rows-2  gap-2">
                                            <div className="flex bg-white p-2 my-2 flex justify-center shadow-lg">
                                            <StudentAttendenceChart />
                                            </div>
                                            <div className="flex p-2 my-2  flex justify-center shadow-lg">
                                                <DropListBox />
                                            </div>
                            
                            </div>


                         </div>
                    
                            
                            </div>
                </div>
        
        </>
    )
}

export default StudentAttendence
