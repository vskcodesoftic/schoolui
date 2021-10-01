import { useForm } from "react-hook-form";

import { Button, Divider, Input ,FormControl , InputAdornment, InputLabel ,FormHelperText} from '@material-ui/core'
import React ,{ useState, useEffect } from 'react'
import Select from 'react-select'
import axios from 'axios';
import { api_url } from "../../../../utils/api";
import "react-toastify/dist/ReactToastify.css";
import { toast, ToastContainer } from "react-toastify";

 const AddUserRolePage = () => {
    const [users, setUsers] = useState()
    const [userId, setUserId] = useState('')
  
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const onSubmit = (data) => {
      console.log("ju", data);
      console.log("role", userId);
  

      const passwordentred = data.password;
      const repassword = data.repassword;

      if(passwordentred !== repassword){
        return toast.warn("password doesn't match")
      }

      if(data.userRole == null) {
                return toast.warn("please select role");

      }

      let newData = { ...data , 'userRole' : userId }; // pass all key:value pairs from an object

      axios
        .post("http://localhost:5000/api/admin/addUserRole", newData)
        .then(function (response) {
          console.log(response);
          toast.success(` ${response.data.message}`);
        })
        .catch( (error) => {
           toast.error(`  ${error.response.data.message}`);
           const resMessage =
             (error.response &&
               error.response.data &&
               error.response.data.message) ||
             error.message ||
             error.toString();
        });
    };

   
    // useEffect(()=>{
    // //     const getUsers = async () => {
    // //       const {data} = await axios.get('https://jsonplaceholder.typicode.com/users')
    // //       setUsers(data)
    // //     }
    // //     getUsers()
    // //   },[])

    // // const options = users && users.map(user =>{
    // //   return {label: user.name, value: user.id}
    // // })


 const options = [
    { value: 'admin', label: 'Admin' },
    { value: 'accountant', label: 'Accountant' },
    { value: 'clerk', label: 'Clerk' },
    { value: 'librairian', label: 'Librairian' },
    { value: 'student', label: 'Student' },
    { value: 'teacher', label: 'Teacher' },
  ]

  options.map(role => {
      return {label : role.label , value : role.value }
  })

    return (
      <div>
        <div className="flex justify-center">
          <button className=" text-center bg-green-400 hover:bg-green-500 shadow-lg hover:shadow-2xl text-white m-2  py-2 px-4 rounded-full">
            Select User Role To Add
          </button>
        </div>
        <div className="p-5 m-5">
          <ToastContainer />
          {/* {users && (
                <Select 
                placeholder='Select user...'
                isSearchable
                value={options.label}
                options={options}
                onChange={(option) => setUserId(option.value) }
                />
                )} */}

          <div className="bg-white  shadow-2xl p-3 ">
            <form onSubmit={handleSubmit(onSubmit)} className="gap-y-2">
              {/* register your input into the hook by invoking the "register" function */}
              <div className="md:flex md:items-center mb-6 justify-center">
                <div className="md:w-1/3 border-b border-teal-500">
                  <Select
                    placeholder="Select user..."
                    isSearchable
                    value={options.label}
                    options={options}
                    onChange={(option) => setUserId(option.value)}
                  />
                  <div className=" p-5 ">
                    <h1 className="text-center">
                      You have Selected {userId} .
                    </h1>
                  </div>
                </div>
              </div>

              <div className="md:flex md:items-center mb-6 justify-center">
                <div className="md:w-1/3 border-b border-teal-500">
                  <input
                    className="appearance-none rounded-lg bg-transparent border-none w-full text-gray-700 focus:ring-2 focus:ring-green-600  mr-3 py-1 px-2 leading-tight focus:outline-green-400"
                    id="inline-full-name"
                    placeholder="full name"
                    {...register("name")}
                  />
                </div>
              </div>

              <div className="md:flex md:items-center mb-6 justify-center">
                <div className="md:w-1/3 border-b border-teal-500">
                  <input
                    className="appearance-none rounded-lg bg-transparent border-none w-full text-gray-700 focus:ring-2 focus:ring-green-600  mr-3 py-1 px-2 leading-tight focus:outline-green-400"
                    id="inline-full-name"
                    placeholder="email"
                    {...register("email", { required: true })}
                  />
                </div>
              </div>

              <div className="md:flex md:items-center mb-6 justify-center">
                <div className="md:w-1/3 border-b border-teal-500">
                  <input
                    className="appearance-none rounded-lg bg-transparent border-none w-full text-gray-700 focus:ring-2 focus:ring-green-600  mr-3 py-1 px-2 leading-tight focus:outline-green-400"
                    id="inline-full-name"
                    type="text"
                    {...register("username", { required: true })}
                    placeholder="username"
                    placeholder="username"
                  />
                </div>
              </div>

              <div className="md:flex md:items-center mb-6 justify-center">
                <div className="md:w-1/3 border-b border-teal-500">
                  <input
                    className="appearance-none rounded-lg bg-transparent border-none w-full text-gray-700 focus:ring-2 focus:ring-green-600  mr-3 py-1 px-2 leading-tight focus:outline-green-400"
                    id="inline-full-name"
                    type="password"
                    placeholder="password"
                    {...register("password", { required: true })}
                    placeholder="password"
                  />
                </div>
              </div>

              <div className="md:flex md:items-center mb-6 justify-center">
                <div className="md:w-1/3 border-b border-teal-500">
                  <input
                    className="appearance-none rounded-lg bg-transparent border-none w-full text-gray-700 focus:ring-2 focus:ring-green-600  mr-3 py-1 px-2 leading-tight focus:outline-green-400"
                    id="inline-full-name"
                    type="password"
                    placeholder="confirm-password"
                    {...register("repassword", { required: true })}
                    placeholder="confirm password"
                  />
                </div>
              </div>

              <div className="md:flex md:items-center mb-6 justify-center">
                <div className="md:w-1/3 border-b border-teal-500">
                  <input
                    className="appearance-none rounded-lg bg-transparent border-none w-full text-gray-700 focus:ring-2 focus:ring-green-600  mr-3 py-1 px-2 leading-tight focus:outline-green-400"
                    id="inline-full-name"
                    {...register("contactNo", { required: true })}
                    type="number"
                    defvalue="91xxxxxxx"
                    placeholder="number"
                  />
                </div>
              </div>

              {/* errors will return when field validation fails  */}
              {errors.exampleRequired && <span>This field is required</span>}
              <div className="flex justify-center">
                <button
                  type="submit"
                  className="bg-green-500 hover:bg-green-400 text-white shadow-lg hover:shadow-2xl px-5 py-1 rounded-2xl "
                >
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    );
}

export default AddUserRolePage;