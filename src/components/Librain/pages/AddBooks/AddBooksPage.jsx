import { useForm } from "react-hook-form";

import { Button, Divider, Input ,FormControl , InputAdornment, InputLabel ,FormHelperText} from '@material-ui/core'
import React ,{ useState, useEffect } from 'react'
import Select from 'react-select'
import axios from 'axios';
import { CastForEducationRounded } from "@material-ui/icons";



 const AddBooksPage = () => {
    const [users, setUsers] = useState()
    const [userId, setUserId] = useState()

    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const onSubmit = data => console.log(data);

   
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


 const category = [
    { value: 'category-a', label: 'category-a' },
    { value: 'category-b', label: 'category-b' },

  ]

  const classes = [
    { value: 'Class-D109', label: 'Class-D109' },
    { value: 'Class-D110', label: 'Class-D110' },

  ]

  const sections = [
    { value: 'SECTIONS-8A', label: 'SECTIONS-8A' },
    { value: 'SECTIONS-9A', label: 'SECTIONS-9A' },

  ]

  const religion = [
    { value: 'Hinduism', label: 'Hinduism' },
    { value: 'Sikh', label: 'Sikh' },
    { value: 'Muslim', label: 'Muslim' },


  ]


  const caste = [
    { value: 'Genral', label: 'Genral' },
    { value: 'OBC', label: 'Hinduism' }
  ]

  classes.map(role => {
      return {label : role.label , value : role.value }
  })

  caste.map(role => {
    return {label : role.label , value : role.value }
})

religion.map(role => {
  return {label : role.label , value : role.value }
})

sections.map(role => {
  return {label : role.label , value : role.value }
})

category.map(role => {
  return {label : role.label , value : role.value }
})


    return (
        <div>
          <div className="flex justify-center">
            <button className=" text-center bg-green-400 hover:bg-green-500 shadow-lg hover:shadow-2xl text-white m-2  py-2 px-4 rounded-full">
            Add Books 
            </button>
            </div>
            <div className="p-5 m-5">
       
              {/* {users && (
                <Select 
                placeholder='Select user...'
                isSearchable
                value={options.label}
                options={options}
                onChange={(option) => setUserId(option.value) }
                />
                )} */}


        
               <div className="bg-white  shadow-2xl p-5 ">
               <form onSubmit={handleSubmit(onSubmit)} className="gap-y-2">
                {/* register your input into the hook by invoking the "register" function */}
                <div className="md:flex md:items-center mb-6 justify-center">
                        
                        <div className="md:w-1/3 border-b border-teal-500">
                          <input type="text" className="appearance-none rounded-lg bg-transparent border-none w-full text-gray-700 focus:ring-2 focus:ring-green-600  mr-3 py-1 px-2 leading-tight focus:outline-green-400" id="inline-full-name" placeholder="Book Title" {...register("Contact")} />
                        </div>   
               </div>

               <div className="md:flex md:items-center mb-6 justify-center">
                        
                        <div className="md:w-1/3 border-b border-teal-500">
                          <textarea rows="5" type="text" className="appearance-none rounded-lg bg-transparent border-none w-full text-gray-700 focus:ring-2 focus:ring-green-600  mr-3 py-1 px-2 leading-tight focus:outline-green-400" id="inline-full-name" placeholder="Book Description" {...register("Contact")} />
                        </div>   
               </div>

               <div className="md:flex md:items-center mb-6 justify-center">
                        
                        <div className="md:w-1/3 border-b border-teal-500">
                          <input type="number" className="appearance-none rounded-lg bg-transparent border-none w-full text-gray-700 focus:ring-2 focus:ring-green-600  mr-3 py-1 px-2 leading-tight focus:outline-green-400" id="inline-full-name" placeholder="ISBIN Number" {...register("Contact")} />
                        </div>   
               </div>
         
               <div className="md:flex md:items-center mb-6 justify-center">
                        
                        <div className="md:w-1/3 border-b border-teal-500">
                          <input type="number" className="appearance-none rounded-lg bg-transparent border-none w-full text-gray-700 focus:ring-2 focus:ring-green-600  mr-3 py-1 px-2 leading-tight focus:outline-green-400" id="inline-full-name" placeholder="Price" {...register("Contact")} />
                        </div>   
               </div>

                <div className="md:flex md:items-center mb-6 justify-center">
                        
                          <div className="md:w-1/3 border-b border-teal-500">
                            <input className="appearance-none rounded-lg bg-transparent border-none w-full text-gray-700 focus:ring-2 focus:ring-green-600  mr-3 py-1 px-2 leading-tight focus:outline-green-400" id="inline-full-name" type="text" placeholder="Publisher Name" {...register("name")} />
                          </div>   
                 </div>


               

               <div className="md:flex md:items-center mb-6 justify-center">
                        
                        <div className="md:w-1/3 border-b border-teal-500">
                          <input className="appearance-none rounded-lg bg-transparent border-none w-full text-gray-700 focus:ring-2 focus:ring-green-600  mr-3 py-1 px-2 leading-tight focus:outline-green-400" id="inline-full-name" type="text"  {...register("RollNumber", { required: true })}  placeholder="Author"  />
                       </div>   
               </div>

           


            
          

            
           
                {/* errors will return when field validation fails  */}
                {errors.exampleRequired && <span>This field is required</span>}
                 <div className="flex justify-center">
                 <button type="submit" className="bg-green-500 hover:bg-green-400 text-white shadow-lg hover:shadow-2xl px-5 py-1 rounded-2xl ">
                   Submit
                 </button>
                 </div>
               </form> 
                  </div>
           </div>
       </div>
    )
}

export default AddBooksPage;