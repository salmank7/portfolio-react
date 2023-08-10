import { AiFillCaretDown } from "react-icons/ai";
import { Link } from "react-router-dom";
import TypedComponent from "../components/TypedComponent";
import { motion } from "framer-motion";
import useActiveLink from "../hooks/useActiveLink";

const Home = () => {
  const activeLink = useActiveLink();
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.8 }}
      transition={{ duration: 0.3 }}
      className="home main-section-layout"
    >
      <div className="home__container">
        <div className="home__container__title">Jordan Smith</div>
        <div className="home__container__info">
          I am a <TypedComponent />
        </div>
      </div>
      <Link
      onClick={()=> {
        activeLink.activeLink = 2;
      }}
      to="/about" className="toggle-down">
        <AiFillCaretDown size={24} />
      </Link>
    </motion.div>
  );
};

export default Home;
