import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { MdOutlineDeleteOutline } from "react-icons/md";
import { FaRegEdit } from "react-icons/fa";
import { LuView } from "react-icons/lu";
import { removereducer } from '../createslice/createSlice';
import { Link } from 'react-router-dom';
import Custommodel from './Custommodel';

const All = () => {
    const {user,searchValue}=useSelector((state)=>{
        return state. userdata;
    })
    console.log(searchValue)
    // model view
    const [id ,setid]=useState()
    const [showpop ,setpop]=useState(false)
  
    const filtersearchdata=user.filter((item)=>{
    if(searchValue==''){
      return item
    }else if(item.title.toLowerCase().includes(searchValue.toLowerCase())){
      return item
    }
    })
      console.log(filtersearchdata)
     
      
    
    const dispatch=useDispatch()
    // console.log(alldata)
    const remove=(id)=>{
      dispatch(removereducer(id))

    }
    
  return (
    <>
    {showpop&&<Custommodel setpop={setpop} id={id}/>}
    {
      filtersearchdata.length?
   
    <div className="container">

     
  
      <h2 className='my-5 text-center'>All Notes</h2>
    <div className='  d-flex flex-wrap'>
      { filtersearchdata.map((item,index)=>{
          return <div className="card m-1 " key={item.id} style={{width: "20rem"}}>
          <div className="card-body">
            <h5 className="card-title">{item.title}</h5>
            <h6 className="card-subtitle mb-2 text-body-secondary">{item.message}</h6>
           
            <span onClick={()=>remove(index)} className="card-link"><MdOutlineDeleteOutline /></span>
           <Link  to={`/edit/${item.id}`} className="card-link editspan"> <FaRegEdit /></Link>
            <span  className="card-link editspan" onClick={()=>{setid(item.id);setpop(true)}}><LuView /></span>
          </div>
        </div>
        })}
    </div>
        </div> :<div style={{height:'70vh'}} className='d-flex justify-content-center align-items-center'><h3 className=''>No users</h3></div>}
        </>
  )
}

export default All
