import React, { useEffect, Fragment } from "react";
import "materialize-css/dist/css/materialize.min.css";
import M from "materialize-css/dist/js/materialize.min.js";
import SearchBar from "./components/Navbar";
import AddBtn from "./components/AddBtn";
import "./App.css";

function App() {
  useEffect(() => M.AutoInit());
  return (
    <Fragment>
      <SearchBar />
      <div className="container">
        <AddBtn />
      </div>
    </Fragment>
  );
}

export default App;
