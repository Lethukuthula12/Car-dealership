import React from "react";
import Directory from "../../directory/directory.components"
import ShowCase from "../../show-case/show-case.component";


import "./homepage.styles.scss";

function Homepage() {
  return (
    <div>
      <ShowCase/>
      <Directory />
    </div>
  );
}


export default Homepage;