import DataTable from 'react-data-table-component';
import DropListBox from '../sections/DropDown/ClassSectionDropDown';

const data = [
    { id: 1, date :'23/04/1998' , AddmissionNo: '11800336', FacultyName :'Jhon Marcus' , FatherName :'incedious' , Gender : 'Male', Contact:'769669xxxx' , Action :'view' },
    { id: 2, date :'23/04/1998' , AddmissionNo: '11800337' , FacultyName :'Sona Marcus' , FatherName :'incedious' , Gender : 'Male', Contact:'769669xxxx' , Action :'view'  },
    { id: 3, date :'23/04/1998' , AddmissionNo: '11800338' , FacultyName :'Himawari Marcus' , FatherName :'incedious' , Gender : 'Male', Contact:'769669xxxx' , Action :'view'  },
    { id: 4, date :'23/04/1998' , AddmissionNo: '11800339' , FacultyName :'Shiv' , FatherName :'incedious' , Gender : 'Male', Contact:'769669xxxx' , Action :'view'  } 
]
const columns = [
    {
        name: 'Date',
        selector: 'date',
        sortable: true,
      },
  {
    name: 'AddmissionNo',
    selector: 'AddmissionNo',
    sortable: true,
  },
  {
    name: 'FacultyName',
    selector: 'FacultyName',
    sortable: true,
  },
  {
    name: 'FatherName',
    selector: 'FatherName',
    sortable: true,
  },
  {
    name: 'Gender',
    selector: 'Gender',
    sortable: true,
  },
  {
    name: 'Contact',
    selector: 'Contact',
    sortable: true,
  },
  {
    name: 'Action',
    selector: 'Action',
    sortable: true,
    right: true,
    cell: row => <div data-tag="allowRowEvents"><div ><button className="my-2 bg-green-500 px-4 py-3 rounded">view Details</button></div></div>,

  },

];

const NonPermanentDataTable =() => {
    return (
      <>
      <DropListBox />
      <DataTable
        columns={columns}
        data={data}
      />
      </>
    )
  
};

export default NonPermanentDataTable;