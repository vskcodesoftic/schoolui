import React from 'react'
import ProgressBar from '../ProgressBar/ProgressBar'
const MonthlyAttendenceCard = () => {
    return (
        <div className="p-2 grid grid-flow-rows gap-2 flex w-full pb-6 shadow-2xl">
            <div  className="bg-green-400 p-2 shadow-2xl ">
               <h1 className="text-center">Monthly Attendence</h1>
            </div>

            <div  className=" p-4 inline-flex justify-between border-b-2 border-green-600">
            <h1 className="">Present</h1>
            <h1 className="">142</h1>
            </div>

            <div  className=" p-4 inline-flex justify-between border-b-2 border-green-600">
            <h1 className="">Absent</h1>
            <h1 className="">6</h1>
            </div>

            <div  className=" p-4 inline-flex justify-between border-b-2 border-green-600">
            <h1 className="">on Leave</h1>
            <h1 className="">10</h1>
            </div>
            <div  className=" p-4 inline-flex justify-between border-b-2 border-green-600">
            <h1 className="">Half Day</h1>
            <h1 className="">12</h1>
            </div>
           
        </div>
    )
}

export default MonthlyAttendenceCard
