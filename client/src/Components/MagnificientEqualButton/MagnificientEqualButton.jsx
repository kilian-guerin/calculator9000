import './MagnificientEqualButton.css';

function MagnificientEqualButton(props) {
    const handleClick = () => {
        props.handleClickParent('=');
    };

    return (
        <button onClick={() => { handleClick() }}>=</button>
    );
}

export default MagnificientEqualButton;