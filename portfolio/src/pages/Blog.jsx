import { motion } from "framer-motion";
import PageHeader from "../components/PageHeader";
import { BsNewspaper } from "react-icons/bs";
import { programmingBlogs } from "../components/blogs/blogsConstants";
import BlogCard from "../components/blogs/BlogCard";

const Blog = () => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.8 }}
      transition={{ duration: 0.3 }}
      className="main-section-layout"
    >
      <div className="basic-layout">
        <PageHeader label="Blogs" icon={BsNewspaper} />
        <div className="blogs">
          {programmingBlogs.map((blog, index) => (
            <BlogCard key={index} blog={blog} />
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default Blog;
