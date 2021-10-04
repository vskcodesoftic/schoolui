import axios from 'axios';
import React , { useEffect , useState } from 'react'
import { api_url } from '../../utils/api';

const Header = () => {
  // const instance = axios.create({
  //   baseURL: api_url,
  //   headers: {
  //     Authorization: "Bearer " + varToken,
  //   },
  // });

  const [teachersCount, setteachersCount] = useState();

  const [StudentsCount, setStudentsCount] = useState();


  //get teachers count

  const getTeachersCount = () => {
    axios
      .get(`${api_url}/api/admin/getTeachersCount`)
      .then(function (response) {
        // handle success
        setteachersCount(response.data.count);
        console.log(response);
      })
      .catch(function (error) {
        // handle error
        console.log(error);
      })
    
  };

  //get students count

  const getstudentsCount = () => {
    axios
      .get(`${api_url}/api/admin/getStudentsCount`)
      .then(function (response) {
        // handle success
        setStudentsCount(response.data.count);
        console.log(response);
      })
      .catch(function (error) {
        // handle error
        console.log(error);
      })
      
  };


  useEffect(() => {
    getTeachersCount();
  }, []);

  return (
    <div>
      <div className="bg-white mt-3  w-3/2  md:w-full">
        <h1 className="bold-text text-2xl	 text-green-500 broder border-b b-2  border-green-500 captalize text-center">
          Welcome Super Admin{" "}
        </h1>
      </div>
      <div className="">
        <div className="grid grid-flow-col  grid-rows-4 md:grid-rows-2 lg:grid-rows-1 gap-2 py-2 px-2 ">
          <div className="bg-orange-400 w-3/2 md:w-full h-40  p-5 rounded-lg shadow-lg hover:shadow-2xl">
            <div className="flex justify-between">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-10 w-10"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                />
              </svg>
              <h1>Total Teachers</h1>
            </div>
            <h2 className="text-right text-lg font-bold ">
              {teachersCount || 0}
            </h2>
          </div>

          <div className="bg-green-400 w-3/2 md:w-full h-40 p-5 rounded-lg shadow-lg hover:shadow-2xl">
            <div className="flex justify-between">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-10 w-10"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path d="M9 6a3 3 0 11-6 0 3 3 0 016 0zM17 6a3 3 0 11-6 0 3 3 0 016 0zM12.93 17c.046-.327.07-.66.07-1a6.97 6.97 0 00-1.5-4.33A5 5 0 0119 16v1h-6.07zM6 11a5 5 0 015 5v1H1v-1a5 5 0 015-5z" />
              </svg>
              <h1>Other Staff</h1>
            </div>
            <h2 className="text-right text-lg font-bold ">1200</h2>
          </div>

          <div className="bg-blue-400  w-3/2 md:w-full h-40 p-5 rounded-lg shadow-lg hover:shadow-2xl">
            <div className="flex justify-between">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-10 w-10"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fill-rule="evenodd"
                  d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z"
                  clip-rule="evenodd"
                />
              </svg>
              <h1>Total Students</h1>
            </div>
            <h2 className="text-right text-lg font-bold ">
              {StudentsCount || 0}
            </h2>
          </div>

          <div className="bg-pink-400  w-3/2 md:w-full h-40 p-5 rounded-lg shadow-lg hover:shadow-2xl">
            <div className="flex justify-between">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-10 w-10"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path d="M12 14l9-5-9-5-9 5 9 5z" />
                <path d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222"
                />
              </svg>
              <h1>Total Attendence</h1>
            </div>
            <h2 className="text-right text-lg font-bold ">1200</h2>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header
