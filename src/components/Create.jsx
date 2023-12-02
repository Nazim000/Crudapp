import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { addreducer } from '../createslice/createSlice';
import { IoMdAdd } from "react-icons/io";
import { v4 as uuidv4 } from 'uuid';
import { ToastContainer, toast } from 'react-toastify';

import 'react-toastify/dist/ReactToastify.css';
import { useNavigate } from 'react-router-dom';

const Create = () => {
    const [noteValue,setNoteValue]=useState({
      title:'',
      message:''
    });
    const [show,setshow]=useState(false);
    const dispatch=useDispatch()
    const navigate=useNavigate()

    const changeValue=(e)=>{
        const {name,value}=e.target;
        setNoteValue({...noteValue,[name]:value})
        
    }
    const addNote=()=>{
        // setNoteValued([...noteValued,noteValue])
        if(noteValue.title=='' && noteValue.message==''){
          // alert('hi')
          toast("Fill the data",{
            position: "top-center",
            hideProgressBar: true
          })
        }else{

          dispatch(addreducer({
            id:uuidv4(),
            title:noteValue.title,
            message:noteValue.message,
          }))
          setNoteValue({
            title:'',
            message:''
          })
          navigate('/all')
          
        }
        
    }

  return (
    <>
    <div className="text-enter">
    </div>
    <div className="w-50 container " onDoubleClick={()=>setshow(false)}>
       <h3 className='mt-5 mb-4'> Add a note</h3>
   {show&& <div className="mb-3">
  <label htmlFor="title" className="form-label">Title</label>
  <input type="text" className="form-control" value={noteValue.title} name='title'onChange={changeValue}  id="title" placeholder="Title"/>
</div>}
<div className="mb-3">
  <label htmlFor="message" className="form-label">Message</label>
  <textarea className="form-control" onClick={()=>setshow(true)} name='message' value={noteValue.message} onChange={changeValue} id="message" rows="2" placeholder='Take a note...'></textarea>
</div>
<button className="btn btn-primary" onClick={addNote}><IoMdAdd /></button>
</div>
<ToastContainer />
    </>
  )
}

export default Create
