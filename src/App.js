import React from "react";
import Login from "./Login"


function App({company, dpartment, Country, Region, number}) {
  return (
    <div className="App">
      <h1>{company} </h1>
      <h4>{Country} </h4>
      <p>{number} Staffs</p>
    </div>
  );
}

export default App;
