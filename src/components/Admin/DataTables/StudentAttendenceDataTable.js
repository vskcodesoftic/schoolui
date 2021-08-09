import DataTable from 'react-data-table-component';

const data = [
    { id: 1, date :'23/04/1998' , title: 'Conan the Barbarian' },
    { id: 2, date :'23/04/1998' , title: 'Conan the Barbarian' },
    { id: 3, date :'23/04/1998' , title: 'Conan the Barbarian' },
    { id: 4, date :'23/04/1998' , title: 'Conan the Barbarian' } 
]
const columns = [
    {
        name: 'Date',
        selector: 'date',
        sortable: true,
      },
  {
    name: 'Title',
    selector: 'title',
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

const StudentAttendenceDataTable =() => {
    return (
      <DataTable
        title="Student Attendence DataTable"
        columns={columns}
        data={data}
      />
    )
  
};

export default StudentAttendenceDataTable;