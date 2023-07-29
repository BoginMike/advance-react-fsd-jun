
import './App.css';
import AppCommonButton from './shared/components/AppCommonButton';
import RenderHOC from './shared/components/RenderHOC';
import Panel from './shared/components/panel';

function App() {
  let abc
  return (
    <div className="App">
      <AppCommonButton label={abc} />
      <AppCommonButton label="Order" />


      <AppCommonButton children="Signup" />

      <AppCommonButton>
        <span>Sagar</span>
      </AppCommonButton>

      <button>hiii</button>


      <hr />

      <RenderHOC>
        <Panel heading={'React'} content={'It is really awesome'} />
      </RenderHOC>
      <Panel heading={<AppCommonButton label="Signup" />} content={'This adds cool look to your UI'} />

    </div>
  );
}

export default App;
