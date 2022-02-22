import React, { useContext } from "react";
// ab yha pr use context ka use krne ke liye use import krna padega 
import noteContext from "../context/notes/noteContext" ;
import AddNote from "./AddNote";
import Noteitem from "./Noteitem";

export default function Notes() {
      // ab yha pr notes ko lane ke liye 
  const context=useContext(noteContext);
  const {notes, addNote}=context;
  return (
    <>
    <AddNote/>
    <div className="row my-5">
      <h2>Your Notes</h2>
      {notes.map((note)=>{
        return <Noteitem  key={note._id} note={note}/>;
      })}
      </div>
      </>
  )
}
