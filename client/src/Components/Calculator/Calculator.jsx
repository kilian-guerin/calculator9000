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

export default function Calculator() {
  const [screen, setScreen] = useState({
    calcul: 0,
    total: 0,
    operator: false,
  });

  var handleClick = (e) => {
    if (e >= 0 || e < 10 || e === "." || e === "+" || e === "-" || e === "*" || e === "/") {
      if (e === "+" || e === "-" || e === "*" || e === "/") {
        if (screen.operator === false) {
          setScreen({
            ...screen,
            total: screen.total + e.toString(),
            operator: true,
          });
        }
      } else {
        if (screen.total === 0) {
          console.log('2')
          setScreen({
            ...screen,
            total: e.toString(),
            operator: false,
          });
        } else {
          console.log('3')
          setScreen({
            ...screen,
            total: screen.total + e.toString(),
            operator: false,
          });
        }
      }
    } else if (e === "C") {
      return setScreen({
        ...screen,
        calcul: 0,
        total: 0,
      });
    } else if (e === "=") {
      if (screen.total.includes('/0')) {
        return setScreen({
          ...screen,
          total: 0,
          calcul: 0,
        });
      } else {
        return setScreen({
          ...screen,
          total: eval(screen.total),
          calcul: screen.total,
        });
      }
    }
  }

  return (
    <div className="calculator">
      <div className="screen">
        {screen.total > 9000 ? <ItSOverNineThousand /> : ''}
        <BeautifulScreen result={screen.total} />
        <div className="screen__buttons__number">
          <AmazingNumberButton handleClickParent={handleClick} />
          <GreatOperationButton handleClickParent={handleClick} />
          <MagnificientEqualButton handleClickParent={handleClick} />
        </div>
      </div>
      <div className="screen">
        <HistoryCalculator data={screen} />
      </div>
    </div>
  );
}