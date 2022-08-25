import React,{useState,useEffect,useRef} from 'react';
import { Editor } from "@tinymce/tinymce-react";
import {Article} from '../Interfaces'
import { TagsInput } from "react-tag-input-component";
import '../Style/Navbar.css'
import { useAppSelector } from '../Hooks'





function CreateArticle(props:any) {
  const UserInfo = useAppSelector((state) => state.User)
  const ImgtRef = useRef<HTMLInputElement>(null);
  const [ImgArticle,SetImgArticle] = useState<any>("")
  const [ContentArticle,SetMyContentArticle] = useState<Article>({
    title: "",
    Text: "",
    Img: "",
    UserId: UserInfo?.id,
    NumberLike:0,
    Comment: 0,
    NumberSaved:0,
    tags:[],
    date:new Date(),
    TimeRead:14
  })

  const GetArticleInfo = (key:string,value:any) =>{
    let newstate = ContentArticle
    newstate[key] = value
    if(key === "Img"){
      newstate["Img"] = value.target.files[0]
      let reader = new FileReader();
      reader.onload = function(e) {
        SetImgArticle(reader.result)
      }
      reader.readAsDataURL(value.target.files[0]);
    }
    SetMyContentArticle(newstate)

  }


  const handleSubmit = (event:any) => {
    console.log("dd ==> ", ContentArticle)
  }


  return (
    <div className="CreateArticle">

    <div className="container">
      <span  className="error animated tada" id="msg"></span>
      <img className="Close"  onClick={()=>{props.SetOpenCreate(false)}}    src={require('../Style/Img/shutdown.png')} alt="" />
      <form name="form1" className="box"  >
          <h5 style={{margin:'20px'}}>Create Article.</h5>
                <input onChange={(e)=>{GetArticleInfo("title",e.target.value)}} type="text" placeholder="Title" style={{backgroundColor:'white',width:'90%',color:'black'}} />
                <TagsInput
                  value={ContentArticle.tags}
                  onChange={(e)=>{GetArticleInfo("tags",e)}}
                  name="Tags"
                  placeHolder="entrer Tags"
                />
                <Editor
                  value={ContentArticle.Text}
                  init={{
                    height: 500,
                    menubar: false
                  }}
                  onEditorChange={(e)=>{GetArticleInfo("Text",e)}}
                />
                <br />
                <div className="AddImgArticle" style={{background: "white", width: "90%",margin: "20px auto",borderRadius: "5px"}}>
                  {
                    ImgArticle == "" ?
                    <img  onClick={()=>{ImgtRef.current?.click()}} className="AddImg"  style={{cursor:'pointer',width: "10%", objectFit:'cover'}} src={require('../Style/Img/addImg.png')} alt="" />
                    :
                    <img style={{cursor:'pointer',width: "15%", objectFit:'cover'}}  src={ImgArticle} alt="" onClick={()=>{ImgtRef.current?.click()}} />
                  }
                  <input type="file" hidden  ref={ImgtRef} onChange={(e)=>{GetArticleInfo('Img',e)}} />
                </div>
                <button onClick={(e)=>{
                  e.preventDefault();
                  handleSubmit(e)
                  }} className="btn1" style={{position: 'initial'}}>Submit</button>
      </form>
  </div> 
  </div>

  );
}

export default CreateArticle;