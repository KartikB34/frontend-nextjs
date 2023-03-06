import React from "react";

const AboutUS = () => {
  return (
    <div className="flex bg-gray-900 items-center justify-center h-[91vh]">
      <div className="flex flex-col items-center justify-cente max-w-7xl m-auto">
        <div className="text-2xl font-bold tracking-wider underline underline-offset-4">
          About Us
        </div>
        <div className="mt-5 text-lg text-center px-20">
          <p>
          Luster upskills web3 enthusiasts to web3 developers by conducting cohort-based live learning bootcamps on Ethereum, Solana, Hyperledger and Smart Contract auditing, etc.
          </p>
          <p>
            If you have any query regrading Site, Advertisement and any other
            issue, please feel free to contact at{" "}
            <b className="tracking-wider text-cyan-600">support@cryptonaukri.com</b>
          </p>

          <p>
          Address - Ramnagar Bondegaon, Bramhapuri, Tah. Bramhapuri - 441206
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutUS;