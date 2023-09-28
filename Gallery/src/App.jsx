import React from 'react'
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import { Home, Category } from './pages'



const App = () => {
  return (
    <div >
     <Router>
      <Routes>
        <Route exact path='/' element={<Home />} />
        <Route path='/category/:id' element ={<Category />} />
      </Routes>
     </Router>
    </div>
  )
}

export default App
