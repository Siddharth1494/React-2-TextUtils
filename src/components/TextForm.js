import React, {useState} from 'react'


export default function  TextForm(props) {
    const [text,setText] = useState("");
    
    const handleUpClick = () => {
        let newText = text.toUpperCase();
        setText(newText);
        props.showAlert("Changed into Uppercase !" , "success");
    }
    const handleLoClick = () => {
      let newText = text.toLowerCase();
      setText(newText);
      props.showAlert("Changed into LowerCase !"  , "success");
    }
    const clearText = () => {
      let newText = '';
      setText(newText);
      props.showAlert("Text Cleared !" , "success");
    }
    const handleOnChange = (event) =>{
          setText(event.target.value);

    }
    
  return (
    <>
      <div style={{color:props.mode === 'light'?'black':'white'}}> 
        <h1  >{props.heading}</h1>
        <div className="mb-3">
        <textarea className="form-control" value={text} style={{backgroundColor:props.mode === 'light'?'white':'#052c65',color:props.mode === 'light'?'black':'white'}} onChange={handleOnChange} id="myBox" rows="8"></textarea>       
        </div>
        <button className="btn btn-primary mx-1" onClick={handleUpClick}>Convert to UpperCase</button>
        <button className="btn btn-primary mx-1" onClick={handleLoClick}>Convert to LowerCase</button>
        <button className="btn btn-primary mx-1" onClick={clearText}>Clear Text</button>
      </div>
      <div className="container my-3" style={{color:props.mode === 'light'?'black':'white'}}>
        <h1 >Your Text summary is: </h1>
        <p>{(text.split(" ").length)} words and length is{text.length}</p>
        <h2>PREVIEW</h2>
        <p>{text.length>0 ? text :  "No Text Entered Yet"}</p>
      </div> 
    </>
      
    
    
  )
}
