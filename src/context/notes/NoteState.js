import { useState } from "react";
import NoteContext from "./noteContext";
//yha pa context ko import kiya h use krne ke liye


// yen yha pr ek function h jha hmme jo kuch bhi chiye hoga woh value se lenge 
const NoteState = (props) => {
  const host = "http://localhost:5000"
  const notesInitial = []

  const [notes, setNotes] = useState(notesInitial)

  //get all Notes
  const getNotes = async() => {
    console.log("Adding a new note")
    //TODO api call
    const response = await fetch(`${host}/api/notes/fetchallnotes`, {
      method: 'GET',

      headers: {
        'Content-Type': 'application/json',
        "auth-token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjIwMjQyNTIzZTVlOTRlZTYwNzViNjdjIn0sImlhdCI6MTY0NDQ3OTUzN30.V33WWXNNzekdkdwkd5iGOIjA-bdyMMI8LIJ4qesKUQQ"
      },

    });
    const json=await response.json();
    console.log(json);
    // setNotes()
  }



  //add a Note
  const addNote = async(title, description, tag) => {
    console.log("Adding a new note")
    //TODO api call
    const response = await fetch(`${host}/api/notes/addnote`, {
      method: 'POST',

      headers: {
        'Content-Type': 'application/json',
        "auth-token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjIwMjQyNTIzZTVlOTRlZTYwNzViNjdjIn0sImlhdCI6MTY0NDQ3OTUzN30.V33WWXNNzekdkdwkd5iGOIjA-bdyMMI8LIJ4qesKUQQ"
      },

      body: JSON.stringify({title,description,tag})
    });
    console.log(response.json());
    const note = {
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
  const deleteNote = (id) => {
    //TODO API call

    console.log("Deleting the note" + id);
    const newNotes = notes.filter((note) => {
      return note._id !== id
    })
    setNotes(newNotes)
  }

  //Edit a note
  const editNote = async (id, title, description, tag) => {
    //todo api call
    const response = await fetch(`${host}/api/notes/updatenote/6204b410bc7e3c7367fb8598`, {
      method: 'POST',

      headers: {
        'Content-Type': 'application/json',
        "auth-token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjIwMjQyNTIzZTVlOTRlZTYwNzViNjdjIn0sImlhdCI6MTY0NDQ3OTUzN30.V33WWXNNzekdkdwkd5iGOIjA-bdyMMI8LIJ4qesKUQQ"
      },

      body: JSON.stringify({title,description,tag})
    });
    const json = response.json();
    console.log(json)


    //logic to edit in client
    for (let index = 0; index < notes.length; index++) {
      const element = notes[index];
      if (element._id === id) {
        element.title = title;
        element.description = description;
        element.tag = tag;

      }

    }
  }


  return (
    <NoteContext.Provider value={{ notes, addNote, editNote, deleteNote, getNotes }}>
      {props.children}
    </NoteContext.Provider>
  )
}


export default NoteState;