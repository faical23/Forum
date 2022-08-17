

import React,{useState,useEffect} from 'react';
import SideBare from '../Layout/SideBar'
import Card from '../Compnents/Card'
import Article from '../Compnents/Article'
import { Link } from 'react-router-dom';



function Articles(props:any) {
  return (
           <div className="Core">
              <div className="Core_Left">
                <SideBare/>
                <h2 style={{textAlign: 'start',marginBottom:'20px'}}>Recommended</h2>
                <Card/>
              </div>
              <div className="Core_Midlle">
                <div className="Core_Core_Midlle_Filter" style={{padding: '17px 10%',display: 'flex',alignItems: 'start',justifyContent: 'space-between'}}>
                  <div style={{display: 'flex',alignItems: 'center'}}>
                    <h6 className='ActiveFilter'>Relevant</h6>
                    <h6>Latest</h6>
                    <h6>Top</h6>
                  </div>
                  <div style={{display: 'flex',alignItems: 'center'}}>
                    <h6>Week</h6>
                    <h6>Month</h6>
                    <h6 className='ActiveFilter'>Year</h6>
                    <h6 >Infinity</h6>
                  </div>
                </div>
                <section className="articles">
                  <Link to='/article/7355'>
                      <Article/>
                  </Link>
                  <Link to='/article/7355'>
                      <Article/>
                  </Link>
                  <Link to='/article/7355'>
                      <Article/>
                  </Link>
                  <Link to='/article/7355'>
                      <Article/>
                  </Link>
                  <Link to='/article/7355'>
                      <Article/>
                  </Link>
                  <Link to='/article/7355'>
                      <Article/>
                  </Link>


                </section>
              </div>
              <div className="Core_Right">
                <h2 style={{textAlign: 'start',marginBottom:'20px'}}>Recommended</h2>
                <Card/>
                <Card/>
              </div>
          </div>
  );
}

export default Articles;