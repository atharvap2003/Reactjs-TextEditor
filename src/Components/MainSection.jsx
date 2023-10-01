import React, {useState} from "react";

const MainSection = () => {

    const [text, setText] = useState('lorem100');

    const handleUpClick = () =>{
        let newtext = text.toUpperCase();
        setText(newtext);
    }

    const handleLoClick = () =>{
        let newtext = text.toLowerCase();
        setText(newtext);
    }

    const handleOnChange = (event) =>{
        setText(event.target.value);
    }

    const handleClearClick = () =>{
      let newtext = "";
      setText(newtext);
    }

  return (
    <>
      <div className="mx-5 my-4">
        <label for="exampleFormControlTextarea1" class="form-label">
          Enter Your Text : 
        </label>
        <textarea
        value={text}
        className="form-control"
        id="exampleFormControlTextarea1"
        rows="3"
        placeholder="write something...."
        onChange={handleOnChange}
        ></textarea>

        <button className="btn btn-primary my-2" onClick={handleUpClick}>UpperCase</button>
        <button className="btn btn-primary mx-2 my-2" onClick={handleLoClick}>LowerCase</button>
        <button className="btn btn-primary " onClick={handleClearClick}>Clear Text</button>

      </div>
      <div className="mx-5">
        <h4>Text Summary: </h4>
        <p>{text.split(" ").length} words and {text.length} characters </p>
        <p>{0.008 * text.split(" ").length} Minutes to read document..</p>
        <h4>Preview</h4>
        <label htmlFor="">{text}</label>
      </div>
    </>
  );
};

export default MainSection;
