import NavBar from './Layout/Navbar'
import Hero from './Layout/Hero'
import PopulareArticle from './Compnents/PopuparArticle'
import RecommendedArticle from './Compnents/RecommendedArticle'
import Footer from './Layout/Footer'
import Login from './Compnents/Login'
import SideBare from './Layout/SideBar'
import Card from './Compnents/Card'
import Article from './Compnents/Article'
import ArticleDetails from './Compnents/ContentArticle'
import Router from './Router'

function App() {
  return (
    <div className="App">
        <Router/>
          {/* <Login/> */}
          {/* <NavBar/> */}
          {/* <div className="Core">
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
                    <Article/>
                    <Article/>
                    <Article/>
                    <Article/>
                    <Article/>
                    <Article/>
                    <Article/>
                    <Article/>
                    <Article/>

                </section>
              </div>
              <div className="Core_Right">
                <h2 style={{textAlign: 'start',marginBottom:'20px'}}>Recommended</h2>
                <Card/>
                <Card/>
              </div>
          </div> */}
          {/* <div className="Content_Article">
              <div className="Content_Article_left">
                  <ArticleDetails/>
              </div>
              <div className="Content_Article_Right">
                  <h2 style={{textAlign: 'start',marginBottom:'20px'}}>Recommended</h2>
                  <Card/>
                  <Card/>
              </div>
          </div> */}
          {/* <Hero/>
          <RecommendedArticle/>
          <PopulareArticle/> */}
          {/* <Footer/> */}
    </div>
  );
}

export default App;
