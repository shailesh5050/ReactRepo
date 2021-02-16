import React, {useState} from "react";
import logo from './logo.svg';
import  CreateUser from './CreateUser';
import User from "./User";
import Contact from "./Contact";
import About from './About';
import Home from './Home';
import {Link,Route,Switch,BrowserRouter as Router} from 'react-router-dom';
import {Navbar,Nav,Form,FormControl,Button} from "react-bootstrap";
import './App.css';

function App() {
  const [name,setName] = useState("Shailesh");
  return (
    <div className="App">
      <Router>
      <Navbar bg="dark" variant="dark">
    <Navbar.Brand href="#home">Navbar</Navbar.Brand>
    <Nav className="ml-auto">
    <Nav.Link href=""><Link to="/home">Home</Link></Nav.Link>
      <Nav.Link href=""><Link to="/about">About</Link></Nav.Link>
      <Nav.Link href=""><Link to="/contact">Contact</Link></Nav.Link>
      <Nav.Link href=""><Link to="/user">User</Link></Nav.Link>
    </Nav>
    
  </Navbar>
  <Switch>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/user">
            <User />
          </Route>
          <Route path="/contact">
            <Contact />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
