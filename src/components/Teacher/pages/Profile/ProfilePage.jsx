import { Table, TableBody, TableRow , TableCell, TableHead} from '@material-ui/core'
import React from 'react'

import { Link } from 'react-router-dom'



import Header from '../../Header'
import ProfileTable from './ProfileTable'

const ProfileData = [
    { "JoiningDate": '26/03/1998' , "Qualification" : "Btech", "MobileNumber": "6776767","Experience":"8years"},

]

const ProfilePage = (props) => {
    return (
        <>
  
          <div class="grid grid-flow-col grid-col-4 ">
                <div className="grid col-span-3">
                            <div className="">
                                       <Header />
                                   
                                   <div className="flex p-5 m-1 shadow-2lg justify-center">
                                        <h1 className="text-center text-green-400 font-bold text-2xl underline">Profile</h1>
                                    </div>
                            <div className=" p-5 ">
                                <div className="flex justify-center">
                                    <img src="https://cdn.pixabay.com/photo/2015/06/22/08/40/child-817373_640.jpg"  className="object-cover	h-48 w-48 rounded-full ring-2 ring-green-400  hover:ring-4 shadow-lg hover:shadow-2xl "/>
                                </div>

                                <div className="flex justify-center m-4">
                                    <h2 className="flex font-bold text-2xl ">Name : </h2>
                                    <h2 className="font-bold text-2xl  text-center" >Justin</h2>
                        
                                </div>
                                <div className="flex justify-center m-4">
                                    <h4 className="flex font-bold text-md ">Allowed Class : </h4>
                                    <h4 className="italic font-thin text-md text-center" >11th -B Medical</h4>
                        
                                </div>

                                <div className="flex justify-center m-4">
                                    <p className="flex font-bold text-sm ">Contact : </p>
                                    <p className=" text-sm italic font-thin text-center" > 98584854321</p>
                               
                                    <p className="flex font-bold text-sm  ml-2">Email : </p>
                                    <p className="text-sm italic font-thin text-center" > abc@gmail.com</p>
                        
                                </div>
                                <div className="flex justify-end pl-2 pb-3">
                   <Link to="/teacher/profile/edit"><button className="px-4 py-1 bg-green-500 hover:bg-green-400 text-white rounded-2xl">Edit Profile</button></Link>
               </div>
                                <div className="border-2 px-5 border-b border-green-500 hover:border-gray-500 ">
                                    
                                </div>
                                
                                <div>
                                <ProfileTable />

                                </div>
                            </div>   
                                  

                          </div>                       
                  </div>
                  
          </div>
         
          <div>
       
         
          </div>
        
        </>
    )
}

export default ProfilePage
