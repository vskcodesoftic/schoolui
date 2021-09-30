import React from 'react'
import BooksRecordsChart from './Charts/BooksRecordsChart'
import Header from '../Header'
const LibrarianDashboard = (props) => {
    return (
        <>
        <div class="grid grid-flow-col grid-col-4 ">
                <div className="grid col-span-3">
                            <div className="">
                                   <Header />
                            
                            <div className="p-2 grid grid-flow-col grid-rows-1 md:grid-rows-1  gap-2">
                                            <div className="flex bg-white p-2 my-2 flex justify-center shadow-lg">
                                                <BooksRecordsChart />
                                            </div>
                                     
                            
                            </div>


                         </div>
                    
                            
                            </div>
                </div>
        
        </>
    )
}

export default LibrarianDashboard
