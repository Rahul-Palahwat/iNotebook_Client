// import { useState } from "react";
import NoteContext from "./noteContext";
//yha pa context ko import kiya h use krne ke liye


// yen yha pr ek function h jha hmme jo kuch bhi chiye hoga woh value se lenge 
const NoteState= (props)=>{

    return (
        <NoteContext.Provider value={{}}>
            {props.children}
        </NoteContext.Provider>
    )
}


export default NoteState;