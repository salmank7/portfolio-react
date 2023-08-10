import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { FaQuoteLeft } from "react-icons/fa";
import { testimonials } from "./aboutConstants";

const TestimonialSlider = () => {
  const settings = {
    dots: false,
    arrows: false,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 1000,
    speed: 300, // Change slide every 5 seconds (adjust as needed)
    slidesToShow: 2,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div>
      <Slider {...settings}>
        {testimonials.map((testimonial) => (
          <div key={testimonial.id} className="testimonial">
            <div className="quote">
              <div className="quote__sign">
                <FaQuoteLeft size={50} />
              </div>
              <div>{testimonial.quote}</div>
            </div>
            <div className="person">
              <img src={testimonial.imageSrc} alt="Testimonial Image" />
              <div className="person__info">
                <div className="person__info__name">{testimonial.name}</div>
                <div className="person__info__profession">
                  Creative Designer
                </div>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default TestimonialSlider;
