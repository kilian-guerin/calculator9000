import './HistoryCalculator.css';
import { TiDeleteOutline } from 'react-icons/ti';
import React, {useEffect, useState} from 'react';

export default function HistoryCalculator(props) {
  const [history, setHistory] = useState([]);

  useEffect(() => {
    const componentDidMount = async () => {
      const response = await fetch('/api/get-data');
      const data = await response.json();

      setHistory(data)
    };

    componentDidMount();
  }, []);

  function handleDelete() {
    fetch('/api/delete-data', {
      method: 'DELETE',
    });
  }


  return (
    <div className="screen__history">
      {
        history.map((save, i) =>
            <div key={i} className='save-operations'><h5>{save.calcul + ' = ' + save.result}</h5><TiDeleteOutline onClick={ handleDelete } className='delete-icon'/></div>
        )
      }
    </div>
  );
}