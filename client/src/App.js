import './App.css';
import { Route, useLocation } from "react-router-dom";
import { Home, Landing, Detail, NavBar } from './views/index'

function App() {
  const location = useLocation()
  return (
    <div className="App">
      <Route exact path='/'><Landing/></Route>
      {location.path !== '/' && !location.pathname.startsWith('/detail/') && location.pathname !== '/create' && <Route><NavBar/></Route>}
      <Route path='/home'><Home/></Route>
      <Route path='/detail/:idDetail'><Detail/></Route>
    </div>
  );
}

export default App;


// logo gatito con estada = 'https://th.bing.com/th/id/R.22fa5e1a4242b784c7532d365d1290c5?rik=GA2yAAXu11NuKg&pid=ImgRaw&r=0'