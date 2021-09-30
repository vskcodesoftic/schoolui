import MaterialTable from 'material-table';
import React from 'react'
import { AddBox, ArrowDownward } from "@material-ui/icons";
import DropListBox from '../../../superAdmin/sections/DropDown/ClassSectionDropDown';

const StudentsMarkAttendenceData =() => {
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
     lookup: { 'Present': 'Present', 'Absent': 'Absent' , 'onLeave':'onLeave' },
  },

  ]);

  const [data, setData] = useState([
    { name: 'Jhony', Email: 'Jhony@gmail.com', contactNumber: 7669666966, Gender: 0 , status : 'Present'},
    { name: 'Sarapata', Email: 'Sarapata@it.com', contactNumber: 988988989, Gender: 1 , status : 'Absent'},
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

export default StudentsMarkAttendenceData;
