import React from 'react';
import { useRouter } from 'next/router';
// import { ToastContainer, toast } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';

const JobCard = (props) => {
  const router = useRouter()

//   console.log("job card")

  const handleApply = () => {
      router.push(`/jobapplication?id=${props.srId}&type=${props.type}`)
  }

  return (
    // min-h-min
    <div className=" bg-gradient-to-r from-indigo-800 to-indigo-900 filter backdrop-blur-xl min-h-min flex flex-col justify-between shadow-lg grow shrink basis-80 p-6 border border-gray-900 rounded-lg">
        <div className='opacity-100'>
            <div className="text-lg sm:text-xl font-semibold">{props.position}</div>
            <div className="mt-1">{props.cmp}</div>
            <div className="mt-2">{(props.description).substr(0, 120)}...</div>
        </div>
        <div className="mt-2 flex justify-between items-center">
            <div className="text-gray-200">
                <div><span className="font-bold">{props.opn}</span>{" "}openings</div>
                <div><span className="font-bold">{props.exp}</span>{" "}experience</div>
            </div>
            <div className=''>
                <button className="px-3 py-2 hover:text-white border border-black rounded-md hover:bg-gray-900">Details</button>
            </div>
        </div>
    </div>
  )
}

export default JobCard 