import React, { useEffect } from "react";
import { connect } from "react-redux";
import Preloader from "../components/Preloader";
import LogItem from "./LogItem";
import PropTypes from "prop-types";
import { getLogs } from "../actions/logActions";

const Logs = ({ log: { logs, loading }, getLogs }) => {
  useEffect(() => {
    getLogs();
    // eslint-disable-next-line
  }, []);

  if (loading || logs == null) {
    return <Preloader />;
  }

  return (
    <ul className="collection with-header">
      <li className="collection-header">
        <h4 className="center">System Logs:</h4>
      </li>
      {!loading && logs.length === 0 ? (
        <p className="center">Ahhhh Shit. Somethings not working.</p>
      ) : (
        logs.map(log => <LogItem log={log} key={log.id} />)
      )}
    </ul>
  );
};

Logs.propTypes = {
  log: PropTypes.object.isRequired
};

//!! first 'log' in this function is what is passed in to prop, called whatever is passed in, second log is referring to reducer in 'combineReducers' function in reducers/..index.js
const mapStateToProps = state => ({
  log: state.log
});

// !!When state is set to Props as below, you need to destructer above or use as 'props.getLogs' instead of just 'getLogs'
export default connect(mapStateToProps, { getLogs })(Logs);
