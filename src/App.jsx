import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Blog from "./pages/Blog";
import Contact from "./pages/Contact";
import Listing from "./pages/Listing";
import Page from "./pages/Page";


function App() {
  return (
    <div>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/listing" element={<Listing />} />
        <Route path="/pages" element={<Page />} />
      </Routes>
    </div>
  );
}

export default App;
