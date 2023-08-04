import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import TestImage from "../assets/images/hero.jpg"
import {FaQuoteLeft} from "react-icons/fa"
// import './TestimonialSlider.css'; // Create a custom CSS file for styling the carousel if needed

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

  // Dummy testimonial data (replace with your actual content)
  const testimonials = [
    {
      id: 1,
      name: 'John Doe',
      quote: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed quis sem sit amet magna cursus scelerisque vel vel lorem.',
    },
    {
      id: 2,
      name: 'Jane Smith',
      quote: 'Suspendisse posuere purus id arcu venenatis, et tristique nunc consectetur. Nunc laoreet ultricies felis, non viverra nisi.',
    },
    {
      id: 3,
      name: 'Michael Johnson',
      quote: 'Phasellus interdum odio nec varius commodo. Nulla facilisi. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae.',
    },
  ];

  return (
    <div>
      <Slider {...settings}>
        {testimonials.map((testimonial) => (
          <div key={testimonial.id} className="testimonial">
            <div className="quote">
                <div className='quote__sign'><FaQuoteLeft size={50}/></div>
                <div>{testimonial.quote}</div>
            </div>
            <div className="person">
                <img src={TestImage} alt="Testimonial Image" />
                <div className='person__info'>
                    <div className='person__info__name'>{testimonial.name}</div>
                    <div className='person__info__profession'>Creative Designer</div>
                </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default TestimonialSlider;
