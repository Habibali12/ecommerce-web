import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Header } from "./component/Header";
import { Home } from "./pages/Home";
import { About } from "./pages/About";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route exact={true} path="/" element={<Home />} />
        <Route exact={true} path="/about" element={<About />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
