
import './AmazingNumberButton.css';

function AmazingNumberButton(props) {
    let numbersList = [];
    for (let i = 1; i < 10; i++) {
        numbersList.push(<button key={i} onClick={props.setCount}>{i}</button>);
    }

    return (
       <div className="numpad">
            {numbersList}
            <button className="large">0</button>
            <button>.</button>
       </div>
    )
}

export default AmazingNumberButton;