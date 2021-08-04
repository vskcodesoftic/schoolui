import AppLayout from 'Layout/AppLayout'
import React from 'react'
import Header from './components/header/Header'
import StudentDetails from './components/studentDetails/StudentDetails'

const StudentMainDashboard = () => {
    return (
        <div>
            <AppLayout>
            <div className="flex flex-wrap justify-center">

       
      
<div className="p-4 overflow-hidden sm:my-px sm:px-px">
<div class="flex flex-wrap -mx-4 overflow-hidden sm:-mx-4 md:-mx-3 lg:-mx-3 xl:-mx-4">

    <div class="my-4 px-4 w-full overflow-hidden sm:my-4 sm:px-4 md:my-3 md:px-3 lg:my-3 lg:px-3 xl:my-4 xl:px-4">
    <Header />
    </div>

    <div class="my-4 px-4 w-full overflow-hidden sm:my-4 sm:px-4 md:my-3 md:px-3 lg:my-3 lg:px-3 xl:my-4 xl:px-4">
        <StudentDetails />
    </div>

    </div>
</div>

</div>

            </AppLayout>
        </div>
    )
}

export default StudentMainDashboard
