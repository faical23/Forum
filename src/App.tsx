import NavBar from './Layout/Navbar'
import Hero from './Layout/Hero'
import PopulareArticle from './Compnents/PopuparArticle'
import RecommendedArticle from './Compnents/RecommendedArticle'
import Footer from './Layout/Footer'
import Login from './Compnents/Login'

function App() {
  return (
    <div className="App">
          <Login/>
          <NavBar/>
          <Hero/>
          <RecommendedArticle/>
          <PopulareArticle/>
          <Footer/>
    </div>
  );
}

export default App;
