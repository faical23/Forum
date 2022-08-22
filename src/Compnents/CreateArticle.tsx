import React,{useState,useEffect} from 'react';
import { Editor } from "@tinymce/tinymce-react";




function CreateArticle(props:any) {
  const [content,Setcontent] = useState<any>('')
  // constructor(props) {
  //   super(props);
  //   this.state = { content: "" };

  //   this.handleChange = this.handleChange.bind(this);
  //   this.handleSubmit = this.handleSubmit.bind(this);
  // }

  const handleChange = (event:any) => {
    Setcontent(event.target.value)
  }
  const handleSubmit = (event:any) => {
    alert("Text was submitted: " + content);
    Setcontent(event.target.value)
    event.preventDefault();
  }

  // handleSubmit(event) {
  //   alert("Text was submitted: " + this.state.content);
  //   event.preventDefault();
  // }
  return (
    <div className="CreateArticle">

    <div className="container">
      <span className="error animated tada" id="msg"></span>
      <img className="Close"  onClick={()=>{props.SetOpenCreate(false)}}    src={require('../Style/Img/shutdown.png')} alt="" />
      <form name="form1" className="box"  onSubmit={(e)=>{handleSubmit(e)}}>
          <h5>Create Article.</h5>
                <input type="text" placeholder="Title" style={{backgroundColor:'white',width:'90%',color:'black'}} />
                <Editor
                  value={content}
                  init={{
                    height: 500,
                    menubar: false
                  }}
                  onEditorChange={(e)=>{handleChange(e)}}
                />
                <br />
                <div style={{background: "white", width: "90%",margin: "20px auto",borderRadius: "5px"}}>
                  <img  className="AddImg"  style={{cursor:'pointer',width: '20%'}} src={require('../Style/Img/addImg.png')} alt="" />
                </div>
                <input type="submit" value="Submit" className="btn1" style={{position: 'initial'}} />
      </form>
  </div> 
  </div>

  );
}

export default CreateArticle;