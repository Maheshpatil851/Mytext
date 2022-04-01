import React, { useState } from 'react'

export default function TextForms(props) {
    
     const Convertup =()=>{
        //  console.log("convertup is fired " + text)
         let newtext = text.toUpperCase();
         setText(newtext);
         props.ShowAlert('Converted to Uppercase','success')
     }
      const ConvertLo =()=>{
        // console.log("convertup is L " + text)
        let newtext = text.toLowerCase();
        setText(newtext);
        props.ShowAlert('Converted to Lowercase','success')
     }
     const ConvertupChange=(event)=>{
        // console.log("on change ")
        setText(event.target.value)

     }


    const [text, setText] = useState('enter text here')
    return (
        <>
        <div className='container' style ={{color: props.mode==='dark'?'white':'black'}}>
            <h1>{props.heading}</h1>
            <div className='mb-3'>
                <textarea className='form-control' value={text} onChange={ConvertupChange} style={{backgroundColor :props.mode==='dark'?'grey':'white',color:props.mode==='dark'?'white':'black'}} id='MyBox' rows='8'></textarea>
            </div>
            <button className='btn btn-primary mx-2 my-1' onClick={Convertup}>Convert To Uppercase</button>
            <button className='btn btn-primary mx-2 my-1' onClick={ConvertLo}>Convert To Lowercase</button>

        </div>
        <div className='container' style = {{color: props.mode==='dark'?'white':'black'}}>
            <h2 my-3='true'>your text summary</h2>
            <p><b>Words</b> ={text.split(' ').filter((element)=>{return element.length!==0}).length}</p>
            <p><b>characters</b> = {text.length}</p>

            <h2>PREVIEW</h2>
            <p >{text ===''?'enter text to preview':text}</p>



        </div>
        </>
    )
}
