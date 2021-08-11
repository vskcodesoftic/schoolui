import DataTable from 'react-data-table-component';

const data = [
    { id: 1, date :'23/04/1998' , paid: '12400' , unpaid: '7800' },
    { id: 2, date :'23/04/1998' , paid: '12400' , unpaid: '7800' },
    { id: 3, date :'23/04/1998' , paid: '12400' , unpaid: '7800' },
    { id: 4, date :'23/04/1998' , paid: '12400' , unpaid: '7800' } 
]
const columns = [
    {
        name: 'Date',
        selector: 'date',
        sortable: true,
      },
  {
    name: 'Paid',
    selector: 'paid',
    sortable: true,
  },
  {
    name: 'UnPaid',
    selector: 'unpaid',
    sortable: true,
  },


  {
    name: 'view Details',
    selector: 'type',
    sortable: true,
    right: true,
    cell: row => <div data-tag="allowRowEvents"><div ><button className="my-2 bg-green-500 px-4 py-3 rounded">view Details</button></div></div>,

  },

];

const FeeAnnoucementsDataTable =() => {
    return (
      <DataTable
        title="Fee Annoucements"
        columns={columns}
        data={data}
      />
    )
  
};

export default FeeAnnoucementsDataTable;