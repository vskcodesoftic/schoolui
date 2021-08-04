import React from 'react';
import './BodyWrapper.css'


const BodyWrapper = ({children}) => {
  return (
      <div className="overflow-y-auto">
        <main className="">{children}</main>
      </div>
  );
};

export default BodyWrapper;
