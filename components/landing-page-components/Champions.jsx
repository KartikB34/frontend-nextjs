import React from 'react'
import {AiOutlineLinkedin} from "react-icons/ai"
import Link from 'next/link'
import Image from 'next/image'

const Champions = () => {
  return (
    <div className='px-8 pt-24 md:px-24 text-center'>

        <p className='px-8 md:px-24 text-center text-3xl'>You can be in top 0.1% Web3 Developers !</p>    
        <p className='px-8 md:px-24 text-center mb-4 mt-4 text-3xl'>Whether you are a working professional or a student</p>

        <p className='text-5xl md:text-5xl  mt-24 font-semibold'>Our Champions</p>
        <div className='grid grid-cols-1 md:grid-cols-3 py-16 gap-8'>   

            <div className='col-span-1 flex flex-col items-center place-self-center'>
                <Image src='/assets/bristin.jpg' width={200} height={200} alt="bristin" className='rounded-full w-[60%] mb-6' />
                <p className='text-3xl flex items-center justify-center'>
                    Bristin Borah
                    <Link href='https://www.linkedin.com/in/bristin-borah-739b63179' target="_blank">
                        <AiOutlineLinkedin className='mt-1 hover:cursor-pointer ml-2' />
                    </Link>
                </p>
                <p className='text-xl mb-3'>(Blockchain Engineer)</p>
                <p className='text-xl'>Company: Melisoft</p>
                <p className='text-xl'>CTC: 30LPA</p>
            </div>

            <div className='col-span-1 flex flex-col items-center place-self-center'>
                <Image src='/assets/akash.jpeg' width={200} height={200} alt="akash" className='rounded-full w-[60%] mb-6' />
                <p className='text-3xl flex items-center justify-center'>
                    Akash Singh
                    <Link href='https://www.linkedin.com/in/akash-singh-071850193/' target="_blank">
                        <AiOutlineLinkedin className='mt-1 hover:cursor-pointer ml-2' />
                    </Link>
                </p>
                <p className='text-xl mb-3'>(Blockchain Engineer Intern)</p>
                <p className='text-xl'>Company: Impactional Games</p>
                <p className='text-xl'>Stipend: 12K</p>
            </div>

            <div className='col-span-1 flex flex-col items-center place-self-center'>
                <Image src='/assets/tathagat.jpeg' width={200} height={200} alt="tathagat" className='rounded-full w-[60%] mb-6' />
                <p className='text-3xl flex items-center justify-center'>
                    Tathagat
                    <Link href='https://www.linkedin.com/in/tathagat-926779191/' target="_blank">
                        <AiOutlineLinkedin className='mt-1 hover:cursor-pointer ml-2' />
                    </Link>
                </p>
                <p className='text-xl mb-3'>(Blockchain Engineer Intern)</p>
                <p className='text-xl'>Company: Impactional Games</p>
                <p className='text-xl'>Stipend: 12K</p>
            </div>

        </div>

        {/* <div className='h-1 bg-white w-full'></div> */}
      
    </div>
  )
}

export default Champions
