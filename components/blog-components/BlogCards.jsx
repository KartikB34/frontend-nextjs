import Link from 'next/link'
import {useState} from 'react'

const BlogCards = ({title, id, meta, slug}) => {
  return (
    <div className='p-6 md:p-8  border-2 rounded-lg shadow-md hover:scale-105 transition-all max-h-[60%]' key={id}>
      <Link href={'/blogs/' + slug}><h1 className='text-xl md:text-3xl font-semibold hover:underline transition-all'>{title}</h1></Link>
      <h2 className='text-lg md:text-xl my-3'>{meta}</h2>
    </div>
  )
}

export default BlogCards