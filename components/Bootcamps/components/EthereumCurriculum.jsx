import React from 'react'
import {BsPlusLg, BsClock} from "react-icons/bs"
import {TiTick} from "react-icons/ti"
import {IoMdDownload} from "react-icons/io"
import Link from 'next/link'

const EthereumCurriculum = () => {

    const content = [
        {
            title: "Blockchain Fundamentals",
            // title: "Week 1 & Week 2",
            week:" Week 1 & Week 2",
            desc: [
                "History of the financial system.",
                "Blockchain Fundamentals.",
                "Understanding the Bitcoin mechanism.",
                "Understanding Ethereum Mechanism.",
                "JavaScript crash course.",
            ],
            last_point: "Project building in Javascript.",
          },

        {
            title: "Smart contracts",
            week:" Week 3 & Week 4",
            desc: [
                "Introduction to smart contracts.",
                "Wallets.",
                "Solidity basics with beginner projects",
            ],
            last_point: "Advance concepts of Solidity."
          },

        {
            title: "Tools in Blockchain",
            week:"Week 5 & Week 6",
            desc: [
                "Tools, Services and libraries in Blockchain.",
                "Understanding the applications of blockchain",
                "ERC standards",
            ],
            last_point: "Layers in Blockchain.",
          },

        {
            title: "Defi",
            week:" Week 7, Week 8 & Week 9",
            desc: [
                "Introduction to DeFi.",
                "Liquidity Pools.",
                "Understanding Uniswap.",
                "Brief understanding of crypto exchange.",
                "Defi Project - Beginner Level.",
                
            ],
            last_point: "Defi Project - Advance Level.",
          },

        {
            title: "NFTs",
            week:" Week 10, Week 11 & Week 12",
            desc: [
                "Introduction to NFTs",
                "Metadata and IPFS.",
                "ERC721, ERC1155, ERC2981 etc.",
                "Lazy Minting.",
                "Fractional NFTs",
                "Understanding OpenSea",
                "NFT project - Beginner Level",
            ],
            last_point: "NFT project - Advance Level",
          },

        {
            title: "DAO",
            week:" Week 13, Week 14 & Week15",
            desc: [
                "Introduction to DAO.",
                "Understanding AAVE and MakerDAO",
                "Introduction to the Metaverse",
            ],
            last_point: "Understanding Sandbox",
          },

        {
            title: "Interview preperation",
            week:" Week 16",
            desc: [
                "",
            ],
            last_point: "",
          },
        ]

  return (
    <div className='pt-8 mb-12'>

        <h1 className='text-4xl md:text-6xl mb-16 font-bold'>Curriculum</h1>
        <div className='flex flex-col md:flex-row mb-12 md:justify-between items-center'>
            <p className='md:w-[80%] text-lg md:text-2xl'>Best in-class content by leading faculty and industry leaders in the form of live Sessions, 250+ hours of learning, 10+ Web3 projects, doubt solving...</p>
            <a href='/Ethereum_Curriculum.pdf' download="Ethereum_Curriculum.pdf" ><button className='h-[3rem] text-2xl transform transition duration-500 hover:scale-125 my-2 flex font-semibold border-transparent rounded-lg items-center w-[12rem] bg-gradient-to-r from-[#58AFEF] to-[#9374DC]  justify-center '>Curriculum <IoMdDownload className='ml-2'/></button></a>
        </div>

        <div className='flex flex-col md:flex-row items-center md:justify-center'>
            <div className='items-center text-xl my-3 text-center md:mr-12'>
                <p className='text-neutral-100 font-semibold mb-2'>250+</p>
                <p className='font-semibold'>Hours of learning</p>
            </div>

            <div className='items-center text-xl my-3 md:mr-12 text-center'>
                <p className='text-neutral-100 font-semibold mb-2'>10+</p>
                <p className='font-semibold'>WEB3 Projects</p>
            </div>

            <div className='items-center text-xl my-3 md:mr-12 text-center'>
                <p className='text-neutral-100 font-semibold mb-2'>100%</p>
                <p className='font-semibold'>Placement</p>
            </div>

            <div className='items-center text-xl my-3 text-center'>
                <p className='text-neutral-100 font-semibold mb-2'>50% cashback</p>
                <p className='font-semibold flex items-center'>After placement ! <div className='text-green-600 text-2xl'><TiTick /></div> </p>
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
                        {(i!=6 && i!=11) && <div className='bg-gray-900 text-lg max-h-0 peer-checked:max-h-20'><p className='p-5'>{item.last_point}</p></div>}
                        </label>
                    </div>
                </>)})}

        </div>
    </div>
  )
}

export default EthereumCurriculum