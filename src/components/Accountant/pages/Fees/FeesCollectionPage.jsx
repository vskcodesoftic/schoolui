import React, { useState } from 'react'
import Header from '../../Header'
import Select from 'react-select'
import FeeDatStudent from '../../DataTables/ViewData/FeeData'

export const FeesCollectionPage = () => {

    const [userId, setUserId] = useState(' ')


    const options = [
        { value: 'CLASS101', label: 'CLASS101' },
        { value: 'CLASS102', label: 'CLASS102' },
        { value: 'CLASS103', label: 'CLASS103' },
        { value: 'CLASS104', label: 'CLASS104' },
        { value: 'CLASS105', label: 'CLASS105' },  
      ]

      const sections = [
        { value: 'Section-5AB2', label: 'Section-5AB2' },
        { value: 'Section-5AB3', label: 'Section-5AB3' },
        { value: 'Section-5AB4', label: 'Section-5AB4' },
        { value: 'Section-5AB5', label: 'Section-5AB5' },
    
      ]
    
      options.map(role => {
          return {label : role.label , value : role.value }
      })

      sections.map(role => {
        return {label : role.label , value : role.value }
    })


      
    return (
        <div className="">
            
              <div className="bg-white p-5 m-2">
                 <h1 className="bold-text text-2xl	 text-green-500 broder border-b b-2  border-green-500 captalize text-center">Welcome Accountant </h1> 
        </div>
        <div className="">
            <div className="md:flex justify-center">
        <div className=" w-full md:w-1/3 m-2">
                                <Select 
                        placeholder='Select class...'
                        isSearchable
                        value={options.label}
                        options={options}
                        onChange={(option) => setUserId(option.value) }
                        />
               
                       </div>  
                       <div className=" w-full md:w-1/3 m-2">
                                <Select 
                        placeholder='Select section...'
                        isSearchable
                        value={sections.label}
                        options={sections}
                        onChange={(option) => setUserId(option.value) }
                        />
                
                       </div>  
                
                <div className="m-2">
                   <button className="p-2 bg-green-500">Submit</button>
                </div>

                       </div>
                       
                   
                     
         </div>
        
        <div className="">
        <div className="grid grid-flow-col  grid-rows-2 md:grid-rows-1 gap-2 py-2 px-2 ">
                
                <div className="bg-orange-400 w-50 p-5  h-22 rounded-lg shadow-lg hover:shadow-2xl">
                    <div className="flex justify-between">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
                <h1>Fee Collected</h1>
                </div>
                <h2 className="text-right text-lg font-bold ">1200</h2>
                </div>
            
                
                <div className="bg-green-400 w-50 p-5  h-22 rounded-lg shadow-lg hover:shadow-2xl">
                    <div className="flex justify-between">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-10 w-10" viewBox="0 0 20 20" fill="currentColor">
                    <path d="M9 6a3 3 0 11-6 0 3 3 0 016 0zM17 6a3 3 0 11-6 0 3 3 0 016 0zM12.93 17c.046-.327.07-.66.07-1a6.97 6.97 0 00-1.5-4.33A5 5 0 0119 16v1h-6.07zM6 11a5 5 0 015 5v1H1v-1a5 5 0 015-5z" />
                    </svg>
                <h1>Pending Fee</h1>
                </div>
                <h2 className="text-right text-lg font-bold ">1200</h2>
                </div>

        </div>
        </div>
         
   
        <div className="">
        <FeeDatStudent />
        </div>
        </div>
    )
}
