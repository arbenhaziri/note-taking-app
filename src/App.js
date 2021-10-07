import React, { useEffect } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { Dashboard, Sidebar, AddNote, Subheader } from "./components";
import { makeStyles } from "@material-ui/core/styles";
import { fetchDataFromLocalStorage } from "./actions/noteActions";
import { useDispatch } from "react-redux";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
  },
  content: {
    flexGrow: 1,
  },
  main: {
    padding: "30px",
  },
}));

function App() {
  const classes = useStyles();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchDataFromLocalStorage());
  }, [dispatch]);

  return (
    <div className={classes.root}>
      <BrowserRouter>
        <Sidebar />
        <main className={classes.content}>
          <Subheader />
          <div className={classes.main}>
            <Switch>
              <Route exact path="/" component={Dashboard}></Route>
              <Route path="/add-note" component={AddNote}></Route>
              <Route path="/note/:id" component={AddNote}></Route>
            </Switch>
          </div>
        </main>
      </BrowserRouter>
    </div>
  );
}

export default App;
