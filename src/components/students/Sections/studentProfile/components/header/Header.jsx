import React from 'react'

const Header = () => {
    return (
        <div>
            <div className="p-5 flex flex-wrap overflow-hidden sm:-mx-4 md:-mx-3 lg:-mx-3 xl:-mx-4">

                    <div className="my-4 px-4 w-1/4  overflow-hidden sm:my-4 sm:px-4 md:my-3 md:px-3 lg:my-3 lg:px-3 xl:my-4 xl:px-4">
                        <div className="flex bg-green-400 justify-center items-center p-2 py-4 shadow-lg rounded">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 rounded" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                        </svg> 
                                   Student Profile
                        </div>
                    </div>

                    <div className="my-4 px-4 w-1/4 overflow-hidden sm:my-4 sm:px-4 md:my-3 md:px-3 lg:my-3 lg:px-3 xl:my-4 xl:px-4">
                    <div className="flex bg-green-400 justify-center items-center p-2 py-4 shadow-lg rounded">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5.882V19.24a1.76 1.76 0 01-3.417.592l-2.147-6.15M18 13a3 3 0 100-6M5.436 13.683A4.001 4.001 0 017 6h1.832c4.1 0 7.625-1.234 9.168-3v14c-1.543-1.766-5.067-3-9.168-3H7a3.988 3.988 0 01-1.564-.317z" />
                    </svg>
                                   Notices
                        </div>
                    </div>


                    <div className="my-4 px-4 w-1/4 overflow-hidden sm:my-4 sm:px-4 md:my-3 md:px-3 lg:my-3 lg:px-3 xl:my-4 xl:px-4">
                    <div className="flex bg-green-400 justify-center items-center p-2 py-4 shadow-lg rounded">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg> 
                                   Attendence
                        </div>
                    </div>

                
                    <div className="my-4 px-4 w-1/4  overflow-hidden sm:my-4 sm:px-4 md:my-3 md:px-3 lg:my-3 lg:px-3 xl:my-4 xl:px-4">
                    <div className="flex bg-green-400 justify-center items-center p-2 py-4 shadow-lg rounded">
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                        </svg> 
                                    Subjects
                        </div>
                    </div>

                    </div>
        </div>
    )
}

export default Header
