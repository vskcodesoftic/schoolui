import { Link } from 'react-router-dom';
import React from 'react'
import AdminData from '../../DataTables/ViewData/AdminData'

const AdminViewDataPage = () => {
    return (
        <div>
            <Link to="/superadmin/roles/add">
            <button className="p-5 text-white bg-green-400 m-5 px-4 py-1 rounded-2xl hover:bg-green-500 ">Add Admin</button>
            </Link>
            <AdminData />
        </div>
    )
}

export default AdminViewDataPage
