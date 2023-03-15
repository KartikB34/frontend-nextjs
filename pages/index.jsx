import Landing from "../components/landing-page-components/Landing"
import Champions from "../components/landing-page-components/Champions"
import Perks from "../components/landing-page-components/Perks"
import Solution from "../components/landing-page-components/Solution"
import Faq from "../components/landing-page-components/Faq"
import Bootcamps from "../components/Bootcamps/Bootcamps"
import Reviews from "../components/Bootcamps/Reviews"
import Backbone from "../components/Bootcamps/Backbone"
import Partners from "../components/Bootcamps/components/Partners"
import Head from 'next/head'
const Home = () => {
  return (
    // <div className="bg-[#1E1E1E]">
    <>
        
        <Landing />
        <Bootcamps />
        <Champions />
        <Perks />
        <Backbone />
        <Reviews />
        <Partners />
        <Solution />
        <Faq />
    </>
  );
}

export default Home