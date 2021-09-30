import Navbar from 'components/Navbar'
import React from 'react'
import { Link } from 'react-router-dom'

const AuthScreens = () => {
    return (
        <div>
            <Navbar />
            <div className="flex justify-center mt-5 gap-4 mt-10">
                  <div className="">
                       <Link to="/login"><button className="bg-green-400 px-6 py-2 rounded-lg shadow-lg text-white">Student Login</button></Link>
                  </div>
                  <div className="">
                       <button className="bg-green-400 px-6 py-2 rounded-lg shadow-lg text-white">Teacher Login</button>
                  </div>
                  <div className="">
                       <button className="bg-green-400 px-6 py-2 rounded-lg shadow-lg text-white">Admin Login</button>
                  </div>
                  <div className="">
                       <button className="bg-green-400 px-6 py-2 rounded-lg shadow-lg text-white">Super Admin Login</button>
                  </div>
                  <div className="">
                       <button className="bg-green-400 px-6 py-2 rounded-lg shadow-lg text-white">Librain Login</button>
                  </div>
                  <div className="">
                       <button className="bg-green-400 px-6 py-2 rounded-lg shadow-lg text-white">Accountant Login</button>
                  </div>
            </div>
        </div>
    )
}

export default AuthScreens
