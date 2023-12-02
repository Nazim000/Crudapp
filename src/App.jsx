

import './App.css'
import All from './components/All'
import Create from './components/Create'
import Navbar from './components/Navbar'
import Edit from './components/Edit'

import { BrowserRouter, Routes, Route } from "react-router-dom";
function App() {
  

  return (
    <>
    <BrowserRouter>
      <Navbar/>
      <Routes>
        
         
          <Route path="/" element={<Create />} />
          <Route path="/all" element={<All/>} />
          <Route path="/edit/:id" element={<Edit/>} />
          {/* <Route path="*" element={<NoPage />} /> */}
        
      </Routes>
      {/* <Create/> */}
      {/* <All/> */}
    </BrowserRouter>
    </>
  )
}

export default App
