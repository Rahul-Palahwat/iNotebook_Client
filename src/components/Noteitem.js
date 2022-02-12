import React from "react";

export default function Noteitem(props) {
  const { note } = props;
  return (
    <div className="col-md-3">
      <div className="card my-3">
        <div className="card-body">
          <h5 className="card-title">{note.title}</h5>
          <p className="card-text">{note.description} Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus, asperiores. Optio autem iusto minus, saepe facere voluptates odit, velit adipisci, deserunt omnis quos.</p>
          
        </div>
      </div>
    </div>
  );
}
