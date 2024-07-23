import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Header } from "./component/Header";
import { Footer } from "./component/Footer";
import { Home } from "./pages/Home";
import { About } from "./pages/About";
import { Category } from "./pages/Category";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route exact={true} path="/" element={<Home />} />
        <Route exact={true} path="/about" element={<About />} />
        <Route exact={true} path="/category" element={<Category />} ></Route>
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
