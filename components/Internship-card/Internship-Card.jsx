import React from 'react';;
import { useRouter } from 'next/router';

const InternshipCard = (props) => {
  const router = useRouter();

  const handleApply = () => {
      router.push(`/jobapplication?id=${props.srId}&type=${props.type}`)
  }

  return (
    <div className="bg-gradient-to-r from-indigo-800 to-indigo-900 filter backdrop-blur-xl min-h-min flex flex-col justify-between shadow-lg grow shrink basis-80 p-6 border border-gray-900 rounded-lg">
        <div>
            <div className="text-lg sm:text-xl font-semibold">{props.position}</div>
            <div className="mt-1">{props.cmp}</div>
            <div className="mt-2 text-white">{(props.responsibilities).substr(0, 120)}...</div>
        </div>
        <div className="mt-2 flex justify-between items-center">
            <div className="text-gray-400">
                <div><span className="font-bold text-white">{props.opn}</span>{" "}openings</div>
                <div><span className="font-bold text-white">{props.duration}</span>{" "}duration</div>
            </div>
            <div>
                <button className="px-3 py-2 border rounded-md hover:bg-black">Details</button>
            </div>
        </div>
    </div>
  )
}

export default InternshipCard 