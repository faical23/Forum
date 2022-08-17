

import React,{useState,useEffect} from 'react';
import Hero from '../Layout/Hero'
import PopulareArticle from '../Compnents/PopuparArticle'
import RecommendedArticle from '../Compnents/RecommendedArticle'


function Artcile(props:any) {
  return (
    <div className="HomePage">
          <Hero/>
          <PopulareArticle/>
          <RecommendedArticle/>
    </div>
  );
}

export default Artcile;