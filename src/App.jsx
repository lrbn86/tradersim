import { useEffect, useState } from 'react';
import { getDocsFromCollection, addDocToCollection, updateDocFromCollection } from './firebase/functions';
import './App.css';
import Stock from './Stock';

function App() {

  const [docs, setDocs] = useState([]);

  useEffect(() => {
    getDocsFromCollection('accounts').then((data) => setDocs(data));
    // addDocToCollection({ Ask: 200, Bid: 199, Symbol: 'TSLA'}, 'stocks');
    updateDocFromCollection('4pYgcAx7A987ehkH7PFm ', { Ask: 10}, 'stocks');
    // eslint-disable-next-line
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <h1>Tradersim</h1>
      </header>
      <main className="App-main">
      </main>
    </div>
  );

}

export default App;
