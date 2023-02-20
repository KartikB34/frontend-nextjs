import React from 'react'

import bluehex from '../assets/bluehex.png'
import whitehex from '../assets/whitehex.png'
import blubo from '../assets/blubo.png'
import blubn from '../assets/blubn.png'
import menwomentwo from '../assets/menwomentwo.png'
import Image from 'next/image'
import Link from 'next/link'

const AdditionalInfo = () => {
  return (
    <div>
        <div className="flex items-center my-16 justify-center min-h-[13rem] relative">
            {/* <Image src={bluehex} alt="hex" className='hidden md:block absolute right-4 h-[10rem] w-[10rem]' /> */}
            <div className='text-center text-2xl md:text-5xl md:px-16 z-10'>
                <h3>Web3 development can bring revolution in your salaries!</h3>
            </div>
        </div>

        <div className="flex items-center my-16 justify-center min-h-[13rem] relative">
            <div className="text-center text-2xl md:text-5xl md:px-16 z-10">
                <p>Come make your <span className='hr3'>Career</span></p> 
                <p>in <span className='hr3'>Web3</span></p>
            </div>
            <div className="image">
                <Image src={whitehex} alt="hex" className='hidden md:block absolute left-4 top-3 h-[10rem] w-[10rem]' />
            </div>
        </div>

        <div className="grid grid-cols-1 px-4 md:px-0 md:grid-cols-2 min-h-[94vh]">
            <div className='col-span-1 place-self-center'>
                <Image src={menwomentwo} alt='menwomen' className='h-[22rem] md:h-[30rem] mb-8 md:mb-0 w-[18rem] md:w-[27rem]' />
            </div>

            <div className="col-span-1 place-self-center">
                <span className='text-3xl md:text-5xl font-semibold'>Thinking about switching career?</span>
                <p className='text-2xl md:text-2xl mt-3'>Pick Web3 development!</p>
                <p className='text-xl md:text-3xl my-8 md:my-12'>What is holding you back?</p>
                <Link href='/register' className='h-[4rem] text-3xl transform transition duration-500 hover:scale-105 my-2 flex font-semibold border-transparent rounded-lg items-center w-[15rem] bg-gradient-to-r from-[#58AFEF] to-[#9374DC]  justify-center'>
                    Register now!
                </Link>
            </div>
        </div>

        <div className="flex items-center my-16 justify-center min-h-[13rem] relative">
            <Image src={blubo} alt="blubo" className='hidden md:block absolute left-4 h-[10rem] w-[10rem]' />
            <div className='text-center flex flex-col items-center justify-center md:px-16 z-10'>
                <p className='text-2xl mb-6 md:5b-0 md:text-5xl'><span className='hr2'>Third batch for</span> <span className='hr3'>Web3</span> <span className='hr2'>Enthusiasts</span></p>
                <p className='text-2xl md:text-3xl md:w-[70%] text-center'>A project orientated program for working professionals and students on weekends </p>
            </div>
            <Image src={blubn} alt="blubn" className='hidden md:block absolute right-4 h-[10rem] w-[10rem]' />
        </div>
    </div>
  )
}

export default AdditionalInfo
