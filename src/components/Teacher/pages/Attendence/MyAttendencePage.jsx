import React from 'react'

import Header from '../../Header'

import MyAttendenceDataTable from '../../DataTables/ViewData/MyAttendenceDataTable'
import  Select  from 'react-select'

const year = [
    { value: '2021', label: '2021' },
    { value: '2022', label: '2022' },
    { value: '2022', label: '2023' },
    
  ]

const month = [
    { value: 'Janauary', label: 'Janauary' },
    { value: 'Feburauray', label: 'Feburauray' },
    { value: 'March', label: 'March' }
  ]

const MyAttendencePage = (props) => {
    return (
        <>
  
          <div class="grid grid-flow-col grid-col-4 ">
                <div className="grid col-span-3">
                            <div className="">
                                       <Header />
                                   
                                   <div className="flex p-5 m-1 shadow-2lg justify-center">
                                        <h1 className="text-center text-green-400 font-bold text-2xl underline">My Attendence </h1>
                                    </div>
                                    <div className="w-full flex gap-2 pb-5  justify-center">
                                        <Select options={year} className="w-1/4"/>
                                        <Select options={month} className="w-1/4"/>
                                        <button className="bg-green-400 p-2 px-6 py-1 rounded-full hover:bg-green-500 shadow-lg hover:shadow-2xl">Search</button>
                                    </div>
                          </div>                       
                  </div>
                  
          </div>
         
          <div>
       
          <MyAttendenceDataTable />
         
          </div>
        
        </>
    )
}

export default MyAttendencePage
