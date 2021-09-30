import React from 'react'
import ProgressBar from '../ProgressBar/ProgressBar'
const DonationsOverview = (props) => {
    return (
        
             <div className="p-2 grid grid-flow-rows gap-2 flex w-full pb-6 shadow-2xl">
            <div  className="bg-green-400 p-2 shadow-2xl ">
               <h1 className="text-center">Fees Overview</h1>
            </div>
 
          

            <div  className="p-4">
                <div className="flex justify-between">
                <h1 className="">Unpaid</h1>
                <h1 className="">{40} % </h1>

                </div>
            <ProgressBar  progressPercentage={40} />
            </div>


            <div  className="p-4">
                <div className="flex justify-between">
                <h1 className="">paid</h1>
                <h1 className="">{80} %</h1>

                </div>
            <ProgressBar  progressPercentage={80} />
            </div>


            <div  className="p-4">
                <div className="flex justify-between">
                <h1 className="">partialy paid</h1>
                <h1 className="">{60} %</h1>

                </div>
            <ProgressBar  progressPercentage={60} />
            </div>

  
           
           
       
           
           
        </div>
    )
}

export default DonationsOverview
