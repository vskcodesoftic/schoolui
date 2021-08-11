import DataTable from 'react-data-table-component';
import DropListBox from '../../sections/DropDown/ClassSectionDropDown';

const data = [
    { id: 1, date :'23/04/1998' , EmpId: '11800336', AccountantName :'Jhon Marcus' , FatherName :'incedious' , Gender : 'Male', Contact:'769669xxxx' , Action :'view' },
    { id: 2, date :'23/04/1998' , EmpId: '11800337' , AccountantName :'Sona Marcus' , FatherName :'incedious' , Gender : 'Male', Contact:'769669xxxx' , Action :'view'  },
    { id: 3, date :'23/04/1998' , EmpId: '11800338' , AccountantName :'Himawari Marcus' , FatherName :'incedious' , Gender : 'Male', Contact:'769669xxxx' , Action :'view'  },
    { id: 4, date :'23/04/1998' , EmpId: '11800339' , AccountantName :'Shiv' , FatherName :'incedious' , Gender : 'Male', Contact:'769669xxxx' , Action :'view'  } 
]
const columns = [
    {
        name: 'Date',
        selector: 'date',
        sortable: true,
      },
  {
    name: 'EmpId',
    selector: 'EmpId',
    sortable: true,
  },
  {
    name: 'AccountantName',
    selector: 'AccountantName',
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

const AccountantattendenceDataTable =() => {
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

export default AccountantattendenceDataTable;