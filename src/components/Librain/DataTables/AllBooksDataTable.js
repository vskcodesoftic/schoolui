import MaterialTable from 'material-table';
import React from 'react'

const AllBooksDataTable =() => {
  const { useState } = React;

  const [columns, setColumns] = useState([
    { title: 'ISBIN No', field: 'ISBIN_No' },
    { title: 'Book title', field: 'BookTitle', initialEditValue: 'initial edit value' },
    { title: 'Book description', field: 'description', type: 'numeric' },
    {
      title: 'Author',
      field: 'Author',
    },
    { title: 'Publisher', field: 'Publisher',
  },
  { title: 'Price', field: 'price', type: 'numeric' },
  { title: 'Status', field: 'status',
  lookup: { 'Issued': 'Issued', 'Available': 'Available' , 'Due':'Due' }
}

  ]);

  const [data, setData] = useState([
    {ISBIN_No:'#323232342', BookTitle: 'Sarapata', description: 'Sarapata king of sarngiwa', Author: 'Sarangiwahana ', Publisher: 'Sarangi Press Media' , price : '$287' ,status :'Issued'},
    {ISBIN_No:'#323232343', BookTitle: 'Jacob the lost soul', description: 'Jacob kid whos childhood..', Author: 'Eve Gilbret ', Publisher: 'Eve Press Media' , price : '$47' , status:'Available'},

  ]);

  return (
    
    <MaterialTable
      title="Editable Preview"
      columns={columns}
      data={data}
      options={{
        filtering: true

      }}
      
    //   editable={{
  
    //     onRowUpdate: (newData, oldData) =>
    //       new Promise((resolve, reject) => {
    //         setTimeout(() => {
    //           const dataUpdate = [...data];
    //           const index = oldData.tableData.id;
    //           dataUpdate[index] = newData;
    //           setData([...dataUpdate]);

    //           resolve();
    //         }, 1000)
    //       }),
       
    //   }}
    />
  )
}

export default AllBooksDataTable;
