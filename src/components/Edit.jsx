import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { editreducer } from '../createslice/createSlice';
import { IoMdAdd } from "react-icons/io";
import { v4 as uuidv4 } from 'uuid';
import { ToastContainer, toast } from 'react-toastify';

import 'react-toastify/dist/ReactToastify.css';
import { useNavigate, useParams } from 'react-router-dom';

const Edit = () => {
    const alldata=useSelector((state)=>{
        return state. userdata.user;
    })
    // const [noteValued,setNoteValued]=useState([]);
    const dispatch=useDispatch()
    const navigate=useNavigate()
    const params=useParams()
    const extdata=alldata.find((item)=>item.id===params.id)
    console.log(extdata)
//    const  {title,message}=extdata
    const [noteValue,setNoteValue]=useState({
        title:extdata?extdata.title:'',
        message:extdata?extdata.message:''
    });

    const changeValue=(e)=>{
        const {name,value}=e.target;
        setNoteValue({...noteValue,[name]:value})
        
    }
    console.log('hi')
    const editNote=()=>{
       
        if(noteValue.title=='' && noteValue.message==''){
        //   alert('hi')
        toast("fill the data",{
          position: "top-center",
          hideProgressBar: true
        })
        }else{
            toast("Update Successfully",{
                position: "top-center",
                hideProgressBar: true,
                
              })
          dispatch(editreducer({
            id:params.id,
            title:noteValue.title,
            message:noteValue.message,
          }))
          setTimeout(() => {
            
              navigate('/all')
          }, 1000);
         
          
        }
        
    }

  return (
    <>
    <div className="text-enter">
    </div>
    <div className="w-50 container ">
       <h3 className='mt-5 mb-4'> Add a note</h3>
    <div className="mb-3">
  <label htmlFor="title" className="form-label">Title</label>
  <input type="text" className="form-control" value={noteValue.title} name='title'onChange={changeValue}  id="title" placeholder="Title"/>
</div>
<div className="mb-3">
  <label htmlFor="message" className="form-label">Message</label>
  <textarea className="form-control" name='message' value={noteValue.message} onChange={changeValue} id="message" rows="2" placeholder='Take a note...'></textarea>
</div>
<button className="btn btn-primary" onClick={editNote}>Edit</button>
</div>
<ToastContainer />
    </>
  )
}

export default Edit
