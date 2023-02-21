import React, { useState, useEffect, useRef } from 'react';
import Axios from 'axios';
import { useCookies } from 'react-cookie';
import Link from 'next/link';
import { useRouter } from "next/router";
import {FcGoogle} from "react-icons/fc"
const INITIAL_COUNT = 600;

const Signup = () => {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [location, setLocation] = useState('');
  const [user, setUser] = useState('')
  const [couponCode, setCouponCode] = useState('');
  const [organization, setOrganization] = useState('')
  const [cookies, setCookie, removeCookie] = useCookies(['token']);

  const [step, setStep] = useState(1);

  const [otp, setOtp] = useState('');
  // otp timer setup
  const [status, setStatus] = useState('stop')
  const [secondsRemaining, setSecondsRemaining] = useState(INITIAL_COUNT);
  const secondsToDisplay = secondsRemaining % 60;
  const minutesRemaining = (secondsRemaining - secondsToDisplay) / 60;
  const minutesToDisplay = minutesRemaining % 60;

  useInterval(
    () => {
      if (secondsRemaining > 0) {
        setSecondsRemaining(secondsRemaining - 1);
      } else {
        setStatus('stop');
      }
    },
    status === 'start' ? 1000 : null
    // passing null stops the interval
  );

  const [signUpError, setSignUpError] = useState('');
  const [loading, setLoading] = useState(false);
  const router = useRouter()
  var API = process.env.REACT_APP_API_ENDPOINT;


  const handleSendOtp = async (event) => {
    event.preventDefault();
    setLoading(true);
    setSignUpError('');
    setOtp('');
    if (email && password && firstName && lastName && phoneNumber && location) {
      try {
        const response = await fetch(`https://api.luster.network.com/api/v1/user/otp?email=${email}`, {
          method: 'GET',
          mode: 'cors',
        })
        const data = await response.json()
        console.log(data);
        if (data.code === 'OTP_SENT') {
          setStep(2);
          setStatus('start');
          setLoading(false);
          return;
        }
        if (data.userAdded === false) {
          if (data.code === 'DUPLICATE') {
            setSignUpError('You are already registered with us.');
            setLoading(false);
            return;
          }
        }
        if (data.code === 'OTP_FAILED') {
          setSignUpError('Something went wrong !!!');
          setLoading(false);
        }
          
      } catch (error) {
        console.log(error);
        setLoading(false);
      }
    } else {
      setSignUpError('Fill up all values.');
      setLoading(false);
    }
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    //console.log(email.split('@')[1]);
    //console.log(process.env.REACT_APP_TEST_API_ENDPOINT);

    if (
      email &&
      password &&
      firstName &&
      lastName &&
      phoneNumber &&
      location &&
      otp
    ) {
      setLoading(true);
      setSignUpError();
      try {
        const response = await fetch(`https://api.luster.network.com/api/v1/user/signup`, {
          method: 'POST',
          mode : "cors",
          headers: {
            'Content-Type': 'application/json',
            'Access-Control-Allow-Origin' : '*',
            Accept: 'application/json',
          },
          body: JSON.stringify({
            firstName: firstName,
            lastName: lastName,
            email: email,
            password: password,
            location: location,
            phoneNumber: phoneNumber,
            otp: Number(otp),
          }),
        });
        const data = await response.json();
        if (data.userAdded === false) {
          if (data.code === 'DUPLICATE') {
            setSignUpError('You are already registered with us.');
          }
          if (data.code === 'WRONG_OTP') {
            setOtp('');
            setSignUpError('Wrong OTP');
          }
          setLoading(false);
          return;
        }
        if (data.userAdded === true) {
          try {
            const response = await Axios.post(`https://api.luster.network.com/api/v1/user/login`, {
              email,
              password,
            });
            const data = response.data;

            if (data.userLoggedIn) {
              // console.log(data);
              // console.log(response.headers.authorization)
              // setLoginError(data.message);
              setLoading(false);
              const timestamp = new Date().getTime();
              const expire = timestamp + 60 * 60 * 24 * 1000 * 2;
              const expireDate = new Date(expire);
              setCookie('token', response.headers.authorization, {
                expires: expireDate,
                path: '/',
                domain: '.luster.network',
              });
              // below codes to be removed once cookies is applied accross the site
              localStorage.setItem('token', response.headers.authorization);
              localStorage.setItem('cUser', 'DEVELOPER');
              localStorage.setItem('login', true);
            }
            
            router.push('/')
          } catch (error) {
            setSignUpError('Something went wrong. Try logging in')
            console.log(error)
            setLoading(false);
          }
          setLoading(false);
          return;
        }

        setLoading(false);
        //console.log(data);
      } catch (error) {
        console.log(error)
        setSignUpError('Something went wrong!');
        setLoading(false);
        //console.log(error)
      }
    }
  };

  const googleSignup = async (e) => {
    //setLoading(true);
    e.preventDefault()
    const response = await Axios.get("https://api.luster.network.com/api/v1/user/googleSignup?client=localhost");
    console.log(response);
    window.location.replace(response.data.reDirectURL)
  }

  return (
   <div className='min-h-[100vh] flex bg-[#0B0D21]'>
      
    {
      (step === 1) &&
      <form className='w-[85%] md:w-[40%] my-auto mx-auto bg-black border-2 flex flex-col  justify-center border-neutral-50 rounded-3xl gap-3 p-5'>
          <h1 className="text-3xl text-center mt-3 text-blue-500 font-bold font-quicksand">
            SIGN UP
          </h1>
          {signUpError ? (
                <div className='mb-4 bg-red-400 text-white px-2 py-2 rounded text-xs'>
                  {signUpError}
                </div>
              ) : (
                <></>
              )}

              <div className='flex flex-col md:flex-row items-center gap-3 justify-between rounded shadow-sm'>
                <input
                  value={firstName}
                  onChange={(e) => {
                    setFirstName(e.target.value);
                  }}
                  className='p-3 w-full md:basis-1/2 text-neutral-50 bg-neutral-900 border-2 border-neutral-50 rounded-3xl'
                  type='text'
                  placeholder='First Name '
                  autoComplete='do-not-autofill'
                />
                <input
                  value={lastName}
                  onChange={(e) => {
                    setLastName(e.target.value);
                  }}
                  className='p-3 w-full md:basis-1/2 text-neutral-50 bg-neutral-900 border-2 border-neutral-50 rounded-3xl'
                  type='text'
                  placeholder='Last Name '
                  autoComplete='do-not-autofill'
                />
              </div>

              <div className='flex items-center flex-col md:flex-row gap-3 rounded shadow-sm'>
                <input
                  value={email}
                  onChange={(e) => {
                    setEmail(e.target.value);
                  }}
                  className='p-3 w-full md:basis-1/2 text-neutral-50 bg-neutral-900 border-2 border-neutral-50 rounded-3xl'
                  type='text'
                  placeholder='Email '
                  autoComplete='do-not-autofill'
                />
                <input
                  value={phoneNumber}
                  onChange={(e) => {
                    setPhoneNumber(e.target.value);
                  }}
                  className='p-3 w-full md:basis-1/2 text-neutral-50 bg-neutral-900 border-2 border-neutral-50 rounded-3xl'
                  type='text'
                  placeholder='Mobile Number'
                  autoComplete='do-not-autofill'
                />
              </div>

              <div className='flex items-center w-[100%] rounded shadow-sm mx-auto'>
                <input
                  value={location}
                  onChange={(e) => {
                    setLocation(e.target.value);
                  }}
                  className='p-3 w-[100%] text-neutral-50 bg-neutral-900 border-2 border-neutral-50 rounded-3xl'
                  type='text'
                  placeholder='City '
                  autoComplete='do-not-autofill'
                />
              </div>

              <div className=' flex w-[100%] items-center rounded shadow-sm'>
                <input
                  value={password}
                  onChange={(e) => {
                    setPassword(e.target.value);
                  }}
                  className='p-3 w-[100%] text-neutral-50 bg-neutral-900 border-2 border-neutral-50 rounded-3xl'
                  type='password'
                  placeholder='Password'
                  autoComplete='do-not-autofill'
                />
              </div>
              <div className='mx-auto text-neutral-50 text-lg flex gap-3 items-center' onChange={(e) => setUser(e.target.value)}>
                <input type="radio" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" value="developer" name="gender" /> developer
                <input type="radio" className='w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600' value="business" name="gender" /> business
              </div>
              <div className='flex flex-col gap-4'>
                {
                  (user === 'business') &&
                  <>
                  <input
                  value={couponCode}
                  onChange={(e) => {
                    setCouponCode(e.target.value);
                  }}
                  className='p-3 w-[100%] text-neutral-50 bg-neutral-900 border-2 border-neutral-50 rounded-3xl'
                  type='text'
                  placeholder='organization name'
                  autoComplete='do-not-autofill'
                  />
                  <input
                  value={couponCode}
                  onChange={(e) => {
                    setCouponCode(e.target.value);
                  }}
                  className='p-3 w-[100%] text-neutral-50 bg-neutral-900 border-2 border-neutral-50 rounded-3xl'
                  type='text'
                  placeholder='coupon code'
                  autoComplete='do-not-autofill'
                  />
                  
                  </>
                }
              </div>
              {loading ? (
                <button
                  type='button'
                  className='p-3 text-neutral-50 bg-blue-500 bg-gradient-to-b from-[#0047F5] to-[#006DF6] rounded-3xl font-bold w-1/2 mx-auto'
                  disabled
                >
                  Loading...
                </button>
              ) : (
                <button
                  onClick={handleSendOtp}
                  className='p-3 text-neutral-50 bg-blue-500 bg-gradient-to-b from-[#0047F5] to-[#006DF6] rounded-3xl font-bold w-1/2 mx-auto'
                >
                  Sign Up
                </button>
              )}
              <button
                  onClick={googleSignup}
                  className='p-3 text-neutral-50 bg-blue-500 bg-gradient-to-b from-[#0047F5] to-[#006DF6] rounded-3xl font-bold w-1/2 mx-auto flex items-center justify-center'
                >
                  <FcGoogle  className='mx-2'/> continue with google
                </button>
              <div className='text-center'>
              <Link href='/auth/login' className='text-blue-400 text-md font-semibold'>
                Exsisting User ? Sign-In
              </Link>
      </div>
      </form>
    }
    {
      (step === 2) &&
      <form className='w-[75%] md:w-[40%] my-auto mx-auto bg-black border-2 flex flex-col  justify-center border-neutral-50 rounded-3xl gap-3 p-5'>
            {signUpError ? (
                  <div className='mb-4 bg-red-400 text-white px-2 py-2 rounded text-xs'>
                    {signUpError}
                  </div>
                ) : (
                  <></>
                )}
                <div className='ring-2 ring-blue-800 bg-gray-800 rounded p-2 text-blue-600 font-semibold'>
                  An OTP is sent to <span className='text-white'>{email}</span>,
                  to verify your email address
                </div>
                <br />
                <p className='text-blue-400 '>Verify OTP</p>
                <div className=' flex items-center rounded shadow-sm mb-4'>
                  <input
                    value={otp}
                    onChange={(e) => {
                      setOtp(e.target.value);
                    }}
                    className='p-3 w-[100%] text-neutral-50 bg-neutral-900 border-2 border-neutral-50 rounded-3xl'
                    type='text'
                    placeholder='OTP'
                    autoComplete='do-not-autofill'
                  />
                </div>
                {loading ? (
                  <>
                    <button
                      type='button'
                      className='p-3 text-neutral-50 bg-blue-500 bg-gradient-to-b from-[#0047F5] to-[#006DF6] rounded-3xl font-bold w-1/2 mx-auto'
                      disabled
                    >
                      Loading...
                    </button>
                  </>
                ) : (
                  <>
                    <button
                      onClick={handleSubmit}
                      className='p-3 text-neutral-50 bg-blue-500 bg-gradient-to-b from-[#0047F5] to-[#006DF6] rounded-3xl font-bold w-1/2 mx-auto'
                    >
                      Verify Email
                    </button>
                    <br />
                    <div className='flex items-center justify-center gap-2'>
                      <div className={`${false? 'text-red-700' : 'text-green-600'} text-xl font-bold`}>{twoDigits(minutesToDisplay)}:{twoDigits(secondsToDisplay)}</div>
                      {
                        status === 'stop' ?
                        <button
                          onClick={handleSendOtp}
                          className='text-blue-600 block text-sm font-bold rounded shadow-md px-2.5 py-2'
                        >
                          Re-Send OTP
                        </button> : null
                      }
                    </div>
                  </>
                )}

      </form>
    }
   </div>
  );
};

export default Signup;

// helping functions
function useInterval(callback, delay) {
  const savedCallback = useRef();

  // Remember the latest callback.
  useEffect(() => {
    savedCallback.current = callback;
  }, [callback]);

  // Set up the interval.
  useEffect(() => {
    function tick() {
      savedCallback.current();
    }
    if (delay !== null) {
      let id = setInterval(tick, delay);
      return () => clearInterval(id);
    }
  }, [delay]);
}

const twoDigits = (num) => String(num).padStart(2, "0");