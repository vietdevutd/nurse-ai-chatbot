import React, { useEffect } from "react";
import Typed from "typed.js";

const TypedReact = () => {
  // Create reference to store the DOM element containing the animation
  const el = React.useRef(null);
  // Create reference to store the Typed instance itself
  const typed = React.useRef(null);

  useEffect(() => {
    setTimeout(() => {
      const options = {
        showCursor: true,
        strings: [
          "Our intelligent chatbot is designed to provide you with accurate and up-to-date information on a wide range of health topics, from common symptoms and treatments to tips for staying healthy and active.",
          "Whether you're looking for personalized advice or just need someone to talk to, NurseAI is here to help.",
          "Simply type in your question or concern and let our chatbot guide you to the information you need.",
          "Thank you for choosing NurseAI as your trusted healthcare companion."
        ],
        typeSpeed: 50,
        backSpeed: 0,
        backDelay: 4000,
        loop: true
      };

      // elRef refers to the <span> rendered below
      typed.current = new Typed(el.current, options);

      return () => {
        // Make sure to destroy Typed instance during cleanup
        // to prevent memory leaks
        typed.current.destroy();
      };
    }, 1000);
  }, []);

  return (
    <div>
      <h3>
        <span ref={el} />
      </h3>
    </div>
  );
};

export default TypedReact;
