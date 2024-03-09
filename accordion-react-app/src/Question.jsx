import { useState } from "react";
import PropTypes from "prop-types"; // Import PropTypes

export const Question = (props) => {
  const [isVisible, setVisible] = useState(false);

  return (
    <article className="question">
      <header>
        <h4>{props.title}</h4>
        <button className="btn" onClick={() => setVisible((prev) => !prev)}>
          {isVisible ? "-" : "+"}
        </button>
      </header>
      {isVisible && <p>{props.info}</p>}
    </article>
  );
};

// Add prop type validation
Question.propTypes = {
  title: PropTypes.string.isRequired,
  info: PropTypes.string.isRequired,
};
