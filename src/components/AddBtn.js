import React from "react";

const AddBtn = () => {
  return (
    <div className="fixed-action-btn">
      <a
        href="#add-log-modal"
        className="btn-floating btn-large blue darken-2 modal-trigger"
      >
        <i className="large material-icons">add</i>
      </a>
      <ul>
        <li>
          <a
            href="#add-tech-modal"
            className="btn-floating  blue-grey lighten-4 modal-trigger"
          >
            <i className="material-icons">play_for_work</i>
          </a>
        </li>
        <li>
          <a
            href="#tech-list-modal"
            className="btn-floating green modal-trigger"
          >
            <i className="material-icons">monetization_on</i>
          </a>
        </li>
        <li>
          <a
            href="#add-tech-modal"
            className="btn-floating cyan accent-2 modal-trigger"
          >
            <i className="material-icons">camera</i>
          </a>
        </li>
      </ul>
    </div>
  );
};
export default AddBtn;
