import { Listbox } from '@headlessui/react'
import UserRoleDropDown from 'components/Admin/sections/DropDown/UserRolesDropDown'
import React from 'react'
import AddTeacherRole from './Roles/AddTeacher'

const AddUserRole = () => {

    return (
        <div className="flex justify-center bg-white shadow-2xl p-5 mx-8 my-8 ">
            <div className="grid grid-cols-flow grid -cols-1 grid-rows-1">
            <div className="">

                <UserRoleDropDown />
            </div>
            <h1 className="text-center">User Type :Add Teacher</h1>

            <div className="flex w-full shadow-2xl p-5">

                <AddTeacherRole />
                
           </div>
           </div>
        </div>
    )
}

export default AddUserRole
