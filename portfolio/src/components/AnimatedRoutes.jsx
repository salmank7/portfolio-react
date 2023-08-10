import { Route, Routes, useLocation } from "react-router";
import BasicOutlet from "./BasicOutlet";
import Home from "../pages/Home";
import About from "../pages/About";
import Contact from "../pages/Contact";
import Blog from "../pages/Blog";
import Portfolio from "../pages/Portfolio";
import Resume from "../pages/Resume";

import { AnimatePresence } from "framer-motion";
import PreviewBlog from "../pages/PreviewBlog";

const AnimatedRoutes = () => {
  const location = useLocation();
  return (
    <AnimatePresence>
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<BasicOutlet />}>
          <Route index element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/resume" element={<Resume />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/blogs" element={<Blog />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="blogs/:id/:title" element={<PreviewBlog />} />
        </Route>
      </Routes>
    </AnimatePresence>
  );
};

export default AnimatedRoutes;
