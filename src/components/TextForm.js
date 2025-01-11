import React, {useState} from 'react'



export default function TextForm({ heading='This is default heading'  , mode='dark', showalert='showalert' }) {
    
    /* arrow function */
    const handleUpClick = ()=>{
        let newtext=text.toUpperCase();
        setText(newtext);
        showalert("Upper case is CLicked", "success");
       
    }

    const handleOnChange = (event)=>{
        setText(event.target.value);
    }

      /* arrow function */
      const handleLowerClick = ()=>{
        let newtext=text.toLowerCase();
        setText(newtext);
        showalert("Lower case is CLicked", "success");
       
    }
    /* handleClearClick function to clear text from text area */
    const handleClearClick = ()=>{
        let newtext='';
        setText(newtext);
        showalert("Clear case is CLicked", "success");
       
    }

     /* handleCopyClick function to clear text from text area */
     const handleCopyClick = ()=>{
        let newtext=text;
        navigator.clipboard.writeText(newtext);
        showalert("Copy case is CLicked", "success");
    }


    /* handleRemovingSpacesClick function to clear text from text area */
      
    const handleRemovingSpacesClick = ()=>{
        console.log(typeof(text));
        let _newtext = text.split(/[ ]+/);
        console.log(_newtext);
       setText(_newtext.join(" "));
       showalert("RemovingCase case is Clicked", "success");
    }

    const [text,setText]=useState('');
    
    let count_words=0;

    if (!text) {
        count_words=0;
    } else {
        count_words=text.split(" ").length - 1;
    }

    
  return (
    <>
    <div className={`container text-${mode === 'dark' ? 'light': 'dark' }`}>
        <h1>{heading}</h1>
        <div className="mb-3">
            <textarea className={`form-control text-${mode}`} onChange={handleOnChange} id="myBox" rows="8" value={text} style={{backgroundColor: mode === 'dark'?'white':'grey' }}>
            </textarea>
        </div>
        <button className='btn btn-primary mx-1' onClick={handleUpClick} >Convert to uper case</button>

        <button className='btn btn-success mx-1' onClick={handleLowerClick} >Convert to Lower case</button>

        <button className='btn btn-danger mx-1' onClick={handleClearClick} >Clear Text</button>

        <button className='btn btn-success mx-1' onClick={handleCopyClick} >Copy Text</button>

        <button className='btn btn-primary mx-1' onClick={handleRemovingSpacesClick} >Remove Extra-Spaces From Text</button>

     
    </div>
    <div className={`container text-${mode === 'dark' ? 'light': 'dark' }`}>
        <h1>Text Summary </h1>
        <b><p>Total Words are {count_words} and total charachters are {text.length} </p>
        <p>Minutes to read {text.split(" ").length * 0.008} </p></b>

        <h2>Text Preview </h2>
        <p>{text.length >0 ?text:'Enter Something in text area to preview'}</p>
    </div>
    </>
  )
}





