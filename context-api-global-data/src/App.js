import logo from './logo.svg';
import './App.css';
import ComponentA from './ComponentA';
import MyDataContext from './data.js'
import { useState } from 'react';

function App() {
  const [name, setName] = useState('Sagar')
  return (
    <div className="App">
      <MyDataContext.Provider value={{ name, setName }}>
        <ComponentA />
      </MyDataContext.Provider>
    </div>
  );
}

export default App;
