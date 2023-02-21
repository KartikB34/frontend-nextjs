import React from 'react'
import {BsPlusLg, BsClock} from "react-icons/bs"
import {TiTick} from "react-icons/ti"
import {IoMdDownload} from "react-icons/io"
import Link from 'next/link'

const MiniSolanaCurriculum = () => {

    const content = [
        {
            title: "Introduction to Solana",
            week:" Day 1",
            desc: [
                "1) Introduction to Solana",
                "-> Overview of Solana",
                "-> What makes Solana unique among blockchain platforms",
                "2) Solana Architecture",
                "-> Overview of the Solana network",
                "-> Solana consensus algorithm",
                "-> Solana token economics",
                "3) Solana Development Environment",
                "-> Solana CLI",
                "-> Solana SDK",
                "-> Solana Testnet",
                "4) Solana Transactions",
                "-> Overview of Solana transactions",
            ],
            last_point: "-> Creating and signing Solana transactions",
        },

        // {
        //     title: "Introduction to Solana",
        //     week:" Day 1",
        //     desc: [
        //         "Overview of Solana",
        //     ],
        //     last_point: "What makes Solana unique among blockchain platforms",
        // },

        // {
        //     title: "Solana Architecture",
        //     week:" Day 1",
        //     desc: [
        //         "Overview of the Solana network",
        //         "Solana consensus algorithm",
        //     ],
        //     last_point: "Solana token economics"
        //   },

        // {
        //     title: "Solana Development Environment",
        //     week:"Day 1",
        //     desc: [
        //         "Solana CLI",
        //         "Solana SDK",
        //     ],
        //     last_point: "Solana Testnet",
        //   },

        // {
        //     title: "Solana Transactions",
        //     week:"Day 1",
        //     desc: [
        //         "Overview of Solana transactions",                
        //     ],
        //     last_point: "Creating and signing Solana transactions",
        //   },

        {
            title: "Solana wallets",
            week:"Day 2",
            desc: [
                "1) Solana wallets",
                "-> Overview of Solana wallets",
                "-> Storing and managing Solana tokens",
                "2) Solana DeFi",
                "-> Overview of the Solana DeFi ecosystem",
                "-> Solana DeFi use cases",
                "3) Solana Web3 API",
                "-> Overview of Solana Web3 API",
                "-> Querying the Solana blockchain with the API",
                "4) Interacting with Solana DeFi dApps",
                "-> Overview of dApp user experience",
            ],
            last_point: "-> Interacting with Solana DeFi dApps",
          },

        // {
        //     title: "Solana Wallets",
        //     week:"Day 2",
        //     desc: [
        //         "Overview of Solana wallets",
        //     ],
        //     last_point: "Storing and managing Solana tokens",
        //   },

        // {
        //     title: "Solana DeFi",
        //     week:"Day 2",
        //     desc: [
        //         "Overview of the Solana DeFi ecosystem",
        //     ],
        //     last_point: "Solana DeFi use cases",
        //   },

        // {
        //     title: "Solana Web3 API",
        //     week:"Day 2",
        //     desc: [
        //         "Overview of Solana Web3 API",
        //     ],
        //     last_point: "Querying the Solana blockchain with the API",
        //   },
        // {
        //     title: "Interacting with Solana DeFi dApps",
        //     week:"Day 2",
        //     desc: [
        //         "Overview of dApp user experience",
        //     ],
        //     last_point: "Interacting with Solana DeFi dApps",
        //   },

        
        {
            title: "Building Decentralized Applications on Solana",
            week:"Day 3",
            desc: [
                "1) Building Decentralized Applications on Solana",
                "-> Overview of decentralized applications",
                "-> Programming in Rust",
                "-> Understanding Rust libraries",
                "-> Building dApps on Solana",
                "2) Solana Community and Ecosystem",
                "-> Overview of Solana community and ecosystem",
            ],
            last_point: "-> Contributing to Solana open-source projects",
          },
        // {
        //     title: "Building Decentralized Applications on Solana",
        //     week:"Day 3",
        //     desc: [
        //         "Overview of decentralized applications",
        //         "Programming in Rust",
        //         "Understanding Rust libraries",
        //     ],
        //     last_point: "Building dApps on Solana",
        //   },
        // {
        //     title: "Solana Community and Ecosystem",
        //     week:"Day 3",
        //     desc: [
        //         "Overview of Solana community and ecosystem",
        //     ],
        //     last_point: "Contributing to Solana open-source projects",
        //   },
        {
            title: "Hands-on Project",
            week:"Day 4",
            desc: [
                "Building a simple decentralized application on Solana",
                "Integrating Solana Web3 API",
            ],
            last_point: "Deploying and interacting with a smart contract on Solana",
          },
        ]

  return (
    <div className='pt-8 mb-12'>

        <h1 className='text-4xl md:text-6xl mb-16 font-bold'>Curriculum</h1>
        <div className='flex flex-col md:flex-row mb-12 md:justify-between items-center'>
            <p className='md:w-[80%] text-lg md:text-2xl'>Best in-class content by leading faculty and industry leaders in the form of live Sessions, 20+ hours of learning, 5+ Web3 projects, doubt solving...</p>
            <a href='/Ethereum_Curriculum.pdf' download="Ethereum_Curriculum.pdf" ><button className='h-[3rem] text-2xl transform transition duration-500 hover:scale-125 my-2 flex font-semibold border-transparent rounded-lg items-center w-[12rem] bg-gradient-to-r from-[#58AFEF] to-[#9374DC]  justify-center '>Curriculum <IoMdDownload className='ml-2'/></button></a>
        </div>

        <div className='flex flex-col md:flex-row items-center md:justify-center'>
            <div className='items-center text-xl my-3 text-center md:mr-12'>
                <p className='text-neutral-100 font-semibold mb-2'>20+</p>
                <p className='font-semibold'>Hours of learning</p>
            </div>

            <div className='items-center text-xl my-3 md:mr-12 text-center'>
                <p className='text-neutral-100 font-semibold mb-2'>5+</p>
                <p className='font-semibold'>WEB3 Projects</p>
            </div>

            <div className='items-center text-xl my-3 md:mr-12 text-center'>
                <p className='text-neutral-100 font-semibold mb-2'>$20</p>
                <p className='font-semibold'>On Completion</p>
            </div>

            <div className='items-center text-xl my-3 text-center'>
                <p className='text-neutral-100 font-semibold mb-2'>NFT</p>
                <p className='font-semibold flex items-center'>Certification </p>
            </div>

        </div>

        {/* Carousel div */}
        <div className='shadow-md mx-auto mt-20  w-full md:w-2/3'>           
            {content.map((item, i) => {
                return (
                <>
                    <div className='overflow-hidden my-2 rounded-lg border'>
                        <label>
                        <input className='absolute opacity-0 peer' type="checkbox"></input>
                        <div className='flex items-center cursor-pointer justify-between'>
                            <div className='p-5'>
                                <p className=' m-0 text-lg font-semibold'>{item.title}</p>
                                <div className='flex items-center mt-2 text-xs '><BsClock className='m-0 mr-1'/><p className='text-xs m-0'>{item.week}</p></div>
                            </div>
                            { i!=99 && <BsPlusLg className=' h-12 float-right peer-checked:rotate-45 peer-checked:text-indigo-500 mr-4'/>}
                        </div>
                        {(i!=99 && i!=98) && item.desc.map((desc) => {
                            return(
                                <div className='bg-gray-900 text-lg peer-checked:border-b-2 border-white max-h-0 peer-checked:max-h-20'><p className='p-5 my-auto'>{desc}</p></div>
                            );
                        })}
                        {(i!=99 && i!=98) && <div className='bg-gray-900 text-lg max-h-0 peer-checked:max-h-20'><p className='p-5'>{item.last_point}</p></div>}
                        </label>
                    </div>
                </>)})}

        </div>
    </div>
  )
}

export default MiniSolanaCurriculum