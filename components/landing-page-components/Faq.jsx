import { useRouter } from 'next/router'
import React from 'react'
import {BsPlusLg, BsClock} from "react-icons/bs"

const Faq = () => {

    const router = useRouter()

    const content = [
        {
            ques:"Who is eligible for this course?",
            ans:"Any working professional or student who is web3 enthusiasts are eligible"
        },
        {
            ques:"How will my doubts get solved?",
            ans:"2 hours of live doubt solving with Mentor, everyday."
        },
        {
            ques:"How will the placement cell help me get a job?",
            ans:"CryptoNaukri is collaborating with Indian and International web3 startups and good paying web3 IT Consultancy firms."
        },
        {
            ques:"What will be the frequency of 1 on 1 sessions with a mentor?",
            ans:"You can schedule a 1-on-1 session with Mentor anytime during weekdays."
        },
        {
            ques:"What is the role of the mentor?",
            ans:"Mentor will help you in completing 8 projects, doubt solving, interview preparation and career guidance."
        },
        {
            ques:"What are the prerequisites of the bootcamp?",
            ans:"Whether you are a professional or a student, you are eligible."
        },
        {
            ques:"What is the duration of the bootcamp?",
            ans:"4 months(Training) + Placement assistance"
        },
        {
            ques:"When will the placement start?",
            ans:"After 3 months training, 1 month will be dedicated to placement preparation."
        },
        {
            ques:"How can I apply?",
            ans:"Fill the registration form and get the interview call."
        },
    ]

  return (
    <div className='px-8 md:px-24'>

        <p className='text-7xl text-center mt-24'>FAQs</p>
        <div className='h-1 m-auto w-[15rem] bg-white mb-24'></div>

    {content.map((item, i) => {
        return (
        <>
        <div key={item.ques} className={`overflow-hidden md:mx-24 ${router.pathname==="/bootcamps/solana-mini" &&  (i==2 || i==6 || i==7)?"hidden":"block"}`}>
            <label>
            <input className='absolute opacity-0 peer' type="checkbox"></input>
            <div className='flex items-center cursor-pointer border rounded-xl border-white justify-between'>
                <div className='p-5'>
                    <p className=' m-0 md:text-xl font-semibold'>{item.ques}</p>
                </div>
                <BsPlusLg className=' h-12 float-right peer-checked:rotate-45 peer-checked:text-indigo-500 mr-4'/>
            </div>

            <div className='peer-checked:border rounded-lg border-white mt-2 mb-6 bg-blue-900 max-h-0 peer-checked:max-h-20'><p className='p-5 my-auto'>{item.ans}</p></div>

            </label>
        </div>
        </>)})}
      
    </div>
  )
}

export default Faq
