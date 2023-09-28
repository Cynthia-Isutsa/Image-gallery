import React from 'react'
import GlobalApi from '../Services/GlobalApi'

const BlogList = () => {

  const {loading, error, data} = GlobalApi('http://localhost:1337/api/blogs')

  if (loading) return <p className='font-semibold text-sm text-gray-600'>Loading...</p>
  if (error) return <p className='font-semibold text-sm text-gray-600'>Error: The document is not available</p>

  return (
    <div>
      {data.map((blog) => {
        <div key= {review.id}>
          <h2>{blog.title}</h2>
        </div>
      })}
    </div>
  )
}

export default BlogList
