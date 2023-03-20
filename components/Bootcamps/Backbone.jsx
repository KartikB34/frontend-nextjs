import React,{useState} from 'react'
import Bcontent from './Bcontent';

import Educator from './assets/backbone/educator.jpg'
import Mentor from './assets/backbone/mentor.jpg'
import Placement from './assets/backbone/placement.jpg'
import Manager from './assets/backbone/manager.jpeg'
import {BsLinkedin} from "react-icons/bs"
import linkIcon from "./assets/backbone/linkedin_icon.png"

import Image from 'next/image'

const Backbone = () => {

    const [content, setContent] = useState('Educator');
    const [source, setSource] = useState(Educator);
    const [name, setName] = useState('Kajal Singh');
    const [Linkedin ,setLinkedin] = useState('https://www.linkedin.com/in/kajal-singh-3527a742');

    const educatorHandler = () => {
        setContent('Educator')
        setSource(Educator)
        setName('Kajal Singh')
        setLinkedin('https://www.linkedin.com/in/kajal-singh-3527a742')
    }
    const mentorHandler = () => {
        setContent('Mentor')
        setSource(Mentor)
        setName('Akshay Kurhekar')
        setLinkedin('https://www.linkedin.com/in/akshay-kurhekar-64438a168')
    }
    // const counsellorHandler = () => {
    //     setContent('Counsellor')
    //     setSource(Educator)
    //     setName('Master Oogway')
    // }
    const programmanagerHandler = () => {
        setContent('Programmanager')
        setSource(Manager)
        setName('Pradnyashil Gajbhiye')
        setLinkedin('https://www.linkedin.com/in/pradnyashil-gajbhiye')
    }
    const placementcellHandler = () => {
        setContent('Placementcell')
        setSource(Manager)
        setName('Pradnyashil Gajbhiye')
        setLinkedin('https://www.linkedin.com/in/pradnyashil-gajbhiye')
    }

    const clickButton = " border p-3 md:text-2xl font-semibold my-2 rounded-xl bg-gradient-to-r from-[#58AFEF] to-[#9374DC] mx-2 md:mx-8"
    const unclickedButton = "border p-3 rounded-xl font-semibold md:text-2xl my-2 hover:bg-gray-800 mx-2 md:mx-8"

  return (
    <>
      <div className="flex flex-col text-center min-h-[90vh] mb-16">
        <span className=' m-auto w-full text-3xl md:text-5xl'>Meet Your Backbone</span>

        <div className="flex flex-col w-full justify-center">
            <div className="w-[100%] mt-6 mb-16">
                <button className={`${content==='Educator'? `${clickButton}` : `${unclickedButton}`}`} onClick={educatorHandler}> Educator </button>
                <button className={`${content==='Mentor'? `${clickButton}` : `${unclickedButton}`}`} onClick={mentorHandler}> Mentor </button>
  
                <button className={`${content==='Placementcell'? `${clickButton}` : `${unclickedButton}`}`} onClick={placementcellHandler}> Placement Cell </button>
            </div>

            <div className='flex flex-col md:flex-row items-center justify-center md:gap-4'>

                <div className="flex flex-col col-span-1 mb-12 md:mb-0 md:mr-16 place-self-center items-center">
                    <Image src={source} alt={content} className="h-[13rem] md:h-[20rem] w-[13rem] md:w-[20rem] shadow-sm shadow-white rounded-full object-cover" />
                    <div className='mt-4 flex items-center text-center text-3xl'>
                        <h1 className='font-bold'>{name}</h1>
                        <a href={Linkedin} target="_blank" className="ml-3 text-2xl"><BsLinkedin /></a>
                    </div>
                </div>

                <div className="col-span-1 px-4 md:px-0 text-left place-self-center">
                    <Bcontent content={content} />
                </div>
            </div>

        </div>
      </div>
    </>
  )
}

export default Backbone