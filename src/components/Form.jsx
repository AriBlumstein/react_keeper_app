import React, {useState} from "react";
import AddIcon from "@mui/icons-material/Add";
import { Fab } from "@mui/material";
import { Zoom } from "@mui/material";

function Form(props) {

    const [note, setNote] = useState({title: "", content: ""});
    const [expand, setExpand] = useState(false);

    function updateNote(event)
    {
        const {name, value} = event.target;

        setNote(prevNote => {
            return {
                ...prevNote,
                [name]: value
            }
        })
    }

    function updateExpand() {
        setExpand(prevExpand => !prevExpand);
    }

    
    return (    
        <div className="create-note-me" >
        <form onSubmit={(event)=> {props.addNote(note); setNote({title: "", content: ""}); event.preventDefault();}}>
            <input id="title" type="text" name="title" placeholder="Title" value={note.title} onChange={updateNote} style = {{display: expand ? "initial" : "none"}}  />
            <textarea id="content" name="content" placeholder="Take a note..." rows="3" value={note.content} onChange={updateNote} onClick={updateExpand} />
            <Zoom in={expand}><Fab type="submit"><AddIcon/></Fab></Zoom>
        </form>
        </div>
    );
}


export default Form;