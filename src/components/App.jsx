import React, {useState} from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import notes from "./notes";
import Form from "./Form";

function App(){

    const [notes, setNotes] = useState([]);

    function addNote(note){
        setNotes(prevNotes => {
            return [...prevNotes, note];
        });
    }

    function deleteNote(id){
        setNotes(prevNotes => {
            return prevNotes.filter((note, index) => index !== id);
        });
    }

    


    return <div>
        <Header title="Keeper App" />
        <div style = {{display:'flex',  justifyContent: "center"}}>
            <Form addNote = {addNote} />
        </div>
        {notes.map((note, index) => 
        (<Note 
            key = {index}
            id = {index}
            title = {note.title} 
            content = {note.content} 
            function = "Delete"
            deleteNote = {deleteNote}
        />)
            )}
        <Footer date = {new Date().getFullYear()} />
    </div>
}

export default App