import "./styles.css";
import React from "react";
import questions from "./data";
import { Question } from "./Question";

function App() {
  return (
    <main>
      <div className="container">
        <h3>FAQ</h3>
        <section className="info">
          {questions.map((question) => {
            return (
              <Question
                title={question.title}
                info={question.info}
                key={question.id}
              />
            );
          })}
        </section>
      </div>
    </main>
  );
}

export default App;
