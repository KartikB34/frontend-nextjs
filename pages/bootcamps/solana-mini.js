import React from 'react'
import AdditionalInfo from '../../components/Bootcamps/components/AdditionalInfo'
import Graph from '../../components/Bootcamps/components/Graph'
import Landing from '../../components/Bootcamps/components/Landing'
import Reviews from '../../components/Bootcamps/Reviews'
import Backbone from '../../components/Bootcamps/Backbone'
import Faq from "../../components/landing-page-components/Faq"
import Champions from "../../components/landing-page-components/Champions"
import Fees from "../../components/Bootcamps/Fees"
import Partners from "../../components/Bootcamps/components/Partners"

const MiniSolana = () => {
  return (
    <div className='px-2 md:px-20'>
      <Landing />
      <Graph />
      <Champions />
      <AdditionalInfo />
      <Backbone/>
      <Reviews />
      <Fees />
      <Partners />
      <Faq />
    </div>
  )
}

export default MiniSolana