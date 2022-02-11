import { useState } from "react";
import NoteContext from "./noteContext";
//yha pa context ko import kiya h use krne ke liye


// yen yha pr ek function h jha hmme jo kuch bhi chiye hoga woh value se lenge 
const NoteState= (props)=>{
    const s1={
        "name":"Harry",
        "class":"5b"
    }
    const [state, setState]= useState(s1)

    // yen ek function h 
    const update = ()=>{
        setTimeout(() => {
            setState({
                "name":"Larry",
                "class":"10b"
            })
        }, 1000);
    }
    return (
        // <NoteContext.Provider value={{state:state , update:update}}>
        <NoteContext.Provider value={{state , update}}>
            {props.children}
        </NoteContext.Provider>
    )
}


export default NoteState;