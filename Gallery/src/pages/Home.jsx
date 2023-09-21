import React from 'react'
import { Navbar, Header, IntroBlog, BlogList, Footer } from '../components'

const Home = () => {
  return (
    <div>
      <Navbar />
      <Header />
      {/*<IntroBlog />*/}
      <BlogList />
      <Footer />
    </div>
  )
}

export default Home
