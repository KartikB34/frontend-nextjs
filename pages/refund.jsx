import React from "react";

const Refund = () => {
  return (
    <div className="bg-gray-800 ">
      <div className="flex flex-col items-center h-screen justify-center bg-gray-800 text-white p-4 max-w-7xl m-auto">
        <p className="mt-8 text-2xl font-bold tracking-wider underline underline-offset-4">
          Refund
        </p>
        <div className="mt-5 text-lg flex flex-col gap-5 px-20">
          <p>
          Luster is a proof-of-experience platform filling the gap between demand and supply of web3 developers in a decentralised manner.
          </p>

          <p>
          We conduct a few certification courses on web3 technologies to upskill web3 enthusiasts to web3 developers.
          </p>
          <p>
          We have a few cancellation and refund rules as follows:
            <ul className="list-disc list-inside">
                <li>Course fee to be paid while registering for the course</li>
                <li>Course fee can be refunded before the 1 week of bootcamp starts.</li>
                <li>Paid fees will be refunded after cancellation</li>
            </ul>
          </p>
          <p>
          Address - Ramnagar Bondegaon, Bramhapuri, Tah. Bramhapuri - 441206
          </p>
        </div>
      </div>
    </div>
  );
};

export default Refund;