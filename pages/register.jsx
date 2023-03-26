import React, { useState } from "react";
// import {MdOutlineArrowBackIosNew} from "react-icons/md"
import Airtable from 'airtable'
import axios from "axios";
import { toast, ToastContainer } from "react-toastify";
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
    const registered = () => toast("You're successfully registered, Thank you!");


    const handleSubmit = (e) => {
      e.preventDefault();

      // Regular expressions for email and phone number format
      const emailRegex = /^\S+@\S+\.\S+$/;
      const phoneRegex = /^\d{10}$/;

      if (
        user.name &&
        user.email &&
        user.phone_no &&
        user.experience &&
        user.bootcamp &&
        emailRegex.test(user.email) && // Validate email format
        phoneRegex.test(user.phone_no) // Validate phone number format
      ) {
        setLoading(true);
        base("register").create(
          [
            {
              fields: {
                name: user.name,
                email: user.email,
                phone_no: "+91" + user.phone_no,
                city: user.city,
                experience: user.experience,
                bootcamp: user.bootcamp,
                coupon: user.coupon,
              },
            },
          ],
          function (err, records) {
            if (err) {
              console.error(err);
              return;
            }
            records.forEach(function (record) {
              console.log(record.getId());
              console.log(user);
            });
            toast.success("Form submitted successfully!"); // Show success toast
            setLoading(false);
            router.push("/");
          }
        );
      } else {
        toast.error("Please fill all the values correctly");
      }
    };

 
    return (
      <>
        <div className="pt-16 w-full text-[14px]">
        <ToastContainer/>
        <div className="w-full flex flex-col items-center justify-center py-12 ">
            <h1 className="text-3xl md:text-5xl px-3 mt-3 text-center font-semibold mb-2">
              Register now for web3 Bootcamp
            </h1>
            <h1 className="text-3xl md:text-5xl px-3 text-center font-semibold mb-2">
              
            </h1>
        < div className=" mt-8 rounded-2xl">
         <div className='flex flex-col bg-gradient-to-r from-indigo-900 to-blue-900  items-center justify-center shadow-md rounded-md px-[1.5rem] py-[1.5rem]'>

            <form className="flex flex-col gap-5">
              <div className=''> 
                <p className='ml-2 mb-2 text-[16px]'>Name*</p>
                <input placeholder="Vitalik buterin" required={true} onChange={(e) => setUser({...user, name:e.target.value})} value={user.name} className=' bg-gray-900 px-6 h-[45px] w-[15rem] md:w-[24rem] border outline-1 outline-blue-200 border-blue-900 rounded-md' />
              </div>

              <div className=''>
              <p className='ml-2 mb-2 text-[16px]'>Email*</p>
              <input placeholder="vitalik@isking.eth" onChange={(e) => setUser({...user, email: e.target.value})} required={true} value={user.email} type="email" className=' bg-gray-900 px-6 h-[45px] w-[15rem] md:w-[24rem] border outline-1 outline-blue-200 border-blue-900 rounded-md' />
              </div>
          
              <div className=''>
                <p className='ml-2 mb-2 text-[16px]'>Phone Number*</p>
                <input placeholder="7070707070" onChange={(e) => setUser({...user, phone_no: e.target.value})} required={true} type="tel" value={user.phone_no} className='bg-gray-900 px-6 h-[45px] w-[15rem] md:w-[24rem] border outline-1 outline-blue-200 border-blue-900 rounded-md' />
              </div>

              <div className=''>
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
            
            <div className=''>
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
                  <option value="Ethereum">Ethereum</option>
                </select>
            </div>
            
            <button disabled={!(user.bootcamp)} type="submit" onClick={handleSubmit} className="mx-auto bg-gradient-to-r from-indigo-600 to-blue-600 px-[3rem] py-[0.5rem] rounded-md shadow-md md:text-[16px]">{loading? "Loading..." : "SUBMIT"}</button>
          </form>

        </div>
        </div>

        </div>
        </div>
        </>
    )
}
export default Register;