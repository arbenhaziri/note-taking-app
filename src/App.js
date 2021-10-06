import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { Dashboard, Sidebar } from "./components";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
  },
  content: {
    flexGrow: 1,
  },
  main: {
    marginTop: "65px",
    padding: "30px",
  },
}));

function App() {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <BrowserRouter>
        <Sidebar />
        <main className={classes.content}>
          <div className={classes.main}>
            <Switch>
              <Route exact path="/" component={Dashboard}></Route>
              <Route path="/add-note" component={Dashboard}></Route>

            </Switch>
          </div>
        </main>
      </BrowserRouter>
    </div>
  );
}

export default App;
