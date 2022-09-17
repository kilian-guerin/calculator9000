import './GreatOperationButton.css';

function GreatOperationButton(props) {
    let operationList = ['+', '-', '*', '/', 'C'];
    let operation;


    const handleClick = () => {
        props.handleClickParent(operation);
    };

    return (
        <div className="numpad-operation">
            {
                operationList.map((op, i) => 
                    <button key={op} id={ op === 'C' ? 'clear' : "" } onClick={() => { operation = op; handleClick() }}>{op}</button>
                )
            }
       </div>
    )
}

export default GreatOperationButton;