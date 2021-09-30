import { Link } from 'react-router-dom';
import React from 'react'
import AnnouncementData from '../../DataTables/ViewData/AnnouncementData';

const AnnouncementViewDataPage = () => {
    return (
        <div>
            <Link to="/superadmin/annoucements/add">
            <button className="p-5 text-white bg-green-400 m-5 px-4 py-1 rounded-2xl hover:bg-green-500 ">Add Annoucements</button>
            </Link>
            <AnnouncementData />
        </div>
    )
}

export default AnnouncementViewDataPage
