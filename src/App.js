import React, { useEffect, Fragment } from "react";
import "materialize-css/dist/css/materialize.min.css";
import M from "materialize-css/dist/js/materialize.min.js";
import SearchBar from "./components/Navbar";
import AddBtn from "./components/AddBtn";
import Logs from "./logs/Logs";
import store from "./store";
import { Provider } from "react-redux";
import "./App.css";

function App() {
  useEffect(() => M.AutoInit());
  return (
    <Provider store={store}>
      <Fragment>
        <SearchBar />
        <div className="container">
          <Logs />
          <AddBtn />
        </div>
      </Fragment>
    </Provider>
  );
}

export default App;
