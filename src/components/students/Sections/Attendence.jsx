import React from 'react';
import { PieChart, PieArcSeries } from 'reaviz';
import { colors } from '../../../../src/constants';

export const data = [
  {
    key: 'Present',
    data: 10,
    id  :1
  },
  {
    key: 'Leave',
    data: 14,
    id :2
  },
  {
    key: 'Absent',
    data: 5,
    id:3
  },
 
];

const AttendencePieChart = () => (
  <div className="flex mb-20 justify-content">
    <div className="mt-5"
    style={{
      position: 'relative',
      height: '250px',
      width: '350px',
      alignItems: 'center',
      display: 'flex',
      justifyContent: 'center'
    }}
  >
    <div style={{ position: 'absolute', top: 0, left: 0 }}>
    <PieChart
        width="350px"
        height="350px"
        data={data}
        series={<PieArcSeries doughnut={true}  colorScheme={colors}  />}

        
      />
    </div>
    <div className="flex mt-20">
   <h1 className=" "> 
       <ul className="">{data.map(d=> 
           <li key={d.id}>{d.key} : {d.data}</li>)}</ul>
    </h1>
    </div>
  </div>
  </div>
);

export default AttendencePieChart;