import React from "react";
import { useSelector } from "react-redux";
import CardView from "../CardView";
import { withRouter } from "react-router";
import { Typography } from "@material-ui/core";

function Dashboard(props) {
  const noteReducer = useSelector((state) => state.noteReducer);
  return (
    <div className="container">
      {noteReducer.data.length > 0 ? (
        <div className="row row-cols-3">
          {noteReducer.filteredData.map((item, index) => {
            return <CardView key={index} data={item} />;
          })}
        </div>
      ) : (
        <Typography variant="h6" align="center">
          There are no notes stored
        </Typography>
      )}
    </div>
  );
}
export default withRouter(Dashboard);
