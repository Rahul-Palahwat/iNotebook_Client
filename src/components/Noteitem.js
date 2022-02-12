import React from "react";

export default function Noteitem(props) {
  const { note } = props;
  return (
    <div className="col-md-3">
      <div className="card my-3">
        <div className="card-body">
            <di className="d-flex align-items-center">
            <h5 className="card-title">{note.title}</h5>
            <i className="fa-solid fa-trash-can mx-2"></i>
          <i className="fa-solid fa-pen-to-square mx-2"></i>
            </di>
          
          <p className="card-text">{note.description}</p>
          
        </div>
      </div>
    </div>
  );
}