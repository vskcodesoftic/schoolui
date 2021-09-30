import MaterialTable from 'material-table';
import React from 'react'

const IssuedBooksData =() => {
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


  ]);

  const [data, setData] = useState([
    {ISBIN_No:'#323232342', BookTitle: 'Sarapata', description: 'Sarapata king of sarngiwa', Author: 'Sarangiwahana ', Publisher: 'Sarangi Press Media' , price : '$287'},
    {ISBIN_No:'#323232343', BookTitle: 'Jacob the lost soul', description: 'Jacob kid whos childhood..', Author: 'Eve Gilbret ', Publisher: 'Eve Press Media' , price : '$47'},

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

export default IssuedBooksData;
