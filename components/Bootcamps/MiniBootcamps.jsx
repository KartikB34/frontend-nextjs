import React from 'react'
import Image from 'next/image'
import { useRouter } from 'next/router'

const MiniBootcamps = () => {

  const router = useRouter()

  return (
    <section id='bootcamp' className='md:p-24 '>
      <div className='box-content bg-gradient-to-r text-center flex flex-col justify-center from-[#9374DC] to-[#58AFEF]'>

        <p className='text-5xl mt-24 md:text-7xl font-semibold'>Mini Bootcamps</p>

        <div className='flex flex-wrap items-center justify-center gap-6 py-16 mb-24'>

          <div onClick={()=>router.push("/bootcamps/solana-mini")} className='bg-black flex flex-col items-center col-span-1 p-4 place-self-center rounded-3xl hover:cursor-pointer w-[13rem]'>
              <Image src='/assets/solana.png' alt="solana" width={300} height={600} className='w-[80%]' />
              <p className='text-2xl font-semibold'>Solana's mini bootcamp</p>
          </div>

        </div>

      </div>
    </section>
  )
}

export default MiniBootcamps