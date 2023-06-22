import './App.css';

import HeaderComp from './Components/HeaderComp';
import NavigationComp from './Components/NavigationComp';
import MainComp from './Components/MainComp';

function App() {
  return (
    <div className="App">
      <br/>
      <HeaderComp />
      <div className="main-body-container">
        <NavigationComp />
        <MainComp />
      </div>
    </div >
  );
}

export default App;
