import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router";
import { addNote, editNote, selectNote } from "../../actions/datas";
import { v4 as uuidv4 } from "uuid";

function AddNote(props) {
  const dispatch = useDispatch();
  const datasState = useSelector((state) => state.datas);
  const [noteText, setNoteText] = useState("");
  const { id } = useParams();
  const editForm = props.location.pathname.includes("/note/");

  useEffect(() => {
    if (editForm) {
      const noteToEdit = datasState.data.filter((item) => item.id === id);
      setNoteText(noteToEdit[0].text);
    } else {
      setNoteText("");
    }
  }, [id]);

  const handleSave = () => {
    const newNote = {
      text: noteText,
      id: uuidv4(),
    };
    dispatch(addNote(newNote));
    setNoteText("");
  };

  const handleEdit = () => {
    const newNote = {
      text: noteText,
      id: id,
    };
    dispatch(editNote(newNote));
  };

  return (
    <div className="text-area">
      <textarea
        className="form-control"
        name="noteText"
        placeholder="Write your note here..."
        value={noteText}
        onChange={(event) => {
          setNoteText(event.target.value);
        }}
        required
      />
      <button
        className="btn btn-primary m-2"
        onClick={() => {
          props.location.pathname.includes("/note/")
            ? handleEdit()
            : handleSave();
        }}
      >
        Save
      </button>
      <button
        className="btn btn-secondary m-2"
        onClick={() => {
          props.history.push("/");
          dispatch(selectNote());
        }}
      >
        Cancel
      </button>
    </div>
  );
}

export default AddNote;
