import React from 'react'
import {BsPlusLg, BsClock} from "react-icons/bs"
import {TiTick} from "react-icons/ti"
import {IoMdDownload} from "react-icons/io"
import Link from 'next/link'

const EthereumCurriculum = () => {

    const content = [
        {
          title: "Blockchain Fundamentals",
          week: "Week 1",
          desc: [
            "Introduction to blockchain technology and its applications",
            "Understanding consensus algorithms (Proof of Work, Proof of Stake)",
            "Public vs. Private blockchains",
            "Cryptography basics and the role it plays in blockchain security",
            "Introduction to smart contracts and decentralized applications (dApps)"
          ],
          last_point: null,
        },
        {
          title: "Solidity",
          week: "Week 2-3",
          desc: [
            "Introduction to Solidity programming language",
            "Solidity syntax, variables, and data types",
            "Writing and deploying your first smart contract on Ethereum",
            "Understanding the role of gas in smart contract execution",
            "Common smart contract vulnerabilities and how to avoid them"
          ],
          last_point: null,
        },
        {
          title: "NFTs",
          week: "Week 4",
          desc: [
            "Introduction to Non-Fungible Tokens (NFTs)",
            "Creating, minting, and selling NFTs on Ethereum",
            "Understanding ERC-721 and ERC-1155 NFT standards",
            "NFT marketplaces and their role in the NFT ecosystem",
            "NFT use cases beyond digital art, such as gaming and real estate"
          ],
          last_point: null,
        },
        {
          title: "DeFi",
          week: "Week 5-6",
          desc: [
            "Introduction to Decentralized Finance (DeFi)",
            "DeFi protocols and applications on Ethereum (UniSwap, Aave, Compound, etc.)",
            "Yield farming, staking, and liquidity mining",
            "Flash loans and their impact on DeFi",
            "Risks and challenges in DeFi and how to mitigate them"
          ],
          last_point: null,
        },
        {
          title: "DAOs",
          week: "Week 7",
          desc: [
            "Introduction to Decentralized Autonomous Organizations (DAOs) and their role in governance",
            "Building a DAO and deploying it on Ethereum",
            "Exploring real-world use cases of DAOs on Ethereum"
          ],
          last_point: null,
        },
        {
          title: "Metaverse and Gamification",
          week: "Week 8",
          desc: [
            "Exploring the Metaverse and its potential impact on the future of work, social interaction, and entertainment",
            "Gamification and incentivization in blockchain applications",
            "Real-world use cases of gamification on Ethereum"
          ],
          last_point: null,
        },
        {
          title: "Final Project",
          week: null,
          desc: [
            "Building a decentralized application (dApp) that utilizes one or more of the concepts covered in the bootcamp"
          ],
          last_point: null,
        },
      ];
      

  return (
    <div className='pt-8 mb-12'>

        <h1 className='text-4xl md:text-6xl mb-16 font-bold'>Curriculum</h1>
        <div className='flex flex-col md:flex-row mb-12 md:justify-between items-center'>
            <p className='md:w-[80%] text-lg md:text-2xl'>Best in-class content by leading faculty and industry leaders in the form of live Sessions, 100+ hours of learning, 10+ Web3 projects, doubt solving...</p>
            <a href='/Ethereum_Curriculum.pdf' download="Ethereum_Curriculum.pdf" ><button className='h-[3rem] text-2xl transform transition duration-500 hover:scale-125 my-2 flex font-semibold border-transparent rounded-lg items-center w-[12rem] bg-gradient-to-r from-[#58AFEF] to-[#9374DC]  justify-center '>Curriculum <IoMdDownload className='ml-2'/></button></a>
        </div>

        <div className='flex flex-col md:flex-row items-center md:justify-center bg-gradient-to-r from-indigo-900 to-slate-900 md:w-[75%] w-[90%] mx-auto rounded-lg shadow-md border-2'>
            <div className='items-center text-xl my-3 text-center md:mr-12'>
                <p className='text-neutral-100 font-semibold mb-2'>100+</p>
                <p className='font-semibold'>Hours of learning</p>
            </div>

            <div className='items-center text-xl my-3 text-center md:mr-12'>
                <p className='text-neutral-100 font-semibold mb-2'>2 months</p>
                <p className='font-semibold'>Duration</p>
            </div>

            <div className='items-center text-xl my-3 md:mr-12 text-center'>
                <p className='text-neutral-100 font-semibold mb-2'>10+</p>
                <p className='font-semibold'>WEB3 Projects</p>
            </div>

            <div className='items-center text-xl my-3 md:mr-12 text-center'>
                <p className='text-neutral-100 font-semibold mb-2'>100%</p>
                <p className='font-semibold'>Placement assitance</p>
            </div>

            <div className='items-center text-xl my-3 text-center'>
                <p className='text-neutral-100 font-semibold mb-2'>NFT certificate</p>
                <p className='font-semibold flex items-center'>On completion</p>
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
                            { i!=6 && <BsPlusLg className=' h-12 float-right peer-checked:rotate-45 peer-checked:text-indigo-500 mr-4'/>}
                        </div>
                        {(i!=6 && i!=11) && item.desc.map((desc) => {
                            return(
                                <div className='bg-gray-900 text-lg peer-checked:border-b-2 border-white max-h-0 peer-checked:max-h-20'><p className='p-5 my-auto'>{desc}</p></div>
                            );
                        })}
                        
                        </label>
                    </div>
                </>)})}

        </div>
    </div>
  )
}

export default EthereumCurriculum