import React from 'react'
import './custom.css'
import { useSelector } from 'react-redux'

const Custommodel = ({id,showpop,setpop}) => {
    const alldata=useSelector((state)=>{
        return state. userdata.user;
    })
  const singleuser=alldata.filter((item )=>{
    return item.id===id;

  })
  console.log(singleuser)
  return (
    <>
    <div className="modelBackground">
      <div className="modelContainer">
        <button onClick={()=>{setpop(false)}}>Close</button>
        <div className="container d-flex flex-column justify-content-center align-items-center mt-5">

        <h4>{singleuser[0].title}</h4>
        <h5>{singleuser[0].message}</h5>
        </div>
       
        {/* <h4>{singleuser[0].name}</h4>
        <h4>{singleuser[0].email}</h4>
        <h4>{singleuser[0].age}</h4>
        <h4>{singleuser[0].gender}</h4> */}
        
      </div>
    </div>
    </>
  )
}

export default Custommodel
