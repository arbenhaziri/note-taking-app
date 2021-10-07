import React from "react";
import Toolbar from "@material-ui/core/Toolbar";
import { makeStyles } from "@material-ui/core/styles";
import { withRouter } from "react-router-dom";

const useStyles = makeStyles(() => ({
  subHeader: {
    marginTop: "60px",
    borderBottom: "solid 1px #80808026",
    background: "white",
  },
  textColor: {
    paddingTop: "10px",
    color: "grey",
  },
}));

const getPageTitle = (location) => {
  if (location.includes("/note/")) {
    return "Edit Note";
  }

  const routes = {
    "/": "Dashboard",
    "/add-note": "Add Note",
  };

  return routes[location];
};

function Subheader(props) {
  const classes = useStyles();
  return (
    <Toolbar className={classes.subHeader}>
      <h2 className={classes.textColor}>
        {getPageTitle(props.location.pathname)}
      </h2>
    </Toolbar>
  );
}

export default withRouter(Subheader);
