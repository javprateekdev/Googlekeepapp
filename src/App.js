import React, { useState } from "react";
import Header from "./components/Header";
import Title from "./components/Title";
import Note from "./components/Note";
import FormArea from "./components/FormArea";
function App() {
  const [notes, setNotes] = useState([]);
  console.log(notes);

  function addNote(note) {
    setNotes((preNotes) => {
      return [...preNotes, note];
    });
  }
  function delNote(id){
    setNotes(preNotes=>{
      return preNotes.filter((note,index)=>{
        return index != id
      })
    })
  }
  return (
    <>
      <Header />
      <FormArea  addNote={addNote}/>
      {notes.map((note,index)=>(
        <Note id={index} delNote={delNote} title={note.title} content={note.content} />
      ))}
  
      
   
    </>
  );
}

export default App;