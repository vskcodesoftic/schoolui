import Navbar from 'components/Navbar'
import React from 'react'
import { Link } from 'react-router-dom'

import bgImage from '../../../../../assets/img/working.png'
import rectangleShape from '../../../../../assets/img/working.png'
import './ChangePassword.css'
const ChangePasswordPage = () => {
    return (
        <div>
            <Navbar />
            <div className="p-5 my-5" ><div className="text-5xl font-extrabold ...">
  <span class="flex bg-clip-text text-transparent p-5 justify-center bg-gradient-to-r from-green-400 to-blue-500">
  Change Password
  </span>
</div></div>

             <div className=" md:px-5 md:mx-20 hero-image">
            <div className=" flex flex-wrap justify-center border border-green-500  overflow-hidden sm:-mx-4 md:-mx-2 lg:-mx-1 xl:-mx-2 m-8 p-8">
              
              <div className="flex  justify-center items-center my-4 px-4 w-1/2 shadow-2xl overflow-hidden sm:my-4 sm:px-4 sm:w-full md:my-2 md:px-2 md:w-full lg:my-1 lg:px-1 lg:w-1/2 xl:my-2 xl:px-2 xl:w-1/2">
              <form className="w-full max-w-sm  mt-20">
                        <div className="md:flex md:items-center mb-6">
                          <div className="md:w-1/3">
                            <label className="block text-gray-500 sm:text-center font-bold md:text-right mb-1 md:mb-0 pr-4" for="inline-full-name">
                             Old Password
                            </label>
                          </div>
                          <div className="md:w-2/3 border-b border-teal-500">
                            <input className="appearance-none rounded-lg bg-transparent border-none w-full text-gray-700 focus:ring-2 focus:ring-green-600  mr-3 py-1 px-2 leading-tight focus:outline-green-400" id="inline-full-name" type="password" value="JaneDoe@gmail.com" />
                          </div>
                        </div>
                        <div className="md:flex md:items-center mb-6">
                          <div className="md:w-1/3">
                            <label className="block text-gray-500 sm:text-center font-bold md:text-right mb-1 md:mb-0 pr-4" for="inline-full-name">
                             New Password
                            </label>
                          </div>
                          <div className="md:w-2/3 border-b border-teal-500">
                            <input className="appearance-none rounded-lg bg-transparent border-none w-full text-gray-700 focus:ring-2 focus:ring-green-600  mr-3 py-1 px-2 leading-tight focus:outline-green-400" id="inline-full-name" type="password" value="JaneDoe@gmail.com" />
                          </div>
                        </div> <div className="md:flex md:items-center mb-6">
                          <div className="md:w-1/3">
                            <label className="block text-gray-500 sm:text-center font-bold md:text-right mb-1 md:mb-0 pr-4" for="inline-full-name">
                             Confirm Password
                            </label>
                          </div>
                          <div className="md:w-2/3 border-b border-teal-500">
                            <input className="appearance-none rounded-lg bg-transparent border-none w-full text-gray-700 focus:ring-2 focus:ring-green-600  mr-3 py-1 px-2 leading-tight focus:outline-green-400" id="inline-full-name" type="password" value="JaneDoe@gmail.com" />
                          </div>
                        </div>
                       

                      <div className="flex m-5">
                       
                          <div className="w-full flex justify-center">
                            <button className="shadow bg-green-500 mx-5  hover:bg-green-400 focus:shadow-outline focus:outline-none text-white font-bold py-1 px-5 rounded-3xl" type="button">
                              Change Password
                            </button>
                          </div>
                        
                        </div>
                        <div className="flex m-5 w-full justify-end">
                            <a href="/login" className="text-black font-semi-bold py-1 px-5 rounded-3xl">
                              login ?
                            </a>
                          </div>
                
                    </form>


            </div>

            <div className="my-4 px-4 w-1/2 bg-white overflow-hidden sm:my-4 sm:px-4 shadow-2xl sm:w-full md:my-2 md:px-2 md:w-full lg:my-1 lg:px-1 lg:w-1/2 xl:my-2 xl:px-2 xl:w-1/2">
              <div className="flex items-center justify-center sm:p-2  md:p-10" >
                    <img className="w-full h-full object-cover object-center sm:mt-12 sm:h-full sm:w-full  md:h-2/5 md:w-2/3" src={bgImage} alt="Man looking at item at a store" />
              </div>
            </div>
         
            </div>
             
             </div>
        </div>
    )
}

export default ChangePasswordPage
