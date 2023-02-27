import { createClient } from "next-sanity";
import PortableText from "react-portable-text"

const Post = ({blog}) => {
  console.log(blog)
  return (
    <main className='min-h-screen pt-[6rem] w-[75%] mx-auto my-[1.5rem] gap-6'>
       <h1 className="text-3xl md:text-4xl my-[1rem] font-semibold">{blog.Title}</h1>
       <PortableText
      // Pass in block content straight from Sanity.io
      content={blog.content}
      // Optionally override marks, decorators, blocks, etc. in a flat
      // structure without doing any gymnastics
      serializers={{
        h1: (props) => <h1 style={{ color: "red" }} {...props} />,
        normal: (props) => <p className="my-4 md:text-xl text-lg" {...props} />,
        link: (props) => <a className="my-4 md:text-xl text-lg underline" {...props} />,
        li: ({ children }) => <li className="text-lg md:text-xl list-disc list-inside">{children}</li>,
      }}
    />

    </main>
  )
}



export async function getServerSideProps(context)  {
  const { slug } = context.query
  const client = createClient({
    projectId: 'xcdtdz1d',
    dataset: 'production',
    apiVersion: "2022-03-25",
    useCdn: false
  })

  const blogQuery = `*[_type == "blog" && slug.current == '${slug}'][0]`;
  const blog = await client.fetch(blogQuery)
  const authorId = blog.author._ref
  return {
    props: {
      blog
    }
  };
}

export default Post