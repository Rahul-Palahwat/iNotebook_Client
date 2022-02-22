import { useState } from "react";
import NoteContext from "./noteContext";
//yha pa context ko import kiya h use krne ke liye


// yen yha pr ek function h jha hmme jo kuch bhi chiye hoga woh value se lenge 
const NoteState= (props)=>{
    const notesInitial=[
        {
          "_id": "6204bd918cc27b6481f82903ss",
          "user": "620242523e5e94ee6075b67c",
          "title": "New note",
          "description": "Please access the playlist",
          "tag": "youtube",
          "date": "2022-02-10T07:24:01.117Z",
          "__v": 0
        },
        {
          "_id": "6204c3ee4f4c9cb84e5236a3",
          "user": "620242523e5e94ee6075b67c",
          "title": "New note",
          "description": "Please access the playlist",
          "tag": "youtube",
          "date": "2022-02-10T07:51:10.362Z",
          "__v": 0
        },
        {
          "_id": "6204bd918cc27b6481ff82903",
          "user": "620242523e5e94ee6075b67c",
          "title": "New note",
          "description": "Please access the playlist",
          "tag": "youtube",
          "date": "2022-02-10T07:24:01.117Z",
          "__v": 0
        },
        {
          "_id": "6204c3ee4f4c9chb84e5236a3",
          "user": "620242523e5e94ee6075b67c",
          "title": "New note",
          "description": "Please access the playlist",
          "tag": "youtube",
          "date": "2022-02-10T07:51:10.362Z",
          "__v": 0
        },
        {
          "_id": "6204bd918cc27b6j481f82903",
          "user": "620242523e5e94ee6075b67c",
          "title": "New note",
          "description": "Please access the playlist",
          "tag": "youtube",
          "date": "2022-02-10T07:24:01.117Z",
          "__v": 0
        },
        {
          "_id": "6204c3ee4f4c9cb84e52f36a3",
          "user": "620242523e5e94ee6075b67c",
          "title": "New note",
          "description": "Please access the playlist",
          "tag": "youtube",
          "date": "2022-02-10T07:51:10.362Z",
          "__v": 0
        },
        {
          "_id": "6204c3ee4f4cw9cb84e5236a3",
          "user": "620242523e5e94ee6075b67c",
          "title": "New note",
          "description": "Please access the playlist",
          "tag": "youtube",
          "date": "2022-02-10T07:51:10.362Z",
          "__v": 0
        },
        {
          "_id": "6204bd918cvc27b6481f82903",
          "user": "620242523e5e94ee6075b67c",
          "title": "New note",
          "description": "Please access the playlist",
          "tag": "youtube",
          "date": "2022-02-10T07:24:01.117Z",
          "__v": 0
        },
        {
          "_id": "6204c3ee4f4c9cbg84e5236a3",
          "user": "620242523e5e94ee6075b67c",
          "title": "New note",
          "description": "Please access the playlist",
          "tag": "youtube",
          "date": "2022-02-10T07:51:10.362Z",
          "__v": 0
        },
        {
          "_id": "6204bd918csc27b6481f82903",
          "user": "620242523e5e94ee6075b67c",
          "title": "New note",
          "description": "Please access the playlist",
          "tag": "youtube",
          "date": "2022-02-10T07:24:01.117Z",
          "__v": 0
        },
        {
          "_id": "6204c3ee4f4c9cb84e52g36a3",
          "user": "620242523e5e94ee6075b67c",
          "title": "New note",
          "description": "Please access the playlist",
          "tag": "youtube",
          "date": "2022-02-10T07:51:10.362Z",
          "__v": 0
        }
      ]

      const [notes, setNotes]= useState(notesInitial)

      //add a Note
      const addNote=(title,description,tag)=>{
        console.log("Adding a new note")
        //TODO api call
        const note={
          "_id": "6204c3ee4f4c9cb84e52g33",
          "user": "620242523e5e94ee6075b67c",
          "title": title,
          "description": description,
          "tag": tag,
          "date": "2022-02-10T07:51:10.362Z",
          "__v": 0
        };
        setNotes(notes.concat(note))
      }

      //Delete a Note
      const deleteNote=()=>{
        
      }

      //Edit a note
      const editNote=()=>{
        
      }


    return (
        <NoteContext.Provider value={{notes, addNote, editNote, deleteNote}}>
            {props.children}
        </NoteContext.Provider>
    )
}


export default NoteState;