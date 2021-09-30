import { useState } from 'react'
import { Tab } from '@headlessui/react'

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function TestTabs() {
  let [categories] = useState({
    Test: [
      {
        id: 1,
        title: 'Chapter 2 test on NEW fORUMLAS',
        date: '26/06/2022',
        time: '5:00PM',
        section: 'D1801',
        subject :'Mathmatics'
      },
      {
        id: 2,
        title: 'Chapter 1 test on Magical Mansion house',
        date: '26/06/2022',
        time: '6:00PM',
        section: 'D1801',
        subject :'English'
      },
  
    ],
    Practicles: [
        {
            id: 1,
            title: 'Chapter 4 test CAD',
            date: '26/06/2022',
            time: '5:00PM',
            section: 'D1801',
            subject :'computers'
          },
      {
        id: 2,
        title: 'The most innovative things happening in coffee',
        date: 'Mar 19',
        time: 24,
        section: 12,
      },
    ],
    SupriseTest: [
      {
        id: 1,
        title: 'Ask Me Anything: 10 answers to your questions about coffee',
        date: '2d ago',
        time: 9,
        section: 5,
      },
      {
        id: 2,
        title: "The worst advice we've ever heard about coffee",
        date: '4d ago',
        time: 1,
        section: 2,
      },
    ],
  })

  return (
    <div className="  w-full  px-2 py-16 sm:px-0">
      <Tab.Group>
        <Tab.List className="flex justify-center p-1 space-x-1 bg-green-50 rounded-xl">
          {Object.keys(categories).map((category) => (
            <Tab
              key={category}
              className={({ selected }) =>
                classNames(
                  'w-full py-2.5 text-sm leading-5 font-medium text-blue-700 rounded-lg',
                  'focus:outline-none focus:ring-2 ring-offset-2 ring-offset-blue-400 ring-white ring-opacity-60',
                  selected
                    ? 'bg-green-100 shadow'
                    : 'text-blue-100 hover:bg-green hover:text-green'
                )
              }
            >
              {category}
            </Tab>
          ))}
        </Tab.List>
        <Tab.Panels className="mt-2">
          {Object.values(categories).map((posts, idx) => (
            <Tab.Panel
              key={idx}
              className={classNames(
                'bg-green-100 rounded-xl p-3',
                'focus:outline-none focus:ring-2 ring-offset-2 ring-offset-blue-400 ring-white ring-opacity-60'
              )}
            >
              <ul>
                {posts.map((post) => (
                  <li
                    key={post.id}
                    className="relative p-3 rounded-md hover:bg-coolGray-100"
                  >
                    <h3 className="text-sm font-medium leading-5">
                      {post.title}
                    </h3>

                    <ul className="flex mt-1 space-x-1 text-xs font-normal leading-4 text-coolGray-500">
                      <li>Date : {post.date}</li>
                      <li>&middot;</li>
                      <li>time :{post.time} </li>
                      <li>&middot;</li>
                      <li>section :{post.section} </li>
                      <li>subject :{post.subject} </li>

                    </ul>

                    <a
                      href="#"
                      className={classNames(
                        'absolute inset-0 rounded-md',
                        'focus:z-10 focus:outline-none focus:ring-2 ring-blue-400'
                      )}
                    />
                  </li>
                ))}
              </ul>
            </Tab.Panel>
          ))}
        </Tab.Panels>
      </Tab.Group>
    </div>
  )
}
