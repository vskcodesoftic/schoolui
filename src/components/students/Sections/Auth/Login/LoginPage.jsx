import Navbar from 'components/Navbar'
import React from 'react'

const LoginPage = () => {
    return (
        <div>
            <Navbar />
            <div className="m-2  p-5"><h1 className="text-center">Login Page</h1></div>

            <div className="flex rounded-lg shadow-lg mx-20 p-5 bg-orange-300 justify-center">

                 <div className="flex">
                     <div className="grid grid-cols-2 mt-5">
                     <div className=" p-20 ">
                         

                     <div className="card bg-green-400 rounded flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100 p-4 m-5">
      <div className="card-body">
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label> 
          <input type="text" placeholder="email" className="input input-bordered rounded m-2" />
        </div> 
        <div className="form-control">
          <label className="label">
            <span className="label-text">Password</span>
          </label> 
          <input type="text" placeholder="password" className="input input-bordered rounded m-2" /> 
          <label className="label">
            <a href="#" className="label-text-alt"><br />Forgot password?</a>
          </label>
        </div> 
        <div className="form-control mt-6">
          <input type="button" value="Login" className="py-3 hover:bg-red-400 bg-black rounded text-white px-4" />
      </div>
    </div>
    </div>

                     </div>
                     {/* <div className="flex p-20  bg-red-400">
h
                      </div> */}
                     </div>
                 </div>
            </div>
        </div>
    )
}

export default LoginPage
