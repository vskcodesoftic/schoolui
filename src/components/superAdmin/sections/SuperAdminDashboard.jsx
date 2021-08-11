import React from 'react'

import AttendenceCard from './Cards/AttendenceCard'
import ExpensesChart from './Charts/ExpensesChart'
import IncomeChart from './Charts/IncomeChart'
import FeesOverview from './FeesOverview'
import Header from '../Header'
import LibarayOverview from './LibarayOverview'

const SuperAdminDashboard = (props) => {
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
                                                <ExpensesChart />
                                            </div>
                            
                            </div>


                            <div className="p-2 grid grid-flow-col grid-rows-3 md:grid-rows-1 gap-2">
                                            <div className="flex p-2 my-2">
                                                <AttendenceCard/>
                                            </div>
                                            <div className="flex p-2 my-2">
                                                <FeesOverview />
                                            </div>
                                            <div className="flex p-2 my-2">
                                                <LibarayOverview />
                                            </div>
                            </div>
                        
                             
                     
                         </div>
                    
                            
                            </div>
                </div>
        
        </>
    )
}

export default SuperAdminDashboard
