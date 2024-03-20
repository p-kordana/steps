import React, { useState } from "react";

const messages = [
  "Learn React ⚛️",
  "Apply for jobs 💼",
  "Invest your new income 🤑",
];

function App() {
  const btnStyle = { backgroundColor: "#7950f2", color: "#ffffff" };

  const [step, setStep] = useState(1);
  const [isOpen, setIsOpen] = useState(true);

  function handlePrevious() {
    if (step === 1) setStep(3);
    else setStep((s) => s - 1);
  }

  function handleNext() {
    if (step === 3) setStep(1);
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
            <div className={step >= 1 ? "active" : ""}>1</div>
            <div className={step >= 2 ? "active" : ""}>2</div>
            <div className={step >= 3 ? "active" : ""}>3</div>
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
