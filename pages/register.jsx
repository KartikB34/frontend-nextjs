import React, { useState } from "react";
// import {MdOutlineArrowBackIosNew} from "react-icons/md"
import Airtable from 'airtable'
import axios from "axios";
import { toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import { useRouter } from "next/router";

import {IoIosArrowBack ,IoIosArrowForward} from "react-icons/io"

const base = new Airtable({apiKey: process.env.NEXT_PUBLIC_API_KEY}).base('appVO0xf2gHJcrGJI')

const Register = () => {

    const router = useRouter()
    
    const [user, setUser] = useState({
      'name': '',
      'phone_no': '',
      'email': '',
      'experience': '',
      'city': '',
      'coupon': '',
      'bootcamp': ''
    })
    const [loading, setLoading] = useState(false);

    const [step, setStep] = useState(1)
    console.log(step)


    const handleSubmit = (e) => {
      e.preventDefault();

      if(user.name && user.email && user.phone_no && user.experience && user.city && user.bootcamp) {
        setLoading(true);  
        base('register').create([
          {
              fields : {
                  name: user.name,
                  email: user.email,
                  phone_no: '+91' + user.phone_no,
                  city: user.city,
                  experience: user.experience,
                  bootcamp: user.bootcamp,
                  coupon: user.coupon
              }
          }
        ], function(err, records) {
          if (err) {
            console.error(err);
            return;
          }
          records.forEach(function (record) {
            console.log(record.getId());
            console.log(user)
          });
        });
        setLoading(false)


      } else{
        toast.error("Please fill all the values");
      }
    }
 
    return (
      <>
        <div className="pt-16 w-full text-[14px]">

        <div className="w-full flex flex-col items-center justify-center py-12 ">
            <h1 className="text-3xl md:text-5xl px-3 mt-3 text-center font-semibold mb-2">
              Please fill the below form to register for
            </h1>
            <h1 className="text-3xl md:text-5xl px-3 text-center font-semibold mb-2">
              web3 Bootcamp
            </h1>
        < div className=" mt-8 rounded-2xl">
         <div className='w-full relative md:w-[48rem] py-16 flex flex-col bg-gray-800 items-center shadow-2xl rounded-2xl px-10 md:px-0'>

            <div className="w-[15rem] flex justify-between mb-4 items-center md:w-[24rem]">
              <div onClick={()=>{setStep(step-1)}} className={`${step===3? "visible" : "invisible"} flex items-center hover:cursor-pointer text-lg`}>⬅️back</div>
              <div className="">Step: {step}/3</div>
            </div>

            { step===1 && 
            <form >
              <div className='my-4 '> 
                <p className='ml-2 mb-2 text-[16px]'>Name*</p>
                <input required={true} onChange={(e) => setUser({...user, name:e.target.value})} value={user.name} className=' bg-gray-900 px-6 h-[45px] w-[15rem] md:w-[24rem] border outline-1 outline-blue-200 border-blue-900 rounded-md' />
              </div>

              <div className='my-4 '>
              <p className='ml-2 mb-2 text-[16px]'>Email*</p>
              <input onChange={(e) => setUser({...user, email: e.target.value})} required={true} value={user.email} type="email" className=' bg-gray-900 px-6 h-[45px] w-[15rem] md:w-[24rem] border outline-1 outline-blue-200 border-blue-900 rounded-md' />
              </div>
          
              <div className='my-4 '>
                <p className='ml-2 mb-2 text-[16px]'>Phone Number*</p>
                <input onChange={(e) => setUser({...user, phone_no: e.target.value})} required={true} type="tel" value={user.phone_no} className=' bg-gray-900 px-6 h-[45px] w-[15rem] md:w-[24rem] border outline-1 outline-blue-200 border-blue-900 rounded-md' />
              </div>
              
              <div>
                <button disabled={!(user.name && user.email && user.phone_no)} onClick={() => setStep(step+1)} className="flex text-white items-center text-lg hover:cursor-pointer">
                 next➡️ 
                </button>
              </div>
            </form>}

             {step === 2 && 
             <form >
             {/* <div className='my-4'>
               <p className='ml-2 mb-2 text-[16px]'>Organisation/Institute</p>
               <input required={true} onChange={(e) => setOrg(e.target.value)} value={org} className=' bg-gray-900 px-6 h-[45px] w-[15rem] md:w-[24rem] border outline-1 outline-blue-200 border-blue-900 rounded-md' />
             </div> */}

            <div className='my-4 '>
                <p className='ml-2 mb-2 text-[16px]'>Your experience level*</p>
                <select
                  defaultValue="Experience Level"
                  onChange={(e) => setUser({...user, experience: e.target.value})}
                  value={user.experience}
                  required={true}
                  placeholder="Experiance"
                  className=" bg-gray-900 px-6 h-[45px] w-[15rem] md:w-[24rem] border outline-1 outline-blue-200 border-blue-900 rounded-md"
                >
                  <option value="Beginner">Beginner</option>
                  <option value="Intermediate">Intermediate</option>
                  <option value="Expert">Expert</option>
                </select>
            </div>

            <div className='my-4 '>
                <p className='ml-2 mb-2 text-[16px]'>City*</p>
                <input onChange={(e) => setUser({...user, city: e.target.value})} value={user.city} className=' bg-gray-900 px-6 h-[45px] w-[15rem] md:w-[24rem] border outline-1 outline-blue-200 border-blue-900 rounded-md' />
            </div>


          <div className="flex justify-between">
            <button onClick={() => setStep(step - 1)} className="flex text-white items-center text-lg hover:cursor-pointer">
              ⬅️back
            </button>
            <button disabled={!( user.city && user.experience)} onClick={() => setStep(step + 1)} className="flex text-white items-center text-lg hover:cursor-pointer">
              next➡️
            </button>
          </div>
          </form>}
          {step ===3 && <form onSubmit={handleSubmit}>
          {/* <div className='my-4 '>
            <p className='ml-2 mb-2 text-[16px]'>Referral</p>
            <input onChange={(e) => setReferral(e.target.value)} value={referral} className=' bg-gray-900 px-6 h-[45px] w-[15rem] md:w-[24rem] border outline-1 outline-blue-200 border-blue-900 rounded-md' />
          </div> */}

          <div className='my-4 '>
            <p className='ml-2 mb-2 text-[16px]'>Coupon code/Referrals</p>
            <input onChange={(e) => setUser({...user, coupon: user.coupon})} value={user.coupon} className=' bg-gray-900 px-6 h-[45px] w-[15rem] md:w-[24rem] border outline-1 outline-blue-200 border-blue-900 rounded-md' />
          </div>

          <div className='my-4 '>
                <p className='ml-2 mb-2 text-[16px]'>Registering for bootcamp*</p>
                <select
                  required={true}
                  defaultValue="Experience Level"
                  onChange={(e) => setUser({...user, bootcamp: e.target.value})}
                  value={user.bootcamp}
                  placeholder="Experiance"
                  className=" bg-gray-900 px-6 h-[45px] w-[15rem] md:w-[24rem] border outline-1 outline-blue-200 border-blue-900 rounded-md"
                >
                  <option value="Select bootcamp">Select bootcamp</option>
                  <option value="Solana">Solana</option>
                  <option value="Ethereum">Ethereum</option>
                  <option value="Both">Both (Solana and Ethereum)</option>
                  <option value="Both">Solana's mini bootcamp</option>
                </select>
            </div>
          </form>}

        {step ===3 && <button disabled={!(user.bootcamp)} type="submit" onClick={handleSubmit} className={`border-2 w-[12rem] mr-4 border-[#003979] font-semibold rounded-full px-12 py-3 mt-7 inline-block hover:bg-[#1B2430] hover:text-white`}>{loading? "Loading..." : "SUBMIT"}</button>}

        </div>
        </div>

        </div>
        </div>
        </>
    )
}
export default Register;