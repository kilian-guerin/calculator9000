import './HistoryCalculator.css';
import { TiDeleteOutline } from 'react-icons/ti';
import React, {useEffect, useState} from 'react';

export default function HistoryCalculator(props) {
  const [history, setHistory] = useState([]);

  useEffect(() => {
    const searchData = async () => {
      const response = await fetch('/api/get-data');
      const data = await response.json();

      setHistory(data)
    };

    searchData();
  }, []);

  async function deleteData(id) {
    const response = await fetch("/api/delete-data", {
      method: 'POST',
      body: JSON.stringify({ id: id }),
      headers: { 'Content-Type': 'application/json' }
    });
    response.json().then((data) => {
      return setHistory(data);
    })
  }
  const handleDelete = (id) => {
    deleteData(id)
  }

  const saveData = async () => {
    const response = await fetch("/api/send-data", {
      method: 'POST',
      body: JSON.stringify(props.data),
      headers: { 'Content-Type': 'application/json' }
    });
    response.json().then((data) => {
      return setHistory(data);
    })
  }
  const handleSave = () => {
    saveData()
  }

  return (
    <div className="screen__history">
      <button id="save" onClick={() => handleSave() }>Save calcul</button>
      {
        history.map((save, i) =>
            <div key={i} className='save-operations'><h5>{save.calcul + ' = ' + save.result}</h5><TiDeleteOutline onClick={() => handleDelete(save._id)} className='delete-icon'/></div>
        )
      }
    </div>
  );
}