import DataTable from 'react-data-table-component';
import DropListBox from '../sections/DropDown/ClassSectionDropDown';

import Select from 'react-select'

const classes = [
    { value: 'Present', label: 'Present' },
    { value: 'Absent', label: 'Absent' },
    { value: 'Leave', label: 'Leave' },
    
  ]

const data = [
    { id: 1, Time :'23/04/1998' , Monday: '11800336', TuesDay :'Jhon Marcus' , Wednesday :'incedious' , Thursday : 'class201social', Friday:'class201Science' , Saturday :'class201Maths' },
    { id: 2, Time :'23/04/1998' , Monday: '11800337' , studentName :'Sona Marcus' , FatherName :'incedious' , Gender : 'Male', Contact:'769669xxxx' , Action :'view'  },
    { id: 3, Time :'23/04/1998' , Monday: '11800338' , studentName :'Himawari Marcus' , FatherName :'incedious' , Gender : 'Male', Contact:'769669xxxx' , Action :'view'  },
    { id: 4, Time :'23/04/1998' , Monday: '11800339' , studentName :'Shiv' , FatherName :'incedious' , Gender : 'Male', Contact:'769669xxxx' , Action :'view'  } 
]
const columns = [
    {
        name: 'Time',
        selector: 'Time',
        sortable: true,
      },
  {
    name: 'Monday',
    selector: 'Monday',
    sortable: true,
  },
  {
    name: 'TuesDay',
    selector: 'TuesDay',
    sortable: true,
  },
  {
    name: 'Wednesday',
    selector: 'Wednesday',
    sortable: true,
  },
  {
    name: 'Thursday',
    selector: 'Thursday',
    sortable: true,
  },
  {
    name: 'Friday',
    selector: 'Friday',
    sortable: true,
  },
  {
    name: 'Saturday',
    selector: 'Saturday',
    sortable: true,
  },
  {
    name: 'Actions',
    selector: 'Actions',
    sortable: true,
    right: true,
    cell: row => <div data-tag="allowRowEvents" className="w-full"> <Select options={classes} />
    </div>,
 
  },

];

const TimeTableDataTable =() => {
    return (
      <>
      <DataTable
        columns={columns}
        data={data}
      />
      </>
    )
  
};

export default TimeTableDataTable;