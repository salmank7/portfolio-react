import { useParams } from "react-router-dom";
import { programmingBlogs } from "../components/blogs/blogsConstants";
import DOMPurify from "dompurify";

const PreviewBlog = () => {
  const { id } = useParams();
  const currentBlog = programmingBlogs.find((blog) => blog.id === parseInt(id));

  const sanitizedContent = {
    __html: DOMPurify.sanitize(currentBlog.content),
  };

  return (
    <div className="main-section-layout">
      <div className="preview__blog">
        <img
          src={currentBlog.image}
          alt={currentBlog.heading}
          className="preview__blog__image"
        />
        <div className="basic-layout">
          <div className="preview__blog__content">
            <div className="preview__blog__content__heading">
              <div className="preview__blog__content__header__author">
                Author: {currentBlog.author}
              </div>
              <h1 className="preview__blog__content__header__title">
                {currentBlog.title}
              </h1>
              <p className="preview__blog__content__header__date">
                {currentBlog.date}
              </p>
            </div>
            <div className="preview__blog__content__main">
              <h2 className="preview__blog__content__main__heading">
                {currentBlog.heading}
              </h2>
              <p>{currentBlog.description}</p>
              <div dangerouslySetInnerHTML={sanitizedContent} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PreviewBlog;
