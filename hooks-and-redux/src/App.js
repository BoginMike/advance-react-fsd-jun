
import { useState } from 'react';
import './App.css';
import Counter from './Counter';
import FunctionalCounter from './FunctionalCounter';
import Clock from './Clock';

function App() {
  const [flag, setFlag] = useState(true)
  return (
    <div className="App">
      <button onClick={() => setFlag(!flag)}>toggle</button>


      {flag.toString()}
      <hr />

      {
        flag == true ? <Clock /> : <></>
      }

    </div>
  );
}

export default App;
