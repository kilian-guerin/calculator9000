/* eslint-disable no-unused-vars */
/* eslint-disable no-eval */
import './Calculator.css';
import React, { useState } from 'react';

import BeautifulScreen from "../BeautifulScreen/BeautifulScreen";
import AmazingNumberButton from "../AmazingNumberButton/AmazingNumberButton";
import GreatOperationButton from "../GreatOperationButton/GreatOperationButton";
import MagnificientEqualButton from "../MagnificientEqualButton/MagnificientEqualButton";
import ItSOverNineThousand from "../ItSOverNineThousand/ItSOverNineThousand";
import HistoryCalculator from '../HistoryCalculator/HistoryCalculator';
import SaveCalculator from '../SaveCalculator/SaveCalculator';

export default function Calculator() {
  const [screen, setScreen] = useState({
    calcul: 0,
    total: 0,
  });

  var handleClick = (e) => {
    if(e >= 0 || e < 10 || e === "."  || e === "+" || e === "-" || e === "*" || e === "/") {
      if((e !== "+" || e !== "-" || e !== "*" || e !== "/") && screen.total === 0) {
        return setScreen({
          ...screen,
          total: e.toString()
        });
      } else {
        return setScreen({
          ...screen,
          total: screen.total + e.toString()
        });
      }
    } else if(e === "C") {
      return setScreen({
        ...screen,
        calcul: 0,
        total: 0,
      });
    } else if(e === "=") {
      return setScreen({
        ...screen,
        total: eval(screen.total),
        calcul: screen.total,
      });
    }
  }

  return (
    <div className="calculator">
      <div className="screen">
        { screen.total > 9000 ? <ItSOverNineThousand/> : '' }
        <BeautifulScreen result={screen.total}/>
        <div className="screen__buttons__number">
          <AmazingNumberButton handleClickParent={ handleClick }/>
          <GreatOperationButton handleClickParent={ handleClick }/>
          <MagnificientEqualButton handleClickParent={ handleClick }/>
        </div>
      </div>
      <div className="screen">
        <SaveCalculator data={ screen }/>
        <HistoryCalculator/>
      </div>
    </div>
  );
}