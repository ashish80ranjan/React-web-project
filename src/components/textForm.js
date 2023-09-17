import React, {useState} from "react";
import PropTypes from 'prop-types'



export default function TextFrom(props) {
    const handleUpClick=()=>{
       
        let newtxt=text.toUpperCase();
        setText(newtxt);
       
    }
    const handleOnChange=(event)=>{
     
        setText(event.target.value);
    }
    const [text ,setText]=useState('Enter text here');
  return (
    <div className="container my-3">
        <h1 >{props.heading}</h1>
        <div className="mb-3">
            <textarea className="form-control" rows="6"  value={text} onChange={handleOnChange} id="f"></textarea>
            <button className="btn btn-primary mt-2" onClick={handleUpClick}>Uppercase</button>
        </div>
    </div>
  );
}
TextFrom.propTypes ={
    heading:PropTypes.string.isRequired
    
}