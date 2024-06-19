import { Route, Routes } from "react-router-dom";
import "./App.css";
import Layout from "./layouts/Layouts";
import Home from "./pages/Home";
import About from "./pages/About";
import Contacts from "./pages/Contacts";
import Error from "./pages/Error";
import Portfolio from "./pages/Portfolio";
import Price from "./pages/Price";
import Services from "./pages/Services";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contacts" element={<Contacts />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/price" element={<Price />} />
          <Route path="/services" element={<Services />} />
          <Route path="*" element={<Error />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
