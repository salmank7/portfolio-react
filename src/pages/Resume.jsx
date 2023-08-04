import PageHeader from "../components/PageHeader";
import { ImProfile } from "react-icons/im";
import ResumeComponent from "../components/resume/ResumeComponent";
import { education, experience } from "../components/resume/resumeConstants";
import { motion } from "framer-motion";

const Resume = () => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.8 }}
      transition={{ duration: 0.3 }}
      className="main-section-layout"
    >
      <div className="basic-layout">
        <PageHeader label="My Resume" icon={ImProfile} />
        <div className="resume__container">
          {/* Experience */}
          <ResumeComponent label="Experience" data={experience} />
          {/* Education */}
          <ResumeComponent label="Education" data={education} />
        </div>
      </div>
    </motion.div>
  );
};

export default Resume;
