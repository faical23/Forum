

import React,{useState,useEffect} from 'react';
import Comment from './Comment'


function Artcile(props:any) {
  return (
    <div className="Article_details">
      <div  className="Article_Content_Icons">
          <img style={{width:"40px",height:"40px"}} src={require('../Style/Img/heart.png')} alt="" />
          <h6>256</h6>
          <svg xmlns="http://www.w3.org/2000/svg" height="40px"  viewBox="0 0 24 24" width="40px" fill="#000000"><path d="M0 0h24v24H0V0z" fill="none"/><path d="M20 2H4c-1.1 0-2 .9-2 2v18l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm0 14H6l-2 2V4h16v12zM7 9h2v2H7zm4 0h2v2h-2zm4 0h2v2h-2z"/></svg>
          <h6>343</h6>
          <svg className="Active" xmlns="http://www.w3.org/2000/svg" height="'0px" viewBox="0 0 24 24" width="'0px" fill="#000000"><path d="M0 0h24v24H0V0z" fill="none"/><path d="M17 3H7c-1.1 0-2 .9-2 2v16l7-3 7 3V5c0-1.1-.9-2-2-2zm0 15l-5-2.18L7 18V5h10v13z"/></svg>
          <h6>343</h6>

      </div>
      <div  className="Article_Content_Details">
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
                  <h1>JavaScript - How to create beautiful fireworks effects with tsParticles</h1>
                  <ul className="tags">
                      <li className="tag-item">#Kotlin</li>
                      <li className="tag-item">#Android</li>
                      <li className="tag-item">#Node js</li>
                      <li className="tag-item">#Laravel</li>
                  </ul>
                  <p className="description">Le Lorem Ipsum est simplement du faux texte employé dans la composition et la mise en page avant impression. Le Lorem Ipsum est le faux texte standard de l'imprimerie depuis les années 1500, quand un imprimeur anonyme assembla ensemble des morceaux de texte pour réaliser un livre spécimen de polices de texte. Il n'a pas fait que survivre cinq siècles, mais s'est aussi adapté à la bureautique informatique, sans que son contenu n'en soit modifié. Il a été popularisé dans les années 1960 grâce à la vente de feuilles Letraset contenant des passages du Lorem Ipsum, et, plus récemment, par son inclusion dans des applications de mise en page de texte, comme Aldus PageMaker.
                  Le Lorem Ipsum est simplement du faux texte employé dans la composition et la mise en page avant impression. Le Lorem Ipsum est le faux texte standard de l'imprimerie depuis les années 1500, quand un imprimeur anonyme assembla ensemble des morceaux de texte pour réaliser un livre spécimen de polices de texte. Il n'a pas fait que survivre cinq siècles, mais s'est aussi adapté à la bureautique informatique, sans que son contenu n'en soit modifié. Il a été popularisé dans les années 1960 grâce à la vente de feuilles Letraset contenant des passages du Lorem Ipsum, et, plus récemment, par son inclusion dans des applications de mise en page de texte, comme Aldus PageMaker.
                  Le Lorem Ipsum est simplement du faux texte employé dans la composition et la mise en page avant impression. Le Lorem Ipsum est le faux texte standard de l'imprimerie depuis les années 1500, quand un imprimeur anonyme assembla ensemble des morceaux de texte pour réaliser un livre spécimen de polices de texte. Il n'a pas fait que survivre cinq siècles, mais s'est aussi adapté à la bureautique informatique, sans que son contenu n'en soit modifié. Il a été popularisé dans les années 1960 grâce à la vente de feuilles Letraset contenant des passages du Lorem Ipsum, et, plus récemment, par son inclusion dans des applications de mise en page de texte, comme Aldus PageMaker.
                  Le Lorem Ipsum est simplement du faux texte employé dans la composition et la mise en page avant impression. Le Lorem Ipsum est le faux texte standard de l'imprimerie depuis les années 1500, quand un imprimeur anonyme assembla ensemble des morceaux de texte pour réaliser un livre spécimen de polices de texte. Il n'a pas fait que survivre cinq siècles, mais s'est aussi adapté à la bureautique informatique, sans que son contenu n'en soit modifié. Il a été popularisé dans les années 1960 grâce à la vente de feuilles Letraset contenant des passages du Lorem Ipsum, et, plus récemment, par son inclusion dans des applications de mise en page de texte, comme Aldus PageMaker.
                  </p>
                  <div className='Article_Content_Comment'>
                      <Comment/>
                  </div>
          </div>

      </div>

    </div>
  );
}

export default Artcile;