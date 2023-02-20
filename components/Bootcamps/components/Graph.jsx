import React from 'react'

import Image from 'next/image'
import graph from '../assets/graph.png'
import { useRouter } from 'next/router'

const Graph = () => {

    const router = useRouter()
  return (
    <div className='flex flex-col items-center md:flex-row md:justify-between md:flex-wrap px-8 py-8'>

        <div className="text-left md:w-[65%]">

            <div className='text-4xl md:text-6xl text-white font-semibold md:w-[75%]'>
                <p>
                    <span className=''>Become a</span>
                    <span className=''> {router.pathname==="/bootcamps/ethereum"? "Ethereum Developer" : "Solana Developer"}</span>
                    <span className=''> {router.pathname==="/bootcamps/ethereum"? "in 250 hours" :router.pathname==="/bootcamps/solana"? "in 200 hours" : "in 20 hours"}</span>
                    {/* <span className='text-[#006DF6]'> 6 LPA</span> */}
                </p>
            </div>

            <div className="flex flex-wrap my-12">
                <div className={`border ${router.pathname==="/bootcamps/solana-mini"? "hidden" : "block"} rounded-md my-1 px-3 py-1 text-[16px] mx-3`}>
                     Batch of {router.pathname==="/bootcamps/ethereum"? 50 : 100} students
                </div>
                <div className={`border ${router.pathname==="/bootcamps/solana-mini"? "" : ""} rounded-md my-1 px-3 py-1 text-[16px] mx-3`}> Weekend oriented classes</div>
                <div className={`border ${router.pathname==="/bootcamps/ethereum"?"":""} rounded-md my-1 px-3 py-1 text-[16px] mx-3`}> Quick doubt resolution</div>
                <div className={`border ${router.pathname==="/bootcamps/ethereum"?"":""} rounded-md my-1 px-3 py-1 text-[16px] mx-3`}> Live Classes</div>
                <div className={`border ${router.pathname==="/bootcamps/ethereum"?"":""} rounded-md my-1 px-3 py-1 text-[16px] mx-3`}> Web3 certification after learning</div>
                <div className={`border ${router.pathname==="/bootcamps/solana-mini"?"hidden":"block"} rounded-md my-1 px-3 py-1 text-[16px] mx-3`}> Job placement</div>
                <div className={`border ${router.pathname==="/bootcamps/ethereum"?"":""} rounded-md my-1 px-3 py-1 text-[16px] mx-3`}> {router.pathname==="/bootcamps/ethereum"?"10":router.pathname==="/bootcamps/solana"? "8":"5"} Projects</div>
            </div>

            <div className="button mt-4">
                <a href="/register" className='h-[3rem] text-2xl transform transition duration-500 hover:scale-125 my-2 flex font-semibold border-transparent rounded-lg items-center w-[12rem] bg-gradient-to-r from-[#58AFEF] to-[#9374DC]  justify-center'><button>Register now !</button></a>
            </div>

        </div>

        <div className="graph-image mt-8 md: mr-8 md:mt-0">
            <Image src={graph} alt='graph' className='h-[22rem] w-[19rem]' />
        </div>

    </div>
  )
}

export default Graph