import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const BlogCard = ({ blog }) => {
  const shortTitle = blog.title.substring(0, 35) + "..";
  return (
    <Link
      to={`/blogs/${blog.id}/${encodeURIComponent(blog.title)}`}
      className="blog__card"
    >
      <img src={blog.image} alt="BlogImage" className="blog__card__image" />
      <div className="blog__card__information">
        <div className="author">{blog.author}</div>
        <div className="title">{shortTitle}</div>
        <div className="date">{blog.date}</div>
      </div>
    </Link>
  );
};

BlogCard.propTypes = {
  blog: PropTypes.object.isRequired,
};

export default BlogCard;
