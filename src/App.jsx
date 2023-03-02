import { useEffect, useState } from 'react';
import { getDocsFromCollection } from './firebase/functions';
import './App.css';

function App() {
  const [docs, setDocs] = useState([]);
  useEffect(() => {
    getDocsFromCollection('accounts').then((data) => setDocs(data));
    // eslint-disable-next-line
  }, []);
  return (
    <div className="App">
      <header className="App-header">
        <h1>Tradersim</h1>
      </header>
      <main className="App-main">
        {
          docs.map((doc) => <li key={doc.id}>{doc.Name} {doc.Balance}</li>)
        }
      </main>
    </div>
  );
}

export default App;
