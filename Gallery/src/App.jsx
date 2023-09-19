import React from 'react'
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import { Home } from './pages'



const App = () => {
  return (
    <div >
     <Router>
      <Routes>
        <Route path='/' element={<Home />} />
        {/*</Routes><Route path='' element ={</>} />*/}
      </Routes>
     </Router>
    </div>
  )
}

export default App
