import Head from 'next/head'
import Navbar from './layout-components/Navbar'
import Footer from './layout-components/Footer'
import { ToastContainer} from "react-toastify";
import Script from 'next/script'

const Layout = ({children}) => {
    return (
    <>
      <Head>
        {/* <title>Shopify - The ultimate app for inventory management</title> */}
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta
          name="description"
          content="Luster is upskilling web3 enthusiasts to web3 developers and providing the proof-of-experience."
        />
        <meta
          content="ethereum workshops"
        />
      </Head>
      <div className='bg-gradient-to-br from-indigo-900 via-gray-900 to-slate-900 text-white overflow-x-hidden'>
        <Navbar />
          {children}
        <Footer />
        <ToastContainer />
      </div>
    </>
     );
}
 
export default Layout;