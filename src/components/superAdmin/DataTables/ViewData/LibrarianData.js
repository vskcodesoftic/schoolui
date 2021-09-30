import MaterialTable from 'material-table';
import React from 'react'
import { AddBox, ArrowDownward } from "@material-ui/icons";

const AccountantData =() => {
  const { useState } = React;

  const [columns, setColumns] = useState([
    { title: 'Full Name', field: 'name' },
    { title: 'Email', field: 'Email', initialEditValue: 'initial edit value' },
    { title: 'Contact Number', field: 'contactNumber', type: 'numeric' },
    {
      title: 'Gender',
      field: 'Gender',
      lookup: { 0: 'Male', 1: 'Female' },
    },
    { title: 'Status', field: 'status',
     lookup: { 'Active': 'Active', 'InActive': 'InActive' , 'Disabled':'Disabled' },
  },

  ]);

  const [data, setData] = useState([
    { name: 'Jhony', Email: 'Jhony@gmail.com', contactNumber: 7669666966, Gender: 0 , status : 'Active'},
    { name: 'Sarapata', Email: 'Sarapata@it.com', contactNumber: 988988989, Gender: 1 , status : 'InActive'},
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

export default AccountantData;
