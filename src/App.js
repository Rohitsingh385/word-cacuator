import React,{useState} from 'react';



  const App=()=>{
  const[initialText,setText]=useState("");
  const [preText,setPretext]=useState("");
  const clearData=()=>{
      setText("");
  }
  const handleData=(e)=>{
    setText(e.target.value)
  }
 const pretextt=()=>{
   setPretext(initialText);
 }

    return(
  <>
  <div className="container my-5">
    <textarea name="" id="" cols="30" rows="10" className="w-100" onChange={handleData} value={initialText}>{initialText}</textarea>
    <button className="btn btn-dark" onClick={clearData}>clear</button>
    <p className="my-5">{preText}</p>
    <button className="btn btn-success" onClick={pretextt}>Preview</button>
    <p className="text-center text-warning">{preText.length} no. of chara</p>
    <p className="text-center text-warning">{preText.split(" ").length} no. of words</p>
  </div>
  </>
    )
  };
    

export default App;