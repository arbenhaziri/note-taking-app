import React from "react";
import { Paper, Typography } from "@material-ui/core";
import { deleteNote } from "../../actions/noteActions";
import { useDispatch } from "react-redux";
import { withRouter } from "react-router";

function CardView(props) {
  const dispatch = useDispatch();
  return (
    <div className="col-lg-3 cardView">
      <button
        className="delete-button"
        onClick={() => {
          dispatch(deleteNote(props.data));
        }}
      >
        X
      </button>
      <div
        className="card-inside-wrapper"
        onClick={() => {
          props.history.push(`/note/${props.data.id}`);
        }}
      >
        <div className="text-center note-title">{props.data.name}</div>
        <Paper elevation={3} style={{ padding: "10px" }} square>
          <Typography noWrap>{props.data.text}</Typography>
        </Paper>
      </div>
    </div>
  );
}

export default withRouter(CardView);
