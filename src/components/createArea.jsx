import React, { useState } from "react";
import AddIcon from "@mui/icons-material/Add";
import Fab from "@mui/material/Fab";
import Zoom from "@mui/material/Zoom";

export default function CreateArea({ onAdd }) {
  const [note, updateNote] = useState({
    title: "",
    content: "",
  });
  const [takeNote, setTakeNote] = useState(false);

  function handleChange(e) {
    const { name, value } = e?.target;
    updateNote((prev) => ({ ...prev, [name]: value }));
  }

  function handleTakeNote() {
    setTakeNote(true);
  }

  return (
    <>
      <form className="create-note">
        {takeNote && (
          <input
            name="title"
            type="text"
            placeholder="Title"
            autoFocus="on"
            value={note.title}
            onChange={handleChange}
          />
        )}

        <textarea
          name="content"
          rows={takeNote ? "3" : "1"}
          placeholder="Take a note.."
          value={note.content}
          onChange={handleChange}
          onClick={handleTakeNote}
        ></textarea>

        <Zoom in={takeNote}>
          <Fab
            onClick={(e) => {
              note.title.length > 0 && note.content.length > 0 && onAdd(note);
              updateNote({
                title: "",
                content: "",
              });
              e.preventDefault();
              setTakeNote(false);
            }}
          >
            <AddIcon />
          </Fab>
        </Zoom>
      </form>
    </>
  );
}
