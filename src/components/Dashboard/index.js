import React from "react";
import { useSelector } from "react-redux";
import CardView from "../CardView";
import { withRouter } from "react-router";

function Dashboard(props) {
  const datasState = useSelector((state) => state.datas);

  return (
    <div className="container">
      <div class="row row-cols-3">
        {datasState.filteredData.map((item, index) => {
          return <CardView key={index} data={item} index={index} />;
        })}
      </div>
    </div>
  );
}
export default withRouter(Dashboard);
