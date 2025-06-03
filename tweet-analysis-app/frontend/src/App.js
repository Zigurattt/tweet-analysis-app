import React, { useState } from 'react';
import './App.css';

function App() {
  const [url, setUrl] = useState('');
  const [result, setResult] = useState(null);

  const handleSubmit = async () => {
    const response = await fetch('http://localhost:5000/analyze', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ url })
    });

    const data = await response.json();
    setResult(data.data);
  };

  return (
    <div className="App">
      <h2>Tweet Analiz Aracı</h2>
      <input
        type="text"
        placeholder="Tweet URL'si girin"
        value={url}
        onChange={(e) => setUrl(e.target.value)}
      />
      <br />
      <button onClick={handleSubmit}>Analiz Et</button>

      {result && (
        <div className="result">
          <p><strong>Kullanıcı:</strong> {result.username}</p>
          <p><strong>Tweet:</strong> {result.content}</p>
          <p><strong>Duygu:</strong> {result.sentiment}</p>
          <p><strong>Özet:</strong> {result.summary}</p>
          <p><strong>Tarih:</strong> {result.datetime}</p>
        </div>
      )}
    </div>
  );
}

export default App;
