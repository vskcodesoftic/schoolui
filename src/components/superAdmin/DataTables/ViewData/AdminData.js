import MaterialTable from 'material-table';
import React, { useEffect } from 'react'
import { AddBox, ArrowDownward } from "@material-ui/icons";
import { api_url } from '../../../../utils/api';

import axios from 'axios';
import { toast, ToastContainer } from 'react-toastify';

const AdminData =() => {
  const { useState } = React;
  

// get data route 
 const getData = () => {
   axios
     .get(`${api_url}/api/admin/getAllusersByRole`)
     .then((res) => {
       console.log(res.data.Users);
       setData(res.data.Users)
     })
     .catch((err) => {
       console.error(err);
     });
 }

// update route

   const handleRowUpdate = (newData, oldData, resolve) => {
     // validation
     const errorList = [];
     if (newData.status === "") {
       errorList.push("Please select valid status");
     }

     if (errorList.length < 1) {
       axios
         .patch(`${api_url}/api/admin/updateUserRecord/${newData.id}`, newData)
         .then((res) => {
           const dataUpdate = [...data];
           const index = oldData.tableData.id;
           dataUpdate[index] = newData;
           toast.success(`${res.data.message || "record updated"}`);
           setData([...dataUpdate]);
           resolve();
         })
         .catch((error) => {
           // setErrorMessages([`Update failed! Server error${error}`]);
           toast.warn(`${error.message || "record updated failed"}`);

           resolve();
         });
     } else {
   
       resolve();
     }
   };


 useEffect(() => {
   getData()
 }, [])

  const [columns, setColumns] = useState([
    { title: "Full Name", field: "name", editable: "never" },
    { title: "UserName", field: "username", editable: "never" },
    {
      title: "Email",
      field: "email",
      initialEditValue: "initial edit value",
      editable: "never",
    },
    {
      title: "Contact Number",
      field: "contactNo",
      type: "numeric",
      editable: "never",
    },
    {
      title: "userRole",
      field: "userRole",
      lookup: { admin: "admin", teacher: "teacher", student: "student" },
      editable: "never",
    },
    {
      title: "Status",
      field: "status",
      lookup: { active: "Active", inactive: "InActive", disabled: "Disabled" },
    },
  ]);

  const [data, setData] = useState([
    
  ]);

  return (
    <div>
      <MaterialTable
        title="Editable Preview"
        columns={columns}
        data={data}
        editable={{
          onRowUpdate: (newData, oldData) =>
            new Promise((resolve) => {
              handleRowUpdate(newData, oldData, resolve);
            })
        }}
      />
      <ToastContainer />
    </div>
  );
}

export default AdminData;
