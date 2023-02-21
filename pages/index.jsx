import Landing from "../components/landing-page-components/Landing"
import Champions from "../components/landing-page-components/Champions"
import Perks from "../components/landing-page-components/Perks"
import Solution from "../components/landing-page-components/Solution"
import Faq from "../components/landing-page-components/Faq"
import Bootcamps from "../components/Bootcamps/Bootcamps"
import MiniBootcamps from "../components/Bootcamps/MiniBootcamps"
import Reviews from "../components/Bootcamps/Reviews"
import Fees from "../components/Bootcamps/Fees"
import Backbone from "../components/Bootcamps/Backbone"
import Partners from "../components/Bootcamps/components/Partners"
import Head from 'next/head'
const Home = () => {
  return (
    // <div className="bg-[#1E1E1E]">
    <>
        
        <Landing />
        <MiniBootcamps />
        <Bootcamps />
        <Champions />
        <Perks />
        <Backbone />
        <Reviews />
        <Fees />
        <Partners />
        <Solution />
        <Faq />
    </>
  );
}

export default Home