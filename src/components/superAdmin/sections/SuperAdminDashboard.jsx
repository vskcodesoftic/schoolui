import React from 'react'

const SuperAdminDashboard = () => {
    return (
        <>
        <div class="grid grid-flow-col grid-cols-4 grid-rows-1 gap-2 px-2 py-2">
 
        <div className="md:col-span-1 bg-green-500 px-2 py-2">
               red
               <div className="grid grid-flow-col grid-col-1 md:grid-rows-5  sm:grid-rows-5 gap-2 px-2 py-2">
                      <div className="p-2">
                          <button className="bg-red-500 rounded-3xl px-2">link1</button>
                      </div>

                      <div className="p-2">
                          <button className="bg-red-500 rounded-3xl px-2">link1</button>
                      </div>
                      <div className="p-2">
                          <button className="bg-red-500 rounded-3xl px-2">link1</button>
                      </div>
                      <div className="p-2">
                          <button className="bg-red-500 rounded-3xl px-2">link1</button>
                      </div>
                       <div className="p-2">
                          <button className="bg-red-500 rounded-3xl px-2">link1</button>
                      </div>
               </div>
           </div>
           
        <div className="md:col-span-3 sm:col-span-3 bg-orange-400 px-2 py-2">
               
               <div className="grid grid-flow-col grid-col-4 md:grid-rows-1  sm:grid-rows-1 gap-2 px-2 py-2">
                      <div className="p-5 bg-red-400">
                          hello
                      </div>

                      <div className="p-5 bg-pink-400">
                          hello
                      </div>

                      <div className="p-5 bg-yellow-400">
                          hello
                      </div>

                      <div className="p-5 bg-blue-400">
                          hello
                      </div>
               </div>
        </div>
 
         

        </div>
 
        </>
    )
}

export default SuperAdminDashboard
