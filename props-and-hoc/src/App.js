
import './App.css';
import AppCommonButton from './shared/components/AppCommonButton';

function App() {
  let abc
  return (
    <div className="App">
      <AppCommonButton label={abc}/>
      <AppCommonButton label="Order"/>
      <AppCommonButton label="Signup"/>
    </div>
  );
}

export default App;
