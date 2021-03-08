
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Home from './components/home/Home';
import CountryDetails from './components/details/CountryDetails';
// import Country from './components/country/Country';

function App() {
  return (
    <div className="container-fluid">
      <Router>
        <header className="header-main-wrap">
          <nav className="container">
            <ul className="navbar-wrap">
              <li><Link to="/">Home</Link></li>
              <li> <Link to="/about">About</Link></li>
            </ul>
          </nav>
        </header>
        <div>



          <Switch>
            <Route path="/about" />
            <Route path="/:name">
              <CountryDetails />
            </Route>
            <Route exect path="/">
              <Home />
            </Route>
          </Switch>
        </div>
      </Router>
    </div>
  );
}

export default App;
