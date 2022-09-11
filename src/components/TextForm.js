import React, { useState } from 'react'


export default function TextForm(props) {
    const handleUpClick = () => {

        let newText = text.toUpperCase();
        setText(newText)
        props.showAlert("Converted to Upper Case!", "success");
    }
    const handleLoClick = () => {

        let newText = text.toLowerCase();
        setText(newText)
        props.showAlert("Converted to Lower Case!", "success");
    }

    const handleClearClick = () => {

        let newText = ("");
        setText(newText)
    }
    const handleExtraSpaces = () => {

        let newText = text.split(/[ ]+/);
        setText(newText.join(" "))
    }
    const handleCopyClick = () => {
        var text = document.getElementById("myBox");
        text.select();
        navigator.clipboard.writeText(text.value);
    }
    const handleOnChange = (event) => {

        setText(event.target.value)
    }
    const [text, setText] = useState('');
    // const [mode, setMode] = useState({
    //     color: 'black',
    //     backgroundColor: 'white'
    // });
    // const [text1, setText1] = useState('Dark Mode');
    // const toggleDark = () => {
    //     if (mode.color === 'black') {
    //         setMode({
    //             color: 'white',
    //             backgroundColor: 'black'
    //         })
    //         // setText1('Light Mode')
    //     }
    //     else {
    //         setMode({
    //             color: 'black',
    //             backgroundColor: 'white'
    //         })
    //         // setText1('Dark Mode')
    //     }

    // }

    return (
        <>


            <div className="container my-3"  style={{backgroundColor: props.mode === 'dark' ? 'grey' : 'white' , color: props.mode === 'dark' ? 'white' : 'black' }} >
                <h1>{props.heading}</h1>
                <h2>{text.split(" ").length} words, {text.length}charcters</h2>
                <div className="mb-3" >

                    <textarea className="form-control" id="myBox" rows="8" value={text} onChange={handleOnChange} style={{backgroundColor: props.mode === 'dark' ? 'grey' : 'white' , color: props.mode === 'dark' ? 'white' : 'black'} }></textarea>
                </div>
                <button className="btn btn-primary mx-3 my-3" onClick={handleUpClick}>Convert to Upper case</button>
                <button className="btn btn-primary mx-3 my-3" onClick={handleLoClick}>Convert to Lower case</button>
                <button className="btn btn-primary mx-3 my-3" onClick={handleClearClick}>Clear Text</button>
                <button className="btn btn-primary mx-3 my-3" onClick={handleCopyClick}>Copy Text</button>
                <button className="btn btn-primary mx-3 my-3" onClick={handleExtraSpaces}>Remove Extra Spaces </button>
            </div>
            <div className="container "  style={{backgroundColor: props.mode === 'dark' ? 'grey' : 'white' ,  color: props.mode === 'dark' ? 'white' : 'black' }}>

                <h1>My text summary</h1>
                <p>{text.split(" ").length} words, {text.length}charcters</p>
                <p>You can read this in {0.008 * text.split(" ").length} minutes.</p>
                <h3>Preview</h3>
                <h5>{text.length>0?text:"Enter some text in the above box to preview here"}</h5>



            </div>
        </>
    )
}
