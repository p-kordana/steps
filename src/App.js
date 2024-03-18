import { useState } from "react";

const messages = [
  "Learn React ⚛️",
  "Apply for jobs 💼",
  "Invest your new income 🤑",
];

function App() {
  const btnStyle = { backgroundColor: "#7950f2", color: "#ffffff" };

  const [step, setStep] = useState(1);

  function handlePrevious() {
    if (step === 1) setStep(3);
    else setStep(step - 1);
  }

  function handleNext() {
    if (step === 3) setStep(1);
    else setStep(step + 1);
  }

  return (
    <div className="steps">
      Hello world.
      <div className="numbers">
        <div className={step >= 1 ? "active" : ""}>1</div>
        <div className={step >= 2 ? "active" : ""}>2</div>
        <div className={step >= 3 ? "active" : ""}>3</div>
      </div>
      <p className="message">
        Step {step}: {messages[step - 1]}
      </p>
      <div className="buttons">
        <button style={btnStyle} onClick={handlePrevious}>
          Previous
        </button>
        <button style={btnStyle} onClick={handleNext}>
          Next
        </button>
      </div>
    </div>
  );
}

export default App;
