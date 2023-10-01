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
      <div class="container mb-3 mx-5 my-4">
        <label for="exampleFormControlTextarea1" class="form-label">
          Enter Your Text : 
        </label>
        <textarea
        value={text}
        class="form-control"
        id="exampleFormControlTextarea1"
        rows="3"
        placeholder="write something...."
        onChange={handleOnChange}
        ></textarea>

        <button className="btn btn-primary my-3" onClick={handleUpClick}>UpperCase</button>
        <button className="btn btn-primary my-3 mx-2" onClick={handleLoClick}>LowerCase</button>
        <button className="btn btn-primary my-3 " onClick={handleClearClick}>Clear Text</button>

      </div>
      <div className="container">
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
