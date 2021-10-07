import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router";
import { addNote, editNote, selectNote } from "../../actions/noteActions";
import { v4 as uuidv4 } from "uuid";
import { TextField, Grid } from "@material-ui/core";
import DescriptionIcon from "@material-ui/icons/Description";

function AddNote(props) {
  const dispatch = useDispatch();
  const noteReducer = useSelector((state) => state.noteReducer);
  const [noteText, setNoteText] = useState("");
  const [noteName, setNoteName] = useState("");
  const { id } = useParams();
  const editForm = props.location.pathname.includes("/note/");

  useEffect(() => {
    if (editForm) {
      const noteToEdit = noteReducer.data.filter((item) => item.id === id);
      setNoteText(noteToEdit[0].text);
      setNoteName(noteToEdit[0].name);
    } else {
      setNoteText("");
      setNoteName("");
    }
  }, [id]);

  const handleSave = () => {
    const newNote = {
      name: noteName,
      text: noteText,
      id: uuidv4(),
    };
    dispatch(addNote(newNote));
    setNoteText("");
    setNoteName("");
  };

  const handleEdit = () => {
    const newNote = {
      name: noteName,
      text: noteText,
      id: id,
    };
    dispatch(editNote(newNote));
  };

  const onFormSubmit = (event) => {
    event.preventDefault();
    props.location.pathname.includes("/note/") ? handleEdit() : handleSave();
    props.history.push("/");
  };

  return (
    <div className="text-area">
      <Grid container>
        <Grid item xs={2}>
          <DescriptionIcon
            color="action"
            style={{ width: "150px", height: "200px" }}
          />
        </Grid>
        <Grid item xs={7}>
          <form onSubmit={onFormSubmit}>
            <TextField
              name="noteName"
              value={noteName}
              label="Name"
              variant="filled"
              size="small"
              fullWidth
              style={{ marginBottom: "10px", marginTop: "40px" }}
              onChange={(event) => {
                setNoteName(event.target.value);
              }}
              required
            />
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
            <button type="submit" className="btn btn-primary m-2">
              Save
            </button>
            <button
              className="btn btn-secondary m-2"
              onClick={() => {
                props.history.push("/");
                dispatch(selectNote(-1));
              }}
            >
              Cancel
            </button>
          </form>
        </Grid>
      </Grid>
    </div>
  );
}

export default AddNote;
