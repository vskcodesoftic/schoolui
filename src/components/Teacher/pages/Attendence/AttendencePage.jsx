import React, { Component } from 'react'

import DropListBox from 'components/Admin/sections/DropDown/ClassSectionDropDown'
import TimeTableDataTable from 'components/Teacher/DataTables/TimeTableDataTable'
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
export const AttendencePage = () => {
    return (

        <div className="p-5">
               <div className="w-full flex gap-2 justify-center">
               <Select options={classes} className="w-1/4"/>
               <Select options={sections} className="w-1/4"/>
               <div>
                   <button className="px-4 py-2 bg-green-500 hover:bg-green-400 text-white rounded-2xl">Search</button>
               </div>
               </div>
            <TimeTableDataTable />
        </div>

    )
}
