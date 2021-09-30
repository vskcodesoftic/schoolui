import React from 'react'

import Header from '../../Header'

import  Select  from 'react-select'
import StudentDetailsDataTabel from '../../DataTables/StudentDetailsDataTabel'
import { FaUber } from 'react-icons/fa'

const classRoom = [
    { value: 'Class101', label: 'Class101' },
    { value: 'Class102', label: 'Class101' },

    
  ]

const Section = [
    { value: 'SEC-12343', label: 'SEC-12343' },
    { value: 'SEC-12342', label: 'SEC-12342' },
    { value: 'SEC-32443', label: 'SEC-32443' }
  ]

const StudentDetailsPage = (props) => {
    return (
        <>
  
          <div class="grid grid-flow-col grid-col-4 ">
                <div className="grid col-span-3">
                            <div className="">
                                       <Header />
                                   
                                   <div className="flex p-5 m-1 shadow-2lg justify-center">
                                        <h1 className="text-center text-green-400 font-bold text-2xl underline">Student Details </h1>
                                    </div>

                                    <div className="w-full flex gap-2 pb-5  justify-center">
                                        <Select options={classRoom} className="w-1/4"/>
                                        <Select options={Section} className="w-1/4"/>
                                        <button className="bg-green-400 p-2 px-6 py-1 rounded-full hover:bg-green-500 shadow-lg hover:shadow-2xl">Search</button>
                                    </div>
                          </div>                       
                  </div>
                  
          </div>
         
          <div className="">
              <div className="flex justify-center">
              <div className="bg-amber-400 w-50 p-5  h-22 rounded-lg shadow-lg hover:shadow-2xl">
                    {/* <div className="flex justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
                </div> */}
                <h2 className="text-right text-lg font-bold ">Total Students : 1200</h2>
                </div>
              </div>
       
          <StudentDetailsDataTabel />
         
          </div>
        
        </>
    )
}

export default StudentDetailsPage
