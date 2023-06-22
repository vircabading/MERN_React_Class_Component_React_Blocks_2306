import logo from './logo.svg';
import './App.css';

import HeaderComp from './Components/HeaderComp';
import NavigationComp from './Components/NavigationComp';
import MainComp from './Components/MainComp';

function App() {
  return (
    <div className="App">
      <HeaderComp />
      <div className="main-body-container">
        <NavigationComp />
        <MainComp>

        </MainComp>
      </div>
    </div >
  );
}

export default App;
