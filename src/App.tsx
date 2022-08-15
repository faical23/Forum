import NavBar from './Layout/Navbar'
import Hero from './Layout/Hero'
import PopulareArticle from './Compnents/PopuparArticle'
import RecommendedArticle from './Compnents/RecommendedArticle'
import Footer from './Layout/Footer'
import Login from './Compnents/Login'
import SideBare from './Layout/SideBar'
import Card from './Compnents/Card'
import Article from './Compnents/Article'

function App() {
  return (
    <div className="App">
          {/* <Login/> */}
          <NavBar/>
          <div className="Core">
              <div className="Core_Left">
                <SideBare/>
                <h2 style={{textAlign: 'start',marginBottom:'20px'}}>Recommended</h2>
                <Card/>
              </div>
              <div className="Core_Midlle">
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
          </div>
          {/* <Hero/>
          <RecommendedArticle/>
          <PopulareArticle/> */}
          <Footer/>
    </div>
  );
}

export default App;
