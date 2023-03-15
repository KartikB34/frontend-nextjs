import React from 'react'
import Image from 'next/image'

const Perks = () => {
  return (
    <div className='grid grid-cols-1 md:grid-cols-2 py-2 md:pt-20 my-[7rem] gap-5 md:w-[85%] w-[90%] mx-auto'>
      
      <div className='col-span-1'>
        <p class="text-4xl md:text-7xl font-semibold mb-3">Perks of learning web3</p>
        <ul class="list-disc">
          <li class="flex items-center text-xl md:text-3xl py-2">
            <p>No 4 year degree</p>
          </li>
          <li class="flex items-center text-xl md:text-3xl py-2">
            <p>Mostly remote</p>
          </li>
          <li class="flex items-center text-xl md:text-3xl py-2">
            <p>Job market is global</p>
          </li>
          <li class="flex items-center text-xl md:text-3xl py-2">
            <p>Demand is extremely high!</p>
          </li>
          <li class="flex items-center text-xl md:text-3xl py-2">
            <p>You can choose to be anonymous</p>
          </li>
        </ul>
      </div>

      <div className="col-span-1 hidden md:block place-self-center">
        <Image src='/assets/web.png'  width={500} height={500} alt="web_landing" className="md:h-[80%] md:w-[80%]" />
      </div>
      
    </div>
  )
}

export default Perks
