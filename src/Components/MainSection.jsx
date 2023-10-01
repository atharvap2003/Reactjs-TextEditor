import React, {useState} from "react";

const MainSection = () => {



    const [text, setText] = useState('Enter Text here2');

    const handleUpClick = () =>{
        let newtext = text.toUpperCase();
        setText(newtext);
    }

    const handleLoClick = () =>{
        let newtext = text.toLowerCase();
        setText(newtext);
    }

    const handleOnChange = (event) =>{
        setText(event.target.value)
    }

  return (
    <>
      <div class="mb-3 mx-5 my-4">
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
      </div>
    </>
  );
};

export default MainSection;
