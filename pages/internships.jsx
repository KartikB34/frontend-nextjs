import React, { useEffect, useState } from 'react'
import InternshipCard from "../components/Internship-card/Internship-Card"
import JobCardLoading from '../components/Job-Card/JobCardLoading';
import Axios from 'axios';

export async function getStaticProps() {
    // Call an external API endpoint to get posts.
    // You can use any data fetching library
    const res = await fetch(`${process.env.NEXT_PUBLIC_ENDPOINT}/api/v1/internship/findInternship`)
    const posts = await res.json()
  
    // By returning { props: { posts } }, the Blog component
    // will receive `posts` as a prop at build time
    return {
      props: {
      },
    }
}

const InternshipPage = () => {
    // const [dataArr, setDataArr] = useState(posts.data);
    const [loading, setLoading] = useState(false);
    // const [datarr, setDataArr] = React.useState([]);


    // useEffect(()=>async ()=>{
    //     setLoading(true);
    //     const response = await Axios.get(`${process.env.NEXT_PUBLIC_ENDPOINT}/api/v1/internship/findInternship`)
    //     .then((res)=>{
    //         //console.log(res);
    //         const resp = res.data;
    //         //console.log(resp.data);
    //         setDataArr(resp.data);
    //         //console.log(dataArr);
    //         setLoading(false);
            
    //     })
    //     .catch((err)=>{
    //         setLoading(false);
    //     });
    // } ,[]);
    return (
        <div className="pt-24 min-h-[90vh]">
        <div className="text-white p-4 max-w-7xl m-auto">
            <div className="text-white text-lg bg-gray-800 p-2 w-fit border rounded-md">Discover Internships</div>
            {/* <div className="mt-3 flex flex-wrap gap-3">
                {
                    loading === true ?
                    <>
                        <JobCardLoading />
                        <JobCardLoading />
                        <JobCardLoading />
                        <JobCardLoading />
                        <JobCardLoading />
                    </> :
                    <>
                        {
                            dataArr.slice(0).reverse().map((internship) => {
                                return (
                                    <InternshipCard 
                                        position={internship.internshipTitle} 
                                        cmp={internship.postedByDetails.companyName} 
                                        opn={internship.openings}
                                        responsibilities={internship.responsibilities}
                                        perks={internship.perks.split}
                                        key={internship._id}
                                        srId={internship._id}
                                        type={"internship"}
                                        duration={internship.duration}
                                    />
                                )
                            })
                        }
                    </>
                }
            </div> */}
        </div>
    </div>
    )
}
export default InternshipPage;


// ** old material ui

// const useStyles = makeStyles((theme) => ({
//     body:{
//         marginTop:'70px'
//     }
// }));

// const classes = useStyles();

{/* <>
<div className={classes.body} >
    <Container>
        <Box sx={{
            paddingTop: '20px'
        }}>
            <h1 style={{ margin: '10px 0' }}>Discover Internships</h1>
            {loading?
                <>
                    <JobCardLoading />
                    <JobCardLoading />
                    <JobCardLoading />
                </>:<>
                    {
                        dataArr.slice(0).reverse().map((internship) => {
                            //console.log(internship);

                            return( 
                                <InternshipCard 
                                    position={internship.internshipTitle} 
                                    cmp={internship.postedByDetails.companyName} 
                                    opn={internship.openings}
                                    responsibilities={internship.responsibilities}
                                    perks={internship.perks.split}
                                    key={internship._id}
                                    srId={internship._id}
                                    type={"internship"}
                                    duration={internship.duration}
                                />);
                        })
                    } 
            </>}
        </Box>
    </Container>
</div>
</> */}