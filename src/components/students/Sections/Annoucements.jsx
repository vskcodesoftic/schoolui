import {Link} from 'react-router-dom'
const AnnouncementsPage = () => {
  const data = [
    { id: 1, date :'23/04/1998' , imgSource:'https://cdn.tuk.dev/assets/components/misc/doge-coin.png', title: 'Announcement Title 1 ' },
    { id: 2, date :'23/04/1998' , imgSource:'https://cdn.tuk.dev/assets/components/misc/doge-coin.png', title: 'Announcement Title 2 ' },
    { id: 3, date :'23/04/1998' , imgSource:'https://cdn.tuk.dev/assets/components/misc/doge-coin.png', title: 'Announcement Title 3 ' },
    { id: 4, date :'23/04/1998' , imgSource:'https://cdn.tuk.dev/assets/components/misc/doge-coin.png', title: 'Announcement Title 4 ' } 
]
  return (
    <>
      <div className="">
        <div className="">
          <h1 className=" my-2 antialiased font-semibold  text-center justify-between text-3xl">
            Annoucements
          </h1>
        </div>

        {data.map(announcement =>
            <div className="flex items-center">
            <div className=" lg:mr-7 lg:mb-0 mb-7  p-6  rounded">
              <div className="flex items-center border-b border-gray-200 pb-6">
                <img
                  src={announcement.imgSource}
                  alt={announcement.title}
                  className="w-12 h-12 rounded-full"
                />
                <div className="flex items-start justify-between w-full">
                  <div className="pl-3 w-full">
                    <p className="text-xl font-medium leading-5 text-gray-800">
                       {announcement.title}
                    </p>
                  </div>
                  {/* <svg className="justify-end"
                    width={28}
                    height={28}
                    viewBox="0 0 28 28"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M10.5001 4.66667H17.5001C18.1189 4.66667 18.7124 4.9125 19.15 5.35009C19.5876 5.78767 19.8334 6.38117 19.8334 7V23.3333L14.0001 19.8333L8.16675 23.3333V7C8.16675 6.38117 8.41258 5.78767 8.85017 5.35009C9.28775 4.9125 9.88124 4.66667 10.5001 4.66667Z"
                      stroke="#2C3E50"
                      strokeWidth="1.25"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg> */}
                </div> 
              </div>
              <div className="px-2">
                {/* <p className="text-sm leading-5 py-4 text-gray-600">
                  A group of people interested in dogecoin, the currency and a bit
                  of side for the meme and dof that we all know and love. These
                  cases are perfectly simple and easy to distinguish.
                </p> */}
              </div>
            </div>
          </div>
        )}
      
     
      </div>
    
      
      <div className="flex  justify-end w-full mt-5">
        <Link to="/AllAnnouncements" >
        <button className="bg-green-400 square px-4 py-1 shadow-xl">
          View More...
        </button>
        </Link>
      </div>
    </>
  );
};
export default AnnouncementsPage;
