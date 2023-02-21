import { useRouter } from 'next/router'
import React from 'react'

const Fees = () => {

    const router = useRouter()

  return (
    <>
    <div className='flex flex-col py-12 md:mt-12 text-center min-h-[94vh] justify-center items-center'>
        <p className='text-7xl'>Fees Structure</p>

        <div className="flex flex-wrap justify-between mt-16 items-center px-[10%]">
            <div className="flex flex-col items-center">

                <div className='flex flex-col  md:flex-row my-20 items-center justify-center'>

                    <div className='items-center shadow-md shadow-white rounded-[15px] py-8 pt-8 px-8'>
                        <div className='text-3xl md:text-5xl font-bold mb-1'>{router.pathname==="/bootcamps/solana-mini"?"Free":"₹30,000"}</div>
                        <div className='h-[2px] m-auto bg-blue-300 w-[13rem]'></div>
                        <p className='text-[16px] md:text-[24px] mb-2 mt-8'><b></b>For Bootcamp</p>
                        {/* <p className='text-[16px] md:text-[24px] my-2'><b>Upfront fee:</b> ₹40,000</p> */}
                    </div>


                    <p className='mx-12 text-2xl mt-12 md:mt-6 font-semibold text-gray-300 border-b-2'>AND</p>


                    <div className='items-center shadow-md shadow-white rounded-[15px] py-8 pt-8 px-8'>
                    <div className='text-2xl md:text-4xl font-bold mb-1'>{router.pathname==="/bootcamps/solana-mini"?"Get $20":"Get 50% Cashback !"}</div>
                    <div className='h-[2.6px] m-auto bg-blue-300 w-[17rem]'></div>
                    <p className='text-[16px] md:text-[24px] mb-2 mt-8'>{router.pathname==="/bootcamps/solana-mini"?"On completing bootcamp":"After getting placed"}</p>
                    {/* <p className='text-[16px] md:text-[24px] my-2'>₹<b>90K : </b>Pay after placement</p> */}
                    </div>
                </div>

                {
                    !(router.pathname === "/bootcamps/solana-mini")&&
                    <p className='mt-8 text-4xl font-semibold'>EMIs option available!</p>
                }
            </div>

            {/* <div className="mt-8 md:mt-0 md:ml-20">
                <img src={manfee} className="h-[15rem] ml-20 md:ml-0" alt='fees' />
            </div> */}
        </div>
    </div>

    </>
  )
}

export default Fees