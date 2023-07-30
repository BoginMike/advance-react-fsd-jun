import logo from './logo.svg';
import './App.css';
import { useDispatch, useSelector } from 'react-redux'
import { increment } from './data.js/counterSlice.js';
import { setUsername } from './data.js/userSlice.js';

function App() {
  let { value } = useSelector(state => state.counter)
  let { username } = useSelector(state => state.user)

  const dispatch = useDispatch();

  function inc() {
    dispatch(increment())
    dispatch(setUsername('Sagar'))
  }
  return (
    <div className="App">

      Welcome {username}

      <hr />

      Value : {value}


      <br />
      <br />
      <br />
      <button onClick={inc}>increment</button>
    </div>
  );
}

export default App;
