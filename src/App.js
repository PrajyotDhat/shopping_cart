
import './App.css';
import User from './User';

import Home from './components/Home';
import HeaderPage from './pages/HeaderPage';
import HomePage from './pages/HomePage';

function App() {
  return (
    <div className='App'>
      {/* <h1>App Component</h1> */}
       {/* <User data={{name:'redux'}}/> */}
        {/* <Home/> */}
        <HeaderPage/>
       <HomePage/>
    </div>
  );
}

export default App;
