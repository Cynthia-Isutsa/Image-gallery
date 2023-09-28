import React from 'react'
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import { Home, Category } from './pages'
import BlogDetails from './pages/BlogDetails'



const App = () => {
  return (
    <div >
     <Router>
      <Routes>
        <Route exact path='/' element={<Home />} />
        <Route path='/details/:id' element ={<BlogDetails />} />
      </Routes>
     </Router>
    </div>
  )
}

export default App
