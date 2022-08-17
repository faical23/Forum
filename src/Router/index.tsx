import {
    BrowserRouter,
    Routes, // instead of "Switch"
    Route,
} from "react-router-dom";

  import Navbar from '../Layout/Navbar'
  import Home from '../Pages/Home'
  import Footer from '../Layout/Footer'
  import Articles from '../Pages/Articles'
  import Profil from '../Pages/Profil'
  import Article from '../Pages/Article'




const Routers = () => {
    return (
        <>
                    <Navbar />
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/Articles" element={<Articles />} />
                        <Route path="/Profile/:id" element={<Profil />} />
                        <Route path="/Article/:id" element={<Article />} />
                    </Routes>
                    <Footer />
        </>
    )
  };
  export default Routers;