import React from 'react'
import SolanaCurriculum from './SolanaCurriculum'
import { useRouter } from 'next/router'
import EthereumCurriculum from './EthereumCurriculum';
import MiniSolanaCurriculum from './MiniSolanaCurriculum';

const Landing = () => {

  const router = useRouter();

  return (
    <div className='px-8'>
      <div className='pt-12 min-h-[95vh] flex flex-col items-center justify-center'>
          <div className='flex flex-col mb-4 md:mb-0 md:flex-row'>
            <p className='text-[#006DF6] m-0 text-[55px] font-bold'>
              <span className='text-neutral-100 m-0'>{router.pathname==="/bootcamps/solana"? "Solana" :router.pathname==="/bootcamps/ethereum"? "Ethereum": "Solana's mini"} </span>
              {/* <span className='m-0'>Blockchain</span> */}
            </p>
          </div>
          <div>
            <p className='text-5xl md:text-[60px] m-0 md:mb-6 font-bold'>Bootcamp </p>
          </div>
              <p className='mt-8 text-xl md:text-2xl'>We are on the mission to upskill 1M+ Web3 enthusiasts to Web3 developers by 2025</p>
          <div className="button md:mt-8 mt-4">
            <a href='/register' className='h-[4rem] text-3xl transform transition duration-500 hover:scale-125 my-2 flex font-semibold border-transparent rounded-lg items-center w-[15rem] bg-gradient-to-r from-[#58AFEF] to-[#9374DC]  justify-center '><button>Register now !</button></a>
          </div>
      </div>

      <div id='Curriculum'>
        {router.pathname==="/bootcamps/solana" ?<SolanaCurriculum />: router.pathname==="/bootcamps/ethereum" ?<EthereumCurriculum/> : <MiniSolanaCurriculum />}
      </div>

      <div className='flex flex-col border-3 items-center text-center justify-center md:my-16 py-12'>
        <p className='font-bold text-5xl'>Connect for free consultation</p>
        <p className='text-2xl my-8'>Schedule online meet now!</p>
        <a href="https://calendly.com/lusternetwork/pradnyashil" target="_blank" className='h-[4rem] text-3xl transform transition duration-500 hover:scale-125 my-2 flex font-semibold border-transparent rounded-lg items-center w-[15rem] bg-gradient-to-r from-[#58AFEF] to-[#9374DC]  justify-center '>Schedule now !</a>
      </div>

    </div>
  )
}

export default Landing