import DataTable from 'react-data-table-component';
import DropListBox from '../sections/DropDown/ClassSectionDropDown';

import Select from 'react-select'

const classes = [
    { value: 'Present', label: 'Present' },
    { value: 'Absent', label: 'Absent' },
    { value: 'Leave', label: 'Leave' },
    
  ]

const data = [
    { id: 1, Time :'9:00' , Monday: '11800336', TuesDay :'Jhon Marcus' , Wednesday :'incedious' , Thursday : 'class201social', Friday:'class201Science' , Saturday :'class201Maths' },
    { id: 2, Time :'10:00' , Monday: '11800336', TuesDay :'Jhon Marcus' , Wednesday :'incedious' , Thursday : 'class202social', Friday:'class201Science' , Saturday :'class201Maths' },
    { id: 3, Time :'11:00' , Monday: '11800336', TuesDay :'Jhon Marcus' , Wednesday :'incedious' , Thursday : 'class201social', Friday:'class201Science' , Saturday :'class201Maths' },
    { id: 4, Time :'12:00' , Monday: '11800336', TuesDay :'Jhon Marcus' , Wednesday :'incedious' , Thursday : 'class201social', Friday:'class201Science' , Saturday :'class201Maths' },
    { id: 5, Time :'01:00' , Monday: '11800336', TuesDay :'Jhon Marcus' , Wednesday :'incedious' , Thursday : 'class201social', Friday:'class201Science' , Saturday :'class201Maths' },
    { id: 6, Time :'02:00' , Monday: '11800336', TuesDay :'Jhon Marcus' , Wednesday :'incedious' , Thursday : 'class201social', Friday:'class201Science' , Saturday :'class201Maths' },
    { id: 7, Time :'03:00' , Monday: '11800336', TuesDay :'Jhon Marcus' , Wednesday :'incedious' , Thursday : 'class201social', Friday:'class201Science' , Saturday :'class201Maths' },


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
  }
  

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