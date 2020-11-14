import './App.css';
import Header from './Components/Header/Header';
import List from './Components/List/List';
import User from './Components/User/User';
import Pagination from './Components/Pagination/Pagination';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  // Link
} from "react-router-dom";

function App() {
  return (
    <Router>
      <Header/>
      <div className="container py-5">priviet</div>

      <Switch>
          <Route exact path="/server2">
            <List />
          </Route>

          <Route exact path="/">
            Houmi
          </Route>

          <Route exact path="/server2/:id">
            <User />
          </Route>

          <Route>
            priviet oshibka 404!
          </Route>

        </Switch>

      <Pagination/>
    </Router>
  );
}

export default App;
