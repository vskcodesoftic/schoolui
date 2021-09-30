import React from 'react'

import AttendenceCard from './Cards/AttendenceCard'
import StudentAttendenceChart from './Charts/IncomeChart'
import IncomeChart from './Charts/ExpenseChart'
import FeesOverview from './FeesOverview'
import Header from '../Header'
import DonationsOverview from './ProgressBar/DonationsOverview'

const AccountantDashboard = (props) => {
    return (
        <>
        <div class="grid grid-flow-col grid-col-4 ">
                <div className="grid col-span-3">
                            <div className="">
                                   <Header />
                            
                            <div className="p-2 grid grid-flow-col grid-rows-2 md:grid-rows-1  gap-2">
                                            <div className="flex bg-white p-2 my-2 flex justify-center shadow-lg">
                                                <IncomeChart />
                                            </div>
                                            <div className="flex  p-2 my-2  flex justify-center shadow-lg">
                                                <StudentAttendenceChart />
                                            </div>
                            
                            </div>


                            <div className="p-2 grid grid-flow-col grid-rows-3 md:grid-rows-1 gap-2">
                                          
                                            <div className="flex p-2 my-2">
                                                <FeesOverview />
                                            </div>
                                            <div className="flex p-2 my-2">
                                                <DonationsOverview />
                                            </div>
                            </div>
                        
                             
                     
                         </div>
                    
                            
                            </div>
                </div>
        
        </>
    )
}

export default AccountantDashboard
