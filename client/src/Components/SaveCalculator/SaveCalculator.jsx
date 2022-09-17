import './SaveCalculator.css';

export default function SaveCalculator(props) {
  const componentDidMount = async () => {
    const response = await fetch("/api/send-data", {
      method: 'POST',
      body: JSON.stringify(props.data),
      headers: { 'Content-Type': 'application/json' }
    });
    return response.json()
  }

  function handleClick() {
    componentDidMount();
  }

  return (
    <button id="save" onClick={handleClick}>Save calcul</button>
  );
}