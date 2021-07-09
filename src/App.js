import {
  BrowserRouter as Router,
  Route,
} from "react-router-dom";

import Nav from './components/Nav'
import About from './components/About'
import Resume from './components/Resume'
import Projects from './components/Projects'

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
      <Route path="/projects">
        <Projects />
      </Route>
    </Router>
  );
}

export default App;
