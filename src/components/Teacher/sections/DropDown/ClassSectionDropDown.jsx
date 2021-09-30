import { Fragment, useState } from 'react'
import { Listbox, Transition } from '@headlessui/react'
import { CheckIcon, SelectorIcon } from '@heroicons/react/solid'
import  Select  from 'react-select'

const classes = [
  { name: 'Select Class' ,label : 'Select classs' },
  { name: 'Class-101' ,label : 'Class-101' },
  { name: 'Class-102' ,label : 'Class-102' },
  { name: 'Class-103' ,label : 'Class-103' },
  { name: 'Class-103' ,label : 'Class-104' },



]

const sections = [
  { name: 'Select Section' ,label : 'Select Sections' },
  { name: 'Section-101' ,label : 'Section-101' },
  { name: 'Section-102' ,label : 'Section-102' },
  { name: 'Section-103' ,label : 'Section-103' },
  { name: 'Section-103' ,label : 'Section-104' },



]

sections.map(role => {
    return {label : role.label , value : role.value }
})

classes.map(role => {
  return {label : role.label , value : role.value }
})



export default function DropListBox() {
  const [selectedClass, setselectedClass] = useState(classes[0])
  const [selectedSection, setselectedSection] = useState(sections[0])
  const [userId, setUserId] = useState('')
  return (
                        
                        <div className="inline-flex items-center">
                           <Select  className="w-full  p-5 "
                        placeholder='Select class...'
                        isSearchable
                        value={classes.name}
                        options={classes}
                        onChange={(option) => setUserId(option.value) }
                        />
                    
                           <Select className="w-full m-2 p-5"
                        placeholder='Select section...'
                        isSearchable
                        value={sections.label}
                        options={sections}
                        onChange={(option) => setUserId(option.value) }
                        />
                       <div className=" justify-center">
                       <button className="bg-green-400 px-6 py-1 text-white rounded-lg shadow-lg hover:shadow-2xl">Search</button>

                       </div>

                  
                       </div>   

              

  )
}
