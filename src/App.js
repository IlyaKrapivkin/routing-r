import './App.css';
import Header from './Components/Header/Header';
import List from './Components/List/List';
import User from './Components/User/User';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

function App() {
  return (
    <Router>
      <Header/>
      <div className="container py-5">priviet</div>

      <Switch>
          <Route exact path="/users">
            <List />
          </Route>

          <Route exact path="/">
            Houmi
          </Route>
        </Switch>

      {/* <User/> */}
    </Router>
  );
}

export default App;
