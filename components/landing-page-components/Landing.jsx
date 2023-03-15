import Image from 'next/image'
import Link from 'next/link'

import {BsSearch} from "react-icons/bs"

const Landing = () => {
  return (
    <div className='grid grid-cols-1 md:grid-cols-2  mx-auto items-center py-32 my-9 gap-5 min-h-[100vh] w-[75%]  md:p-4'>
      
      <div className="col-span-1 mt-12 place-self-center md:w-[80%]">
        <p className="text-5xl md:text-7xl font-semibold">Learn Web3,</p>
        <p className="text-5xl md:text-7xl font-semibold">Get Certified,</p>
        <p className="text-5xl md:text-7xl font-semibold">Land a job</p>
        <p className="text-2xl my-8">We are on the mission to upskill 1M+ Web3 enthusiasts to Web3 developers by 2025</p>
        <div className="flex flex-wrap">
        <Link 
          href='/register' 
          className='h-[4rem] text-3xl transform transition duration-500 hover:scale-105 my-2 flex font-semibold border-transparent rounded-lg items-center w-[15rem] bg-gradient-to-r from-[#58AFEF] to-[#9374DC]  justify-center'
        >
          Register now!
        </Link>
        {/* <Link 
          href='/eligibility' 
          className='h-[4rem] md:ml-3 md:px-3 text-xl my-2 flex font-semibold border-transparent rounded-lg items-center justify-center'
        >
          <BsSearch className="mr-2"/>
          Check your eligibility
        </Link> */}
        </div>

      </div>

      <div className="col-span-1 place-self-center">
        <Image src="/assets/landing.png" alt="web_landing" width={700} height={700}  className="h-[90%] w-[90%] mx-auto" />
      </div>
      
    </div>
  )
}

export default Landing
