import React, { useState } from "react";

const messages = [
  "Learn React ⚛️",
  "Apply for jobs 💼",
  "Get that job! 👍",
  "Invest your new income 🤑",
  "Money 💰",
];

function App() {
  const btnStyle = { backgroundColor: "#7950f2", color: "#ffffff" };

  const [step, setStep] = useState(1);
  const [isOpen, setIsOpen] = useState(true);

  function handlePrevious() {
    if (step === 1) setStep(messages.length);
    else setStep((s) => s - 1);
  }

  function handleNext() {
    if (step === messages.length) setStep(1);
    else setStep((s) => s + 1);
  }

  return (
    <>
      <button className="close" onClick={() => setIsOpen((is) => !is)}>
        {isOpen ? <>&times;</> : "+"}
      </button>
      {isOpen && (
        <div className="steps">
          <h2>Hello world.</h2>
          <div className="numbers">
            {messages.map((m, i) => (
              <div className={step >= i + 1 ? "active" : ""}>{i + 1}</div>
            ))}
          </div>
          <p className="message">
            Step {step}: {messages[step - 1]}
          </p>
          <div className="buttons">
            <Button style={btnStyle} handler={handlePrevious}>
              <span>◀️</span>Previous
            </Button>
            <Button style={btnStyle} handler={handleNext}>
              Next<span>▶️</span>
            </Button>
          </div>
        </div>
      )}
      <div className="steps">
        <div className="buttons">
          <Counter />
          <Counter />
          <Counter />
          <Counter />
        </div>
      </div>
    </>
  );
}

function Counter() {
  const [count, setCount] = useState(0);

  function handleCount() {
    setCount((c) => c + 1);
  }

  return (
    <>
      <button onClick={handleCount}>Clicked: {count}</button>
    </>
  );
}

function Button({ style, handler, children }) {
  return (
    <button style={style} onClick={handler}>
      {children}
    </button>
  );
}

export default App;
