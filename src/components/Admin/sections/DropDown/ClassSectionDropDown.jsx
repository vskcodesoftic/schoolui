import { Fragment, useState } from 'react'
import { Listbox, Transition } from '@headlessui/react'
import { CheckIcon, SelectorIcon } from '@heroicons/react/solid'
import StudentAttendenceDataTable from 'components/Admin/DataTables/StudentAttendenceDataTable'

const classes = [
  { name: 'Select Class' },
  { name: 'Class401' },
  { name: 'Class402' },
  { name: 'Class403' },
  { name: 'Class404' },
  { name: 'Class405' },
]

const sections = [
    { name: 'Select Section' },
    { name: 'Section-A' },
    { name: 'Section-B' },
    { name: 'Section-C' },
    { name: 'Section-D' },
    { name: 'Section-E' },
  ]

export default function DropListBox() {
  const [selectedClass, setselectedClass] = useState(classes[0])
  const [selectedSection, setselectedSection] = useState(sections[0])

  return (
    <div className="">
        <div className="flex p-5 m-1 shadow-2lg justify-center">
            <h1 className="text-center text-green-400 font-bold text-2xl underline">Reports</h1>
        </div>
        <div className="grid grid-flow-col grid-rows-3 md:grid-rows-1  gap-x-1 pb-4 mb-3">
      <Listbox value={selectedClass} onChange={setselectedClass}>
        <div className="relative mt-1">
          <Listbox.Button className="relative w-full py-2 pl-3 pr-10 text-left bg-white rounded-lg shadow-md cursor-default focus:outline-none focus-visible:ring-2 focus-visible:ring-opacity-75 focus-visible:ring-white focus-visible:ring-offset-orange-300 focus-visible:ring-offset-2 focus-visible:border-indigo-500 sm:text-sm">
            <span className="block truncate">{selectedClass.name}</span>
            <span className="absolute inset-y-0 right-0 flex items-center pr-2 pointer-events-none">
              <SelectorIcon
                className="w-10 h-5 text-gray-400"
                aria-hidden="true"
              />
            </span>
          </Listbox.Button>
          <Transition
            as={Fragment}
            leave="transition ease-in duration-100"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <Listbox.Options className="absolute w-full py-1 mt-1 overflow-auto text-base bg-white rounded-md shadow-lg max-h-60 ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
              {classes.map((userclass, userclassIdx) => (
                <Listbox.Option
                  key={userclassIdx}
                  className={({ active }) =>
                    `${active ? 'text-amber-900 bg-amber-100' : 'text-gray-900'}
                          cursor-default select-none relative py-2 pl-10 pr-4`
                  }
                  value={userclass}
                >
                  {({ selectedClass, active }) => (
                    <>
                      <span
                        className={`${
                          selectedClass ? 'font-medium' : 'font-normal'
                        } block truncate`}
                      >
                        {userclass.name}
                      </span>
                      {selectedClass ? (
                        <span
                          className={`${
                            active ? 'text-green-600' : 'text-green-600'
                          }
                                absolute inset-y-0 left-0 flex items-center pl-3`}
                        >
                          <CheckIcon className="w-5 h-5" aria-hidden="true" />
                        </span>
                      ) : null}
                    </>
                  )}
                </Listbox.Option>
              ))}
            </Listbox.Options>
          </Transition>
        </div>
      </Listbox>
      <Listbox value={selectedSection} onChange={setselectedSection}>
        <div className="relative mt-1">
          <Listbox.Button className="relative w-full py-2 pl-3 pr-10 text-left bg-white rounded-lg shadow-md cursor-default focus:outline-none focus-visible:ring-2 focus-visible:ring-opacity-75 focus-visible:ring-white focus-visible:ring-offset-orange-300 focus-visible:ring-offset-2 focus-visible:border-indigo-500 sm:text-sm">
            <span className="block truncate">{selectedSection.name}</span>
            <span className="absolute inset-y-0 right-0 flex items-center pr-2 pointer-events-none">
              <SelectorIcon
                className="w-5 h-5 text-gray-400"
                aria-hidden="true"
              />
            </span>
          </Listbox.Button>
          <Transition
            as={Fragment}
            leave="transition ease-in duration-100"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <Listbox.Options className="absolute w-full py-1 mt-1 overflow-auto text-base bg-white rounded-md shadow-lg max-h-60 ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
              {sections.map((section, sectionIdx) => (
                <Listbox.Option
                  key={sectionIdx}
                  className={({ active }) =>
                    `${active ? 'text-amber-900 bg-amber-100' : 'text-gray-900'}
                          cursor-default select-none relative py-2 pl-10 pr-4`
                  }
                  value={section}
                >
                  {({ selectedClass, active }) => (
                    <>
                      <span
                        className={`${
                          selectedClass ? 'font-medium' : 'font-normal'
                        } block truncate`}
                      >
                        {section.name}
                      </span>
                      {selectedClass ? (
                        <span
                          className={`${
                            active ? 'text-amber-600' : 'text-amber-600'
                          }
                                absolute inset-y-0 left-0 flex items-center pl-3`}
                        >
                          <CheckIcon className="w-5 h-5" aria-hidden="true" />
                        </span>
                      ) : null}
                    </>
                  )}
                </Listbox.Option>
              ))}
            </Listbox.Options>
          </Transition>
        </div>
      </Listbox>
      <button className="bg-green-500 hover:bg-green-400 rounded-lg text-white px-4 py-2 my-2">
       Search
      </button>
      </div>
     
    </div>
  )
}
