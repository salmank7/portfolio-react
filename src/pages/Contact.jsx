import { useRef, useState } from "react";
import { motion } from "framer-motion";
import { AiFillPhone, AiOutlineContacts, AiTwotoneMail } from "react-icons/ai";
import { ImLocation } from "react-icons/im";
import emailjs from "@emailjs/browser";
import PageHeader from "../components/PageHeader";
import Button from "../components/Button";

const Contact = () => {
  const form = useRef();
  const [formValues, setFormValues] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormValues((prevValues) => ({ ...prevValues, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (
      formValues.name.trim() === "" ||
      formValues.email.trim() === "" ||
      formValues.message.trim() === ""
    ) {
      alert("Please fill in all the fields before submitting.");
      return;
    }

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(formValues.email)) {
      alert("Please enter a valid email address.");
      return;
    }

    // Use emailjs to send the form data
    emailjs
      .sendForm(
        "YOUR_SERVICE_ID",
        "YOUR_TEMPLATE_ID",
        form.current, // Use the form element itself
        "YOUR_PUBLIC_KEY"
      )
      .then(
        (result) => {
          console.log(result.text);
          alert("Form submitted successfully!");

          // Reset form fields after successful submission
          setFormValues({
            name: "",
            email: "",
            message: "",
          });
        },
        (error) => {
          console.log(error.text);
          alert("An error occurred while submitting the form.");
        }
      );
  };

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.8 }}
      transition={{ duration: 0.3 }}
      className="main-section-layout"
    >
      <div className="basic-layout">
        <PageHeader label="Contact" icon={AiOutlineContacts} />
        <div className="contact">
          <div className="section-title">Let&apos;s Talk</div>
          <form className="contact__main" onSubmit={handleSubmit} ref={form}>
            <div className="contact__main__name">
              <label htmlFor="name">Name</label>
              <input
                type="text"
                name="name"
                id="name"
                required
                tabIndex={1}
                onChange={handleInputChange}
                value={formValues.name}
              />
            </div>
            <div className="contact__main__email">
              <label htmlFor="email" className="label">
                Email
              </label>
              <input
                type="email"
                name="email"
                id="email"
                required
                tabIndex={2}
                onChange={handleInputChange}
                value={formValues.email}
              />
            </div>
            <div className="contact__main__message">
              <label htmlFor="message">How can we help you?</label>
              <textarea
                name="message"
                id="message"
                cols="30"
                rows="10"
                required
                tabIndex={3}
                onChange={handleInputChange}
                value={formValues.message}
              ></textarea>
            </div>
            <div className="submit__button">
              <Button label="send message" action={handleSubmit} />
            </div>
          </form>
          <div className="contact__personal__information">
            <div className="contact__personal__information__email">
              <AiTwotoneMail size={30} className="icon" />
              <div>salmank4954@gmail.com</div>
            </div>
            <div className="contact__personal__information__address">
              <ImLocation size={30} className="icon" />
              <div>239 New york, USA</div>
            </div>
            <div className="contact__personal__information__phone">
              <AiFillPhone size={30} className="icon" />
              +92 3245234232
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Contact;
