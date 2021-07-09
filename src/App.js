import {
  BrowserRouter as Router,
  Route,
} from "react-router-dom";

import Nav from './components/Nav'
import About from './components/About'
import Resume from './components/Resume'
function App() {
  return (
    <Router>
        <Nav />
      <Route exact path="/">
        <About />
      </Route>
      <Route path="/resume">
        <Resume />
      </Route>
    </Router>
  );
}

export default App;
