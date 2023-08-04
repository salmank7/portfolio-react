import { motion } from "framer-motion";
import PageHeader from "../components/PageHeader";
import { GoPerson } from "react-icons/go";
import Button from "../components/Button";
import { LiaLaptopSolid } from "react-icons/lia";
import SectionTitle from "../components/SectionTitle";
import ClientCarousel from "../components/ClientCarousel";
import TestimonialSlider from "../components/TestimonialsCarousel";

const About = () => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.8 }}
      transition={{ duration: 0.3 }}
      className="main-section-layout"
    >
      <div className="basic-layout">
        <PageHeader label="About Me" icon={GoPerson} />
        <div className="about__main">
          <div className="about__main__left">
            <h3 className="about__main__left__title">
              Frontend Developer & Designer
            </h3>
            <p className="about__main__left__description">
              Dolor reprehenderit aut repudiandae maiores recusandae.
              Consequatur dolor nisi labore commodi ipsa? Excepturi velit
              laboriosam at voluptatibus cupiditate est vel. Dolorem praesentium
              itaque fugiat placeat quas consequatur? Obcaecati natus rerum{" "}
              <br /> <br />
              Consectetur consectetur nesciunt nesciunt blanditiis amet? Quod
              quis unde aliquid excepturi laudantium? Illo architecto aliquam
              velit illo magnam neque perferendis sint Incidunt eius ipsa
              inventore labore eos velit. Minus hic magni reiciendis
              necessitatibus ex Quidem officia deleniti accusamus obcaecati
              dolores. Porro culpa quibusdam impedit porro praesentium
              excepturi. Alias ab consequatur?
            </p>
            <p className="about__main__left__signature">jordan smith</p>
          </div>
          <div className="about__main__right">
            <h3 className="about__main__right__title">Personal Information</h3>
            <div className="about__main__right__info">
              <p className="about__main__right__info__single">
                <span>Name:</span> Jordan Smith
              </p>
              <p className="about__main__right__info__single">
                <span>Age:</span> 26 Years
              </p>
              <p className="about__main__right__info__single">
                <span>Residence:</span> London, UK
              </p>
              <p className="about__main__right__info__single">
                <span>Address:</span> 123, Lorem ipsum
              </p>
              <p className="about__main__right__info__single">
                <span>Email:</span> salmank4954@gmail.com
              </p>
              <p className="about__main__right__info__single">
                <span>Phone:</span> (+1) 123 456 7890
              </p>
              <p className="about__main__right__info__single">
                <span>Freelance:</span> Available
              </p>
            </div>
            <Button label="Download Now" />
          </div>
        </div>
        {/* About Services */}
        <div className="about__services">
          <SectionTitle label="Services" />
          <div className="about__services__container">
            {/* single service */}
            <div className="about__services__container__service">
              <LiaLaptopSolid
                size={80}
                className="about__services__container__service__icon"
              />
              <div className="about__services__container__service__title">
                Web Development
              </div>
              <div className="about__services__container__service__description">
                Amet aspernatur delectus maxime ducimus similique Ratione
                asperiores corporis provident aut libero.
              </div>
            </div>
            {/* single service */}
            {/* single service */}
            <div className="about__services__container__service">
              <LiaLaptopSolid
                size={80}
                className="about__services__container__service__icon"
              />
              <div className="about__services__container__service__title">
                Web Development
              </div>
              <div className="about__services__container__service__description">
                Amet aspernatur delectus maxime ducimus similique Ratione
                asperiores corporis provident aut libero.
              </div>
            </div>
            {/* single service */}
            {/* single service */}
            <div className="about__services__container__service">
              <LiaLaptopSolid
                size={80}
                className="about__services__container__service__icon"
              />
              <div className="about__services__container__service__title">
                Web Development
              </div>
              <div className="about__services__container__service__description">
                Amet aspernatur delectus maxime ducimus similique Ratione
                asperiores corporis provident aut libero.
              </div>
            </div>
            {/* single service */}
            {/* single service */}
            <div className="about__services__container__service">
              <LiaLaptopSolid
                size={80}
                className="about__services__container__service__icon"
              />
              <div className="about__services__container__service__title">
                Web Development
              </div>
              <div className="about__services__container__service__description">
                Amet aspernatur delectus maxime ducimus similique Ratione
                asperiores corporis provident aut libero.
              </div>
            </div>
            {/* single service */}
          </div>
        </div>

        {/* Clinets */}
        <div className="about__clients">
          <SectionTitle label="Clients" />
          <ClientCarousel />
        </div>

        {/* testimonials */}
        <div className="about__testimonials">
          <SectionTitle label="Testimonials" />
          <TestimonialSlider />
        </div>
      </div>
    </motion.div>
  );
};

export default About;
