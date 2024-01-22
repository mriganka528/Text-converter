import React, { useState } from 'react'

export default function TextForm(props) {
    const [text, setText] = useState("");
    const doUpClick = () => {
        if (text.length === 0) {
            props.showAlert(" Enter some text", "warning");

        }
        else {
            let newUpp = text.toUpperCase();
            setText(newUpp);
            props.showAlert(" Converted to uppercase", "success");
        }

    }
    const doCopy = () => {
        if (text.length === 0) {
            props.showAlert(" No text to copy", "warning");

        }
        else {

            let text = document.getElementById("MyBox");
            text.select();
            navigator.clipboard.writeText(text.value);
            document.getSelection().removeAllRanges();
            props.showAlert(" Copied to clipboard", "success");
        }

    }
    const doLoClick = () => {
        if (text.length === 0) {
            props.showAlert(" Enter some text", "warning")
        }
        else {

            let newLo = text.toLocaleLowerCase();
            setText(newLo);
            props.showAlert(" Converted to lowercase", "success");
        }

    }
    const doCapClick = () => {
        if (text.length === 0) {
            props.showAlert(" Enter some text", "warning")
        }
        else {
            const arr = text.split(/\s+/);
            for (var i = 0; i < arr.length; i++) {
                arr[i] = arr[i].charAt(0).toUpperCase() + arr[i].slice(1);
            }
            const cap = arr.join(" ");
            props.showAlert(" Capitalized", "success");
            setText(cap);
        }

    }
    const doClClick = () => {
        if (text.length === 0) {
            props.showAlert(" No text to clear", "warning");
        }
        else {
            let newT = "";
            setText(newT);
            props.showAlert(" Text cleared", "success");
        }


    }
    const handleOnChanged = (event) => {
        setText(event.target.value);
    }
    return (
        <>
            <div style={{ color: props.mode === 'primary' ? 'rgb(30,30,30)' : '#F9F9F9', paddingInline: "1.5rem", marginTop:"4rem" }}>
                <h3 style={{ marginBottom: "1.5rem" }}>{props.heading}</h3>
                <div className="mb-3" >
                    <textarea className="form-control" value={text} onChange={handleOnChanged} id="MyBox" rows="8" style={{ backgroundColor: props.mode === 'primary' ? 'white' : '#191c1f', color: props.mode === 'primary' ? 'rgb(30,30,30)' : '#cacbcc' }} ></textarea>
                </div>
                <button className={`btn btn-${props.mode === 'primary' ? 'primary' : 'dark'} mx-1 my-1 `} onClick={doUpClick}>Convert to uppercase</button>
                <button className={`btn btn-${props.mode === 'primary' ? 'primary' : 'dark'} mx-1 my-1 `} onClick={doLoClick}>Convert to lowercase</button>
                <button className={`btn btn-${props.mode === 'primary' ? 'primary' : 'dark'} mx-1 my-1 `} onClick={doCapClick}>Capitalise</button>
                <button className={`btn btn-${props.mode === 'primary' ? 'primary' : 'dark'} mx-1 my-1 `} onClick={doCopy}>Copy text</button>
                <button className={`btn btn-${props.mode === 'primary' ? 'primary' : 'dark'} mx-1 my-1 `} onClick={doClClick}>Clear text</button>
            </div>
            <div className="container my-3" style={{ color: props.mode === 'primary' ? 'rgb(30,30,30)' : '#F9F9F9', paddingInline: "2rem" }}>
                <h3>Your text summary</h3>
                <p>{text.split(/\s+/).filter((element) => { return element.length !== 0 }).length} words and {text.length} characters</p>
                <p>It will take {0.008 * (text.split(/\s+/).filter((element) => { return element.length !== 0 }).length)} minutes to read</p>
                <h3>Preview</h3>
                <p style={{ textWrap: "wrap" }}>{text.length > 0 ? text : "Nothing to preview"}</p>
            </div>
        </>

    )
}
