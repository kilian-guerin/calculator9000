/* eslint-disable no-eval */
import './Calculator.css';
import React, { useState } from 'react';

import BeautifulScreen from "../BeautifulScreen/BeautifulScreen";
import AmazingNumberButton from "../AmazingNumberButton/AmazingNumberButton";
import GreatOperationButton from "../GreatOperationButton/GreatOperationButton";
import MagnificientEqualButton from "../MagnificientEqualButton/MagnificientEqualButton";
import ItSOverNineThousand from "../ItSOverNineThousand/ItSOverNineThousand";

function Calculator() {
  const [count, setCount] = useState(0);
  const [value, setValue] = useState(0);
  const [result, setResult] = useState(0);
  const [operator, setOperator] = useState("");

  document.addEventListener('click', function(e) {
    e = e || window.event;
    var target = e.target

    if(target.textContent >= 0 || target.textContent < 10 || target.textContent === ".") {
      if(count === 0) {
        return setCount(target.textContent.toString());
      } else {
        return setCount(count + target.textContent.toString());
      }
    } else if(target.textContent === "C") {
      setValue(0);
      setOperator(0);
      setResult(0);
      return setCount(0);
    } else if(target.textContent === "+" || target.textContent === "-" || target.textContent === "*" || target.textContent === "/") {
      setValue(count);
      setOperator(target.textContent);
      return setCount(0);
    } else if(target.textContent === "=") {
      setResult(eval(value + operator + count));
      return setCount(result);
    }
  }, false)

  return (
    <div className="screen">
      { result > 9000 ? <ItSOverNineThousand/> : '' }
      <BeautifulScreen result={count}/>
      <div className="screen__buttons__number">
        <AmazingNumberButton/>
        <MagnificientEqualButton/>
        <GreatOperationButton/>
      </div>
    </div>
  );
}

export default Calculator;