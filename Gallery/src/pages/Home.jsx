import React, { useEffect, useState } from 'react'
import { Navbar, Header, IntroBlog, BlogList, Footer } from '../components'
import GlobalApi from '../Services/GlobalApi'


const Home = () => {

  const [post,setPost]=useState([])
 
  useEffect(()=>{
      getPost();
  },[])
  const getPost=()=>{
      GlobalApi.getPost.then(resp=>{
          const result=resp.data.data.map(item=>({
              id:item.id,
              title:item.attributes.Title,
              desc:item.attributes.BodyofBlog,
              author:item.attributes.Author,
              tag:item.attributes.tag,
             coverImage:item.attributes.blogImage,
              
          }));
          setPost(result);
      })
  }


  return (
    <div>
      <Navbar />
      <Header />
      {post.length>0? <IntroBlog post={post[3]} />:null}
      {/*<BlogList />*/}
      <Footer />
    </div>
  )
}

export default Home
