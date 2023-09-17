import React from "react";
import PropTypes from 'prop-types'

export default function TextFrom(props) {
  return (
    <div className="container my-3">
        <h1 >{props.heading}</h1>
        <div className="mb-3">
            <textarea className="form-control" rows="6" id="floatingTextarea"></textarea>
            <button className="btn btn-primary mt-2">Uppercase</button>
        </div>
    </div>
  );
}
TextFrom.propTypes ={
    heading:PropTypes.string.isRequired
    
}