import React, { useContext, useState } from "react";
// ab yha pr use context ka use krne ke liye use import krna padega 
import noteContext from "../context/notes/noteContext" ;

export default function AddNote() {
      // ab yha pr notes ko lane ke liye 
      const context=useContext(noteContext);
      const {addNote}=context;

      // hmm ab ek state bnayenge useState hook se 
      const [note, setNote]=useState({
        title:"",
        description:"",
        tag:"Default"
      });

      const handleClick=(e)=>{
        e.preventDefault();
        addNote(note.title,note.description,note.tag);
      }


      // three dot ka matlab sepearator ka use kr rhe h 
      // jo bhi name ki value h woh target ke brabar ho jaye 
      const onChange=(e)=>{
        setNote({
          ...note,[e.target.name]: e.target.value
        })
      }
  return (
    <div>
      <div className="container my-3">
        <h2>Add a Note</h2>
        <form className="my-3">
          <div className="mb-3">
            <label htmlFor="title" className="form-label">
              Title
            </label>
            <input
              type="text"
              className="form-control"
              id="title"
              name="title"
              aria-describedby="emailHelp"
              onChange={onChange}
            />
            
          </div>
          <div className="mb-3">
            <label htmlFor="description" className="form-label">
              Description
            </label>
            <input
              type="text"
              className="form-control"
              id="description"
              name="description"
              onChange={onChange}
            />
          </div>
          <div className="mb-3 form-check">
            <input
              type="checkbox"
              className="form-check-input"
              id="exampleCheck1"
              onChange={onChange}
            />
            <label className="form-check-label" htmlFor="exampleCheck1">
              Check me out
            </label>
          </div>
          <button type="submit" className="btn btn-primary" onClick={handleClick}>
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}
