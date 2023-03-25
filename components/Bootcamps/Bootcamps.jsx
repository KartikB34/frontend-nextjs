import React from 'react'
import Image from 'next/image'
import { useRouter } from 'next/router'

const Bootcamps = () => {

  const router = useRouter()

  return (
    <section id='bootcamp' className='md:p-24 '>
      <div className='box-content bg-gradient-to-r text-center flex flex-col justify-center from-[#9374DC] to-[#58AFEF] rounded-md'>

        <p className='text-5xl mt-24 md:text-7xl font-semibold'>Bootcamps</p>

        <div className='grid grid-cols-1 md:grid-cols-1 gap-6 py-16 mb-24'>

          <div onClick={()=>router.push("/bootcamps/ethereum")} className='bg-black flex flex-col items-center col-span-1 p-4 place-self-center rounded-3xl hover:cursor-pointer w-[20%] animate-pulse hover:animate-none hover:scale-125 transition-all'>
              <Image src='/assets/ethereum.png' alt="ethereum" width={200} height={200} className='w-[80%] ' />
              <p className='text-4xl font-semibold'>Ethereum</p>
              <p className='text-2xl font-semibold'>(click to explore)</p>
          </div>

        </div>

      </div>
    </section>
  )
}

export default Bootcamps