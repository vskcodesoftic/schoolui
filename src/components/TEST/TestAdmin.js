import React, { useEffect } from "react";
import { useSelector } from 'react-redux'

const AdminWelcome = () => {
    
    const stateUser = useSelector(state => state.auth.userRole)
    const AuthState = useSelector(state => state.auth.isAuthenticated)
  return (
    <React.Fragment>
    <h2>Welcome   {stateUser} {AuthState} </h2>
    </React.Fragment>
  );
};


export default AdminWelcome;
