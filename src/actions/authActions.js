import axios from "axios";
import setAuthToken from "../utils/setAuthToken";
import { toast } from "react-toastify";
import { IS_AUTHENTICATED } from "./types";
import { api_url } from "../utils/api";
import { createContext } from "react";
import Layout from "../Layout";

export const userLogin = (user, history) => (dispatch) => {

  axios
    .post(api_url + "/api/admin/login", user)
    .then((res) => {
      if (res.data.error) return toast.error(res.data.error);
      if (res.data.success) {
        const { token, userRole} = res.data.data;
        console.log("role :",userRole)
        setAuthToken(token);
        localStorage.setItem("jwtToken", token);
        localStorage.setItem("userRole", userRole);

        dispatch({ type: IS_AUTHENTICATED, payload: true  , userRoleType : userRole });
        toast.success("Logged in successfully");
        if(userRole === 'teacher'){
          history.push("/");
        }
        else if(userRole === 'admin'){
         history.push("/");
      
        }
       
      }
    })
    .catch((err) => console.log(err));
};



export const userLogout = () => (dispatch) => {
  
    localStorage.removeItem("jwtToken");
    localStorage.removeItem("userRole");

        dispatch({
          type: IS_AUTHENTICATED,
          payload: false,
          userRoleType: "none",
        });
     
};

