import React from 'react'

export default function ImportantTasks() {
    return (
        <div className=" bg-white shadow-lg">
            <div className="flex justify-center">
            <div className=" bg-black text-white px-8 py-1 font-bold rounded-2xl justify-center">
            <h1 className="justify-center">Important Task</h1>
            </div>
           </div>
            <div>
                <ol className="p-2 m-3">
                    <li> <div className="flex p-5 bg-green-100 border-b-2 border-green-300">
                    Today Class 8 Test and Class 10  Practicals </div></li>
                    <li> <div className="flex p-5 bg-orange-100 border-b-2 border-orange-300">
                    Today Class 9 Test and Class 10  Practicals & Score evaluation</div></li>
                </ol>
            </div>
            <div className="flex justify-end p-5">
            <div className=" bg-green-400 hover:bg-green-500 text-white px-8 py-1 font-bold rounded-2xl justify-center">
            <button className="justify-center">Add More + </button>
            </div>
           </div>
        </div>
    )
}
