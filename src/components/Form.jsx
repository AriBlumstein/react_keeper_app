import React, {useState} from "react";

function Form(props) {

    const [note, setNote] = useState({title: "", content: ""});

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

    
    return (
        <div className="create-note">
        <form className onSubmit={(event)=> {props.addNote(note); setNote({title: "", content: ""}); event.preventDefault();}}>
            <input id="title" type="text" name="title" placeholder="Title" value={note.title} onChange={updateNote}  />
            <textarea id="content" name="content" placeholder="Take a note..." rows="3" value={note.content} onChange={updateNote} />
            <button type="submit">Add</button>
        </form>
        </div>
    );
}


export default Form;