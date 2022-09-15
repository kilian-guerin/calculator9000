import './MagnificientEqualButton.css';

function MagnificientEqualButton() {
    let operation = ['+', '-', '*', '/', 'C'];
    let operationList = [];
    const test = true;
    operation.forEach(element => {
        if(element === "C") {
            operationList.push(<button key={element} id="clear">{element}</button>);
        } else {
            operationList.push(<button key={element}>{element}</button>);
        }
    });

    return (
        <div className="numpad-operation">
            {operationList}
       </div>
    )
}

export default MagnificientEqualButton;