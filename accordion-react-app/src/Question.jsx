import { useState } from "react";
export const SingleQuestion = (props) => {
  // add a state variable here
  const [isVisible, setVisible] = useState(false);

  return (
    <article className="question">
      <header>
        <h4>{props.title}</h4>
        {/* make this toggle functionality onClick */}
        <button className="btn" onClick={() => setVisible((prev) => !prev)}>
          {isVisible ? "-" : "+"}
        </button>
      </header>
      {/* make this render conditionally */}
      {isVisible && <p>{props.info}</p>}
    </article>
  );
};
