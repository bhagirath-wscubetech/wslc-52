import React from 'react'
import { useParams } from "react-router-dom"
import Container from './Components/Container'
import Blogs from './Data/blog'
export default function BlogPage() {
  const params = useParams()
  const slug = params.slug
  const BlogData = Blogs.filter(
    (Blog) => {
      return Blog.slug === slug
    }
  )
  console.log(BlogData[0]);
  return (
    <Container>
      <div className="col-6">
        <img src={BlogData[0].image} alt="" className='rounded' style={{
          width: "100%",
          height: "600px"
        }} />
      </div>
      <div className="col-6">
        <div className="row">
          <h2 className='col-12'>
            {BlogData[0].title}
          </h2>
          <p className='col-12' style={{
            textAlign: "justify"
          }}>
            {BlogData[0].desc}
          </p>
        </div>
      </div>
    </Container>
  )
}
