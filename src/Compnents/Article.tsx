

import React,{useState,useEffect} from 'react';


function Artcile(props:any) {

  const [PostLiked,SetPostLiked]=useState(false)

  const LikeThisPost = () =>{
    console.log("dd")
      SetPostLiked(!PostLiked)
  }
  return (
    <div className="Article">
        <article className="card">
          <div className="header">
            <img className="thumbnail" src="https://kotlinlang.org/assets/images/twitter/general.png" alt="thumbnail" />
          </div>
          <div className="body">
          <div className="AvatarAndName">
                    <img src={require('../Style/Img/Avatar.png')} alt="" />
                    <div className="">
                        <h6>faical bahsis</h6>
                        <p>feb 06,2022</p>
                    </div>
          </div>
            <h3 className="title">Useful Kotlin Extension Functions For Android Development</h3>
            <ul className="tags">
              <li className="tag-item">#Kotlin</li>
              <li className="tag-item">#Android</li>
              <li className="tag-item">#Node js</li>
              <li className="tag-item">#Laravel</li>
            </ul>

            </div>
            <div className="Post__Icons">
                <div className="LeftIcons">
                    <h6>256</h6>
                    <img style={{width:"30px",height:"30px"}} src={require('../Style/Img/heart.png')} alt="" />
                    <h6>343</h6>
                    <svg xmlns="http://www.w3.org/2000/svg" height="24px"  viewBox="0 0 24 24" width="24px" fill="#000000"><path d="M0 0h24v24H0V0z" fill="none"/><path d="M20 2H4c-1.1 0-2 .9-2 2v18l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm0 14H6l-2 2V4h16v12zM7 9h2v2H7zm4 0h2v2h-2zm4 0h2v2h-2z"/></svg>
                </div>
                <div className="RightIcons">
                    6 min
                    <button>Save</button>
                </div>
            </div>
        </article>
    </div>
  );
}

export default Artcile;