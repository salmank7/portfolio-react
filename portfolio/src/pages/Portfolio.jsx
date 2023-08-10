import PageHeader from "../components/PageHeader";
import { BsPersonWorkspace } from "react-icons/bs";
import Gallery from "../components/portfolio/Gallery";
import { motion } from "framer-motion";

const Portfolio = () => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.8 }}
      transition={{ duration: 0.3 }}
      className="main-section-layout"
    >
      <div className="basic-layout">
        <PageHeader label="Portfolio" icon={BsPersonWorkspace} />
        <Gallery />
      </div>
    </motion.div>
  );
};

export default Portfolio;
