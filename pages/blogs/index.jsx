import { createClient } from "next-sanity";
import { BlogCards } from '../../components/blog-components'
import { useEffect, useState } from "react";
import PortableText from "react-portable-text"

const Blogs = ({blogs}) => {
  console.log(blogs)  
  return (
    <main className='min-h-screen pt-[6rem] w-[70%] mx-auto my-[1.5rem] justify-items-center grid grid-cols-1 md:grid-cols-[1fr_1fr] gap-6'>
        {
          blogs.map((blog)=>{
            return(
              <BlogCards title={blog.Title} id={blog._id} meta={blog.meta} slug={blog.slug.current}/>
            )
          })
        }
    </main>
  )
}


export const getStaticProps = async () => {
  const client = createClient({
    projectId: 'xcdtdz1d',
    dataset: 'production',
    apiVersion: "2022-03-25",
    useCdn: false
  })

  const query = '*[_type == "blog"]'
  const blogs = await client.fetch(query)
  return {
    props: {
      blogs
    }
  };
}

export default Blogs