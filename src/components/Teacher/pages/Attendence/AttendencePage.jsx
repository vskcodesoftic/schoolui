import DropListBox from 'components/Admin/sections/DropDown/ClassSectionDropDown'
import TimeTableDataTable from 'components/Teacher/DataTables/TimeTableDataTable'
import React from 'react'

export const AttendencePage = () => {
    return (
        <div className="">
            <div className="flex p-5">
            <DropListBox />
            </div>
            <TimeTableDataTable />
        </div>
    )
}
