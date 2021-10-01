import MaterialTable from 'material-table';
import React, { useEffect } from 'react'
import { AddBox, ArrowDownward } from "@material-ui/icons";
import { api_url } from '../../../../utils/api';
import axios from 'axios';

const ClerkData =() => {
  const { useState } = React;
  const [data, setData] = useState([
    {
      name: "Jhony",
      Email: "Jhony@gmail.com",
      contactNumber: 7669666966,
      Gender: 0,
      status: "Active",
    },
    {
      name: "Sarapata",
      Email: "Sarapata@it.com",
      contactNumber: 988988989,
      Gender: 1,
      status: "InActive",
    },
  ]);

    
  const getData = async () => {
   
      axios
        .get(`${api_url}/api/admin/getClerkDetails`)
        .then((res) => {
          console.log("data ===> ",res.data);
          setData(res.data.clerk)
        })
        .catch((err) => {
          console.error(err);
        });
  }

  useEffect(()=>{
    getData()
  },[])

  const [columns, setColumns] = useState([
    { title: "Full Name", field: "name" },
    { title: "Email", field: "email", initialEditValue: "initial edit value" },
    { title: "UserName", field: "username", type: "numeric" },
    { title: "User Role", field: "userRole" },

    {
      title: "Status",
      field: "status",
      lookup: { active: "Active", inactive: "InActive", disabled: "Disabled" },
    },
  ]);



  return (
    <MaterialTable
      title="Editable Preview"
      columns={columns}
      data={data}
      editable={{
  
        onRowUpdate: (newData, oldData) =>
          new Promise((resolve, reject) => {
            setTimeout(() => {
              const dataUpdate = [...data];
              const index = oldData.tableData.id;
              dataUpdate[index] = newData;
              setData([...dataUpdate]);

              resolve();
            }, 1000)
          }),
       
      }}
    />
  )
}

export default ClerkData;
