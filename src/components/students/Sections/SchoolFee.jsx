import React from 'react';
import { PieChart, PieArcSeries } from 'reaviz';
import { colors } from '../../../../src/constants';

export const data = [
  {
    key: 'Paid',
    data: 1000,
    id  :1
  },
  {
    key: 'Pending',
    data: 980,
    id :2
  },
  
  
 
];

const SchoolFee = () => (
    <div className="mb-5">
    
        <div>
        <h1 className=" my-2 antialiased font-semibold  text-center text-3xl">
            School Fee
          </h1>
          <p>
            This Includes your school Fee <br ></br>
            bus fee
          </p>
          </div>
    <div className="mt-5 mb-5 "
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
        series={<PieArcSeries doughnut={true}  colorScheme={colors} />}

        
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

export default SchoolFee;