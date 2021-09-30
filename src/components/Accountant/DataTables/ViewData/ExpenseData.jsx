import MaterialTable from 'material-table';
import React from 'react'

const ExpenseData =() => {
  const { useState } = React;

  const [columns, setColumns] = useState([
    { title: 'Invoice Number', field: 'InvoiceNumber' },
    { title: 'Full Name', field: 'name' },
    { title: 'Descerption', field: 'Descerption' },
    { title: 'Date', field: 'Date' },
    { title: 'Income Head', field: 'IncomeHead' },   
    { title: 'Amount', field: 'Amount' },    
 
   

  ]);

  const [data, setData] = useState([
    { InvoiceNumber :'0020200726' , name: 'Jhony', Descerption: 'paid uniform fee', Date: '26/03/1998', IncomeHead: 'Aditya Sharma' ,Amount :'$1200' },
    { InvoiceNumber :'0020200727' , name: 'Sarapata', Descerption: 'books revenue ', Date: '26/03/1998', IncomeHead: 'Sanvi jessica' , Amount : '$1400'},
  ]);

  return (
    
    <MaterialTable
      title="Editable Preview"
      columns={columns}
      data={data}
      options={{
        filtering: true

      }}
      
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

export default ExpenseData;
