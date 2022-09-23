import React, { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import CreateArea from "./createArea";
import Note from "./Note";

export default function App() {
  const [notes, updateNotes] = useState([]);

  function addNotes(note) {
    updateNotes((prevNotes) => [...prevNotes, note]);
  }

  function deleteNote(index) {
    updateNotes((prevNotes) => prevNotes.filter((note, idx) => idx !== index));
  }

  return (
    <>
      <Header />
      <CreateArea onAdd={addNotes} />
      {notes.map((note, index) => (
        <Note
          key={index}
          id={index}
          title={note.title}
          content={note.content}
          onDelete={deleteNote}
        />
      ))}
      <Footer />
    </>
  );
}
