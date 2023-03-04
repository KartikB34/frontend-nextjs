import React from "react";

const Terms = () => {
  return (
    <div className="bg-gray-800 ">
      <div className="flex flex-col items-center h-screen justify-center bg-gray-800 text-white p-4 max-w-7xl m-auto">
        <p className="mt-8 text-2xl font-bold tracking-wider underline underline-offset-4">
          Terms &amp; Conditions
        </p>
        <div className="mt-5 text-lg text-center px-20">
          <p>
            At CryptoNaukri, accessible from{" "}
            <a href="http://www.cryptonaukri.com/" className="text-cyan-600">
              http://www.cryptonaukri.com/
            </a>
            , one of our main priorities is the privacy of our visitors. This
            Privacy Policy document contains types of information that is
            collected and recorded by CryptoNaukri and how we use it.
          </p>
          <p>
            If you have additional questions or require more information about
            our Privacy Policy, do not hesitate to Contact through email at{" "}
            <b className="tracking-wider text-cyan-600">support@cryptonaukri.com</b>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Terms;

