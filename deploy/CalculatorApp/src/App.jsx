import { useState } from "react";
import "./App.css";

function Calculator() {
  const [display, setDisplay] = useState("");

  const handleClick = (value) => {
    setDisplay((prev) => prev + value);
  };

  const clearDisplay = () => {
    setDisplay("");
  };

  const deleteLast = () => {
    setDisplay((prev) => prev.slice(0, -1));
  };

  const calculate = () => {
    try {
      let expression = display;

      // Replace mathematical symbols
      expression = expression.replace(/×/g, "*");
      expression = expression.replace(/÷/g, "/");
      expression = expression.replace(/π/g, "Math.PI");

      // Scientific functions
      expression = expression.replace(/sin\(/g, "Math.sin(");
      expression = expression.replace(/cos\(/g, "Math.cos(");
      expression = expression.replace(/tan\(/g, "Math.tan(");
      expression = expression.replace(/sqrt\(/g, "Math.sqrt(");
      expression = expression.replace(/log\(/g, "Math.log10(");
      expression = expression.replace(/ln\(/g, "Math.log(");

      // Power
      expression = expression.replace(/\^/g, "**");

      const answer = eval(expression);

      setDisplay(String(answer));
    } catch {
      setDisplay("Error");
    }
  };

  return (
    <div className="container">
      <div className="calculator">

        <h1>Calculator</h1>

        <input
          type="text"
          value={display}
          placeholder="0"
          readOnly
          className="display"
        />

        <div className="buttons">

          <button onClick={() => handleClick("sin(")}>sin</button>
          <button onClick={() => handleClick("cos(")}>cos</button>
          <button onClick={() => handleClick("tan(")}>tan</button>
          <button onClick={clearDisplay} className="clear">AC</button>

          <button onClick={() => handleClick("log(")}>log</button>
          <button onClick={() => handleClick("ln(")}>ln</button>
          <button onClick={() => handleClick("sqrt(")}>√</button>
          <button onClick={deleteLast}>DEL</button>

          <button onClick={() => handleClick("π")}>π</button>
          <button onClick={() => handleClick("^")}>xʸ</button>
          <button onClick={() => handleClick("(")}>(</button>
          <button onClick={() => handleClick(")")}>)</button>

          <button onClick={() => handleClick("7")}>7</button>
          <button onClick={() => handleClick("8")}>8</button>
          <button onClick={() => handleClick("9")}>9</button>
          <button onClick={() => handleClick("÷")} className="operator">÷</button>

          <button onClick={() => handleClick("4")}>4</button>
          <button onClick={() => handleClick("5")}>5</button>
          <button onClick={() => handleClick("6")}>6</button>
          <button onClick={() => handleClick("×")} className="operator">×</button>

          <button onClick={() => handleClick("1")}>1</button>
          <button onClick={() => handleClick("2")}>2</button>
          <button onClick={() => handleClick("3")}>3</button>
          <button onClick={() => handleClick("-")} className="operator">−</button>

          <button onClick={() => handleClick("0")}>0</button>
          <button onClick={() => handleClick(".")}>.</button>
          <button onClick={() => handleClick("%")}>%</button>
          <button onClick={() => handleClick("+")} className="operator">+</button>

          <button onClick={calculate} className="equal">=</button>

        </div>
      </div>
    </div>
  );
}

export default Calculator;