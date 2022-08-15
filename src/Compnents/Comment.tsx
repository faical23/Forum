

import React,{useState,useEffect} from 'react';


function Artcile(props:any) {
  return (
    <div className="Comment">
        <h2>Comment (4)</h2>
        <div className="comments-app" ng-app="commentsApp" ng-controller="CommentsController as cmntCtrl">
          
          <div className="comment-form">
            <div className="comment-avatar">
              <img src={require('../Style/Img/Avatar.png')} alt="" />
            </div>

            <form className="form" name="form">
              <div className="form-row">
                <textarea
                          className="input"
                          ng-model="cmntCtrl.comment.text"
                          placeholder="Add comment..."
                          required></textarea>
              </div>

              <div className="form-row">
                <input
                      className="input"
                      placeholder="Email"
                      type="email"/>
              </div>

              <div className="form-row text-right">
                <input
                      id="comment-anonymous"
                      type="checkbox"
                />
                <label>Anonymous</label>
              </div>

              <div className="form-row">
                <input type="submit" value="Add Comment"/>
              </div>
            </form>
          </div>

          <div className="comments">
            <div className="comment" ng-repeat="comment in cmntCtrl.comments | orderBy: '-date'">
              <div className="comment-avatar">
              <img src={require('../Style/Img/Avatar.png')} alt="" />
              </div>

              <div className="comment-box">
                <div className="comment-text">
                  Le Lorem Ipsum est simplement du faux texte employé dans la composition et la mise en page avant impression. Le Lorem Ipsum est le faux texte standard de l'imprimerie depuis les années 1500, quand un imprimeur anonyme assembla
                </div>
                <div className="comment-footer">
                  <div className="comment-info">
                    <span className="comment-author">
                      <em ng-if="comment.anonymous">Anonymous </em>
                      <a ng-if="!comment.anonymous"> faical bahsis</a>
                    </span>
                    <span className="comment-date">feb , 22 , 2022</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="Icons_Comment" style={{display: 'flex',alignItems: 'center',padding:'0px 11%'}}>
              <p style={{padding:'0px 4px'}}>54</p>
              <svg style={{cursor:'pointer'}} xmlns="http://www.w3.org/2000/svg" width="24" height="24" role="img" aria-labelledby="anqsjpd14ugs32q7hr1b7gy1ymuqschj" ><title id="anqsjpd14ugs32q7hr1b7gy1ymuqschj">Like comment: </title><path d="M18.884 12.595l.01.011L12 19.5l-6.894-6.894.01-.01A4.875 4.875 0 0112 5.73a4.875 4.875 0 016.884 6.865zM6.431 7.037a3.375 3.375 0 000 4.773L12 17.38l5.569-5.569a3.375 3.375 0 10-4.773-4.773L9.613 10.22l-1.06-1.062 2.371-2.372a3.375 3.375 0 00-4.492.25v.001z"></path></svg>
              <p style={{padding:'0px 4px'}}>3</p>
              <svg style={{cursor:'pointer'}} width="24" height="24" xmlns="http://www.w3.org/2000/svg"><path d="M10.5 5h3a6 6 0 110 12v2.625c-3.75-1.5-9-3.75-9-8.625a6 6 0 016-6zM12 15.5h1.5a4.501 4.501 0 001.722-8.657A4.5 4.5 0 0013.5 6.5h-3A4.5 4.5 0 006 11c0 2.707 1.846 4.475 6 6.36V15.5z"></path></svg>
              <p style={{padding:'0px 1px'}}>Repley</p>
            </div>
          </div>
        </div>

    </div>
  );
}

export default Artcile;