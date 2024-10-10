import Header from "./Header";
import { BrowserRouter, Routes, Route, Router } from "react-router-dom";
import Home from "../pages/Home";
import About from "../pages/About";
import Footer from "./Footer";
import Error from "../pages/Error";
import Logement from "../pages/Logement";

const App = () => {
  return (
    <BrowserRouter>
      <main id="main-content" role="main">
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="annonce/:id" element={<Logement />} />
          <Route path="*" element={<Error />} />
        </Routes>
        <Footer />
      </main>
    </BrowserRouter>
  );
};

export default App;