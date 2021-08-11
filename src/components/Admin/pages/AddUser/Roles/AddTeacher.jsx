import Navbar from 'components/Navbar'
import React from 'react'
import { Link } from 'react-router-dom'

import bgImage from '../../../../../assets/img/working.png'
import rectangleShape from '../../../../../assets/img/working.png'
import './AddTeacher.css'
const AddTeacherRole = () => {
    return (
  

           <form className="w-full">
                        <div className="md:flex md:items-center mb-6">
                          <div className="md:w-1/3">
                            <label className="block text-gray-500 sm:text-center font-bold md:text-right mb-1 md:mb-0 pr-4" for="inline-full-name">
                             Email
                            </label>
                          </div>
                          <div className="md:w-2/3 border-b border-teal-500">
                            <input className="appearance-none rounded-lg bg-transparent border-none w-full text-gray-700 focus:ring-2 focus:ring-green-600  mr-3 py-1 px-2 leading-tight focus:outline-green-400" id="inline-full-name" type="email" value="JaneDoe@gmail.com" />
                          </div>
                        </div>
                 
                        <div className="md:flex md:items-center mb-6">
                          <div className="md:w-1/3">
                            <label className="block text-gray-500 sm:text-center font-bold md:text-right mb-1 md:mb-0 pr-4" for="inline-full-name">
                             Name
                            </label>
                          </div>
                          <div className="md:w-2/3 border-b border-teal-500">
                            <input className="appearance-none rounded-lg bg-transparent border-none w-full text-gray-700 focus:ring-2 focus:ring-green-600  mr-3 py-1 px-2 leading-tight focus:outline-green-400" id="inline-full-name" type="text" value="JaneDoe@gmail.com" />
                          </div>
                        </div>

                        <div className="md:flex md:items-center mb-6">
                          <div className="md:w-1/3">
                            <label className="block text-gray-500 sm:text-center font-bold md:text-right mb-1 md:mb-0 pr-4" for="inline-full-name">
                            Password
                            </label>
                          </div>
                          <div className="md:w-2/3 border-b border-teal-500">
                            <input className="appearance-none rounded-lg bg-transparent border-none w-full text-gray-700 focus:ring-2 focus:ring-green-600  mr-3 py-1 px-2 leading-tight focus:outline-green-400" id="inline-full-name" type="password" value="JaneDoe@gmail.com" />
                          </div>
                        </div>

                        <div className="md:flex md:items-center mb-6">
                          <div className="md:w-1/3">
                            <label className="block text-gray-500 sm:text-center font-bold md:text-right mb-1 md:mb-0 pr-4" for="inline-full-name">
                             Confirm Password
                            </label>
                          </div>
                          <div className="md:w-2/3 border-b border-teal-500">
                            <input className="appearance-none rounded-lg bg-transparent border-none w-full text-gray-700 focus:ring-2 focus:ring-green-600  mr-3 py-1 px-2 leading-tight focus:outline-green-400" id="inline-full-name" type="password" value="JaneDoe@gmail.com" />
                          </div>
                        </div>
                         
                        <div className="md:flex md:items-center mb-6">
                          <div className="md:w-1/3">
                            <label className="block text-gray-500 sm:text-center font-bold md:text-right mb-1 md:mb-0 pr-4" for="inline-full-name">
                             Contact no 
                            </label>
                          </div>
                          <div className="md:w-2/3 border-b border-teal-500">
                            <input className="appearance-none rounded-lg bg-transparent border-none w-full text-gray-700 focus:ring-2 focus:ring-green-600  mr-3 py-1 px-2 leading-tight focus:outline-green-400" id="inline-full-name" type="number" value="985645454" />
                          </div>
                        </div>
                      <div className="flex m-5">
                       
                          <div className="w-full flex justify-center">
                            <button className="shadow bg-green-500 mx-5  hover:bg-green-400 focus:shadow-outline focus:outline-none text-white font-bold py-1 px-5 rounded-3xl" type="button">
                              Create User
                            </button>
                          </div>
                        
                        </div>
                     
                
                    </form>


            

         
        
    )
}

export default AddTeacherRole
