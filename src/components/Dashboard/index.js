import React from "react";
// import { useDispatch, useSelector } from "react-redux";
import { withRouter } from "react-router";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    paddingBottom: "2.5%",
  },
}));

function Dashboard(props) {
  const classes = useStyles();

  return (
    <Grid
      container
      className={classes.root}
      spacing={2}
      justifyContent="center"
    >
      Arben Haziri
    </Grid>
  );
}
export default withRouter(Dashboard);
