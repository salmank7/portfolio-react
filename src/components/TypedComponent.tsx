import React, { useEffect, useState } from "react";

const TypedComponent = () => {
  const [typedText, setTypedText] = useState("");
  const jobTitles = [
    "Web Developer",
    "Frontend Developer",
    "Software Engineer",
  ];
  const typingSpeed = 70;
  const pauseDuration = 1000;

  useEffect(() => {
    let currentJobIndex = 0;
    let currentText = "";
    let currentIndex = 0;

    const typingInterval = setInterval(() => {
      currentText += jobTitles[currentJobIndex][currentIndex];
      setTypedText(currentText);
      currentIndex++;

      if (currentIndex === jobTitles[currentJobIndex].length) {
        clearInterval(typingInterval);
        setTimeout(() => {
          eraseText();
        }, pauseDuration);
      }
    }, typingSpeed);

    const eraseText = () => {
      const erasingInterval = setInterval(() => {
        currentText = currentText.slice(0, -1);
        setTypedText(currentText);
        if (currentText === "") {
          clearInterval(erasingInterval);
          currentJobIndex = (currentJobIndex + 1) % jobTitles.length;
          currentIndex = 0;
          setTimeout(() => {
            startTyping();
          }, typingSpeed);
        }
      }, typingSpeed);
    };

    const startTyping = () => {
      const typingInterval = setInterval(() => {
        currentText += jobTitles[currentJobIndex][currentIndex];
        setTypedText(currentText);
        currentIndex++;

        if (currentIndex === jobTitles[currentJobIndex].length) {
          clearInterval(typingInterval);
          setTimeout(() => {
            eraseText();
          }, pauseDuration);
        }
      }, typingSpeed);
    };

    return () => {
      clearInterval(typingInterval);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return <span className="typed">{typedText}</span>;
};

export default TypedComponent;
