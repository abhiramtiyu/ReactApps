import logo from './logo.svg';
import React, { useState } from 'react';
import Accordian from './Accordian';
import data from './data';
import './App.css';

function App() {
  const [questions, setQuestions] = useState(data);

  return (
    <main>
      <div className="container">
        <h3>questions and answers about login</h3>
        <section className="info">
          {
            questions.map((question) => {
              return <Accordian key={question.id} {...question} />
            })
          }
        </section>
      </div>
    </main>
  );
}

export default App;
