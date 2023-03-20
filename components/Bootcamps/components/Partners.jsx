import React from 'react'
import Image from "next/image"



const Partners = () => {
  return (<div className='flex flex-col items-center justify-center my-5 mt-[8rem]'>
    <p className='text-center text-xl md:text-5xl font-semibold mb-[2.5rem]'>Our Partners</p>
    <section className='flex flex-wrap justify-center gap-6 w-[75%] mx-auto'>
      <article>
        <Image src='/assets/sphereon.png' height={300} width={300}/>
      </article>
      <article>
        <Image src='/assets/trikon.png' height={300} width={300}/>
      </article>
      <article className='flex gap-4 items-center'>
        <Image src='/assets/coders-world.png' height={90} width={90}/>
        <h1 className='font-semibold text-3xl text-yellow-500'>Coders world</h1>
      </article>
      <article className='flex gap-4 items-center'>
        <Image src='/assets/ethereum.png' height={90} width={90}/>
        <h1 className='font-semibold text-3xl text-blue-400'>Ethereum</h1>
      </article>
    </section>
    </div>
  )
}

export default Partners