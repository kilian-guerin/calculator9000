
import './AmazingNumberButton.css';

export default function AmazingNumberButton(props) {
    let numbersList = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '.'];
    let number;

    const handleClick = () => {
        props.handleClickParent(number);
    };

    return (
       <div className="numpad">
            {
                numbersList.map((nbr, i) =>
                    <button key={nbr} id={ nbr === '0' ? 'large' : "" } onClick={() => { number = nbr; handleClick() }}>{nbr}</button>
                )
            }
       </div>
    )
}