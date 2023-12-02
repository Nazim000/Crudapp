import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom'
import { inputreducer } from '../createslice/createSlice';

const Navbar = () => {
  const navigate=useNavigate()
  const dispatch=useDispatch()
  const [color,setColor]=useState('')
  const [searchValue,setsearchValue]=useState('')
  const alldata=useSelector((state)=>{
    return state. userdata.user;
})
const toggle=()=>{
  if(color===''){

   setColor('dark-theme')
  }else{
    setColor('')
  }
}
useEffect(()=>{
  document.body.className=color;
},[color])

const find=(e)=>{
navigate('/all')
const {value}=e.target
dispatch(inputreducer(value))
}
  return (
    <>
    <nav className="navbar navbar-expand-lg bg-body-tertiary " >
  <div className="container-fluid ">
    <Link className="navbar-brand" to='/'><img src="notelogo.png" alt=""  height={50}/></Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <Link className="nav-link active" aria-current="page" to='/'>Create</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/all">All({alldata.length})</Link>
        </li>
       
        
      </ul>
      <form className="d-flex  w-50 me-auto p-2" role="search">
        <input className="form-control me-2" type="search" onChange={find} placeholder="Search" aria-label="Search"/>
        {/* <button className="btn btn-outline-success" type="submit">Search</button> */}
      </form>
      <div className="form-check form-switch p-2 mx-2">
  <input className="form-check-input h5 darmmode " onClick={toggle} title={color===''?'Enable Dark mode':'Enable Light mode' }type="checkbox" role="switch" id="flexSwitchCheckDefault"/>
  {/* <label className="form-check-label " htmlFor="flexSwitchCheckDefault">Dark Mode</label> */}
</div>
    </div>
  </div>
</nav>
    </>
  )
}

export default Navbar
