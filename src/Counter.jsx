import React, { useState } from "react";
import Button from "./Button";

function Counter() {
  const [value, setValue] = useState(0);
  const [inputValue, setInputValue] = useState(0);
  const [isCountVisible, setIsCountVisible] = useState(true);

  const handleIncrement = () => {
    setValue(value + parseInt(inputValue, 10));
  };

  const handleDecrement = () => {
    setValue(value - parseInt(inputValue, 10));
  };

  const handleClear = () => {
    setValue(0);
    setInputValue(0);
  };

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  const handleVisibility = () => {
    setIsCountVisible((prevVisibility) => !prevVisibility);
  };

  const getColor = () => {
    if (value > 0) return "green";
    if (value < 0) return "red";
    return "white";
  };

  return (
    <div>
      <h1>Please Add or Subtract</h1>
      <div className="board">
        {isCountVisible && (
          <div id="value" style={{ color: getColor() }}>
            {value}
          </div>
        )}
        <div className="container">
          <div className="value-form">
            <input
              type="number"
              value={inputValue}
              onChange={handleInputChange}
              style={{ padding: "10px", fontSize: "16px" }}
            />
            <Button action={handleClear} symbol="Clear" />
            <Button action={handleVisibility} symbol="Hide" />
          </div>
          <Button action={handleDecrement} symbol="-" />
          <Button action={handleIncrement} symbol="+" />
        </div>
      </div>
    </div>
  );
}

export default Counter;
