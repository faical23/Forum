

import React,{useState,useEffect} from 'react';
import Card from '../Compnents/Card'
import ArticleDetails from '../Compnents/ContentArticle'


function ContentArticle(props:any) {
  return (
          <div className="Content_Article">
              <div className="Content_Article_left">
                  <ArticleDetails/>
              </div>
              <div className="Content_Article_Right">
                  <h2 style={{textAlign: 'start',marginBottom:'20px'}}>Recommended</h2>
                  <Card/>
                  <Card/>
              </div>
          </div>
  );
}

export default ContentArticle;