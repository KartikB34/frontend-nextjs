import React, { useState, useEffect } from "react";
import axios from "axios";
import {CgProfile} from "react-icons/cg"
import {MdOutlineSpaceDashboard, MdLogout, MdBusiness} from 'react-icons/md';
import {AiFillCaretDown, AiOutlineUser, AiFillHome} from 'react-icons/ai'
import {useRouter} from "next/router"
import Link from 'next/link'
import Image from "next/image";
import { useCookies } from 'react-cookie';

const Header = () => {

  const router = useRouter();
  const [color, setColor] = useState(false);
  const [cookies, setCookie, removeCookie] = useCookies(['token']);
  const [loginStatus, setLoginStatus] = useState(false)

  const API = process.env.REACT_APP_API_ENDPOINT;

  useEffect(() => {
    if (typeof window !== 'undefined') {
      if(cookies.token){
        setLoginStatus(true)
      }
    }
  },[cookies.token])


  const [active, setActive] = useState(false);
  const [loginActive, setloginActive] = useState(false);
  const [signupActive, setSignupActive] = useState(false);
  const [ open, setOpen] = useState(false);
  const [ openLogin, setOpenLogin] = useState(false);
  const [ openSignup, setOpenSignup] = useState(false);
  //handleUserSignUp and handleMouseOverSignup are functions for the laptop view two types of signups

  const gotohome =()=>{
    router.push("/");
  }
  const toggle = ()=>{
    if(loginActive) setloginActive(false)
    if(signupActive) setSignupActive(false)
    setActive(!active)
  }

  const logout = () => {
   removeCookie('token')
   setLoginStatus(false)
   router.push("/")
  }
  return(
    <nav className='w-[100%] top-0 shadow-md bg-neutral-900 bg-opacity-70 backdrop-blur-xl fixed text-[20px]'>
      <div className="py-5 sm:px-5 flex flex-row items-center justify-between px-3 md:px-24 m-auto">
          <div onClick={gotohome} className="cursor-pointer flex items-center gap-2">
            <Image src='/assets/logo.png' height={50} width={50}/> <h1 className="font-semibold italic text-2xl hidden md:block">LUSTER</h1>
          </div>
          <div>
            <div className={`md:none ${active? 'show':'hide'} `}>
                <div className="absolute top-20 left-0 right-0 w-full px-2 rounded-b-md">
                    <ul className="bg-gray-900 flex flex-col items-center text-lg rounded-md transition-all">
                        <li className="p-1 cursor-pointer "><Link href="/bootcamps/ethereum" className="">Bootcamp</Link></li>
                        {/* <li className="p-1 cursor-pointer "><Link href="/jobs" className="">Jobs</Link></li>
                        <li className="p-1 cursor-pointer "><Link href="/internships" className="">Internships</Link></li> */}
                        <li className="p-1 cursor-pointer "><Link href="/aboutus" className="">About us</Link></li>
                    </ul>
                </div>
            </div>
            <div className="hidden md:block" >
                  <ul className="flex gap-8">
                    <li className="cursor-pointer  hover:underline transition-all hover:underline-offset-4">
                      <Link href="/bootcamps/ethereum" className="">Bootcamp</Link>
                    </li>
                    {/* <li className="cursor-pointer  hover:underline hover:underline-offset-4">
                      <a href="/jobs" className="">Jobs</a>
                    </li>

                    <li className="cursor-pointer  hover:underline hover:underline-offset-4">
                      <a href="/internships" className="">Internships</a>
                    </li> */}

                    <li className="cursor-pointer  hover:underline transition-all hover:underline-offset-4">
                      <a href="/aboutus" className="">About us</a>
                    </li>

                  </ul>
            </div>
          </div>
            <div className="flex items-center gap-2">
              {
                // need to access from cookies when cookies applied over whole site
                (loginStatus) ?
                <div className="flex relative items-center gap-2">
                  <div  className='cursor-pointer '>
                    <div onClick={()=> {setOpen(!open)}} className="flex items-center relative">
                      <CgProfile size={30}/>
                      <AiFillCaretDown size={13}  /> 
                    </div> 
                  </div> 

                  {/* Dropdown Content */}
                              
                  { open &&
                    <div className="bg-gray-900 text-sm md:text-lg absolute right-4 shadow-lg top-8 w-[153px] rounded-lg py-1">
                      <div onClick={()=>{router.push("/"); setOpen(!open)}} className="flex flex-row px-3 py-1 hover:bg-indigo-800 hover:cursor-pointer"><AiFillHome className="h-6 mr-2" /> Home page</div>
                      <div onClick={()=>{router.push("/dashboard"); setOpen(!open)}} className="flex flex-row px-3 py-1 hover:bg-indigo-800 hover:cursor-pointer"><MdOutlineSpaceDashboard className="h-6 mr-2" /> Dashboard</div>
                      <div onClick={()=>{logout(); setOpen(!open)}} className="flex flex-row px-3 py-1 hover:bg-indigo-800 hover:cursor-pointer"><MdLogout className="h-6 mr-2" /> Sign out</div>
                    </div>
                  }
                            

                  {/* <div onClick={()=>logout()} className="cursor-pointer ">Sign out</div> */}
                  </div>
                  :
                  <div className="flex items-center gap-3">
                        <div  className='cursor-pointer '>
                        <button>
                          <Link href="/auth/login">
                          <div className="flex items-center">
                            Login
                          </div>
                          </Link>
                        </button>
                        </div> 

                        <div  className='cursor-pointer'>
                        <Link href="/auth/signup">
                          <div className="flex items-center border border-white px-2 py-1 rounded-md hover:bg-white hover:text-black">
                            Signup
                          </div>
                          </Link> 
                        </div>
                  </div>
              }
                <div onClick={toggle} className="w-[2rem] ml-2 md:hidden cursor-pointer">
                  <div className="w-full h-0.5 bg-gray-100 line rounded-md"></div>
                  <div className="w-full h-0.5 bg-gray-100 my-1.5 rounded-md"></div>
                  <div className="w-full h-0.5 bg-gray-100 rounded-md"></div>
                </div>
          </div>
      </div>
    </nav>
  )
};
export default Header;
