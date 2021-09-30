import React from 'react'

import { Link } from 'react-router-dom'

import StudentsMarkAttendenceData from '../../DataTables/ViewData/MarkAttendenceData'


import Header from '../../Header'

import Select from 'react-select'

const classes = [
    { value: 'Class-5', label: 'Class-5' },
    { value: 'Class-6', label: 'Class-6' },
    { value: 'Class-7', label: 'Class-7' },
    
  ]


const sections = [
    { value: 'sectionD1043', label: 'sectionD1043' },
    { value: 'sectionD1042', label: 'sectionD1042' },
    { value: 'sectiond1405', label: 'sectiond1405' }
  ]

const MarkStudentAttendence = (props) => {
    return (
        <>
  
          <div class="grid grid-flow-col grid-col-4 ">
                <div className="grid col-span-3">
                            <div className="">
                                       <Header />
                                   
                                   <div className="flex p-5 m-1 shadow-2lg justify-center">
                                        <h1 className="text-center text-green-400 font-bold text-2xl underline">Students Attendence </h1>
                                    </div>
                                    <div className="w-full flex gap-2 pb-5  justify-center">
                                        <Select options={classes} className="w-1/4"/>
                                        <Select options={sections} className="w-1/4"/>
                                    </div>
                                    <Link to="/teacher/attendence/view/student">
                                    <button className="p-5 text-white bg-green-400 m-5 px-4 py-1 rounded-2xl hover:bg-green-500 ">View Attendence</button>
                                    </Link>

                          </div>                       
                  </div>
                  
          </div>
         
          <div>
       
          <StudentsMarkAttendenceData />
         
          </div>
        
        </>
    )
}

export default MarkStudentAttendence
