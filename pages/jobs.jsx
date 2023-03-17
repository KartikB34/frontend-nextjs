import React, { useState, useEffect } from 'react'
import JobCard from '../components/Job-Card/JobCard';
import JobCardLoading from '../components/Job-Card/JobCardLoading';
import axios from 'axios';



const JobsPage = ({posts}) => {
    
    const [dataArr, setDataArr] = useState(posts.data);
    const [loading, setLoading] = useState(false);

    // console.log("1234")

    // useEffect(()=>async ()=>{
    //     setLoading(true);
    //     const response = await Axios.get(`${process.env.NEXT_PUBLIC_ENDPOINT}/api/v1/jobs/findJob`)
    //     .then((res)=>{
    //         const resp = res.data;
    //         console.log(resp.data);
    //         setDataArr(resp.data);
    //         setLoading(false);            
    //         console.log("hello");
    //     })
    //     .catch((err)=>{
    //         console.log(err)
    //         setLoading(false);
    //     });
    //     console.log("qwert")
    // } ,[]);

    return (

        <div className="pt-24 min-h-[90vh]">
            <div className="text-white p-4 max-w-7xl m-auto">
                <div className="text-white text-lg flex justify-center items-center  p-2 w-fit border rounded-md">Discover Jobs</div>
                <div className="mt-3 flex flex-wrap gap-3">
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
                                dataArr.slice(0).reverse().map((job) => {
                                    return (
                                        <JobCard 
                                            position={job.jobTitle} 
                                            cmp={job.postedByDetails.companyName} 
                                            opn={job.openings}
                                            exp={job.experience}
                                            description={job.jobDescription}
                                            perks={job.perks.split}
                                            key={job._id}
                                            srId={job._id}
                                            type={"job"}
                                        />
                                    )
                                })
                            }
                        </>
                    }
                </div>
            </div>
        </div>
    )
}

export async function getStaticProps() {
    // Call an external API endpoint to get posts.
    // You can use any data fetching library
    const res = await fetch(`${process.env.NEXT_PUBLIC_ENDPOINT}/api/v1/jobs/findJob`)
    const posts = await res.json()
  
    // By returning { props: { posts } }, the Blog component
    // will receive `posts` as a prop at build time
    return {
      props: {
        posts,
      },
    }
}

export default JobsPage;


