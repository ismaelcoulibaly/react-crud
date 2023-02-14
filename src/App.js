import logo from './logo.svg';
import './App.css';
import React, {Component} from "react";
import {BrowserRouter, Route, Routes} from "react-router-dom";

class App extends Component{

  render(){
    return(
        <div>
          <nav className="navbar navbar-expand navbar-dark bg-dark">
            <a href="/tutorials" className="nabar-brand">
              bezKoder
            </a>
            <div className="navbar-nav mr-auto">
              <li className="nav-item">
                <Link to={"/tutorials"} className="nav-link">
                  Tutorials
                </Link>
              </li>
              <li className="nav-item">
                <Link to={"/add"} className="nav-link">
                  Add
                </Link>
              </li>
            </div>
          </nav>


          <div className="container mt-3">
            <Routes>
              <Route path="/" element={<TutorialsList/>} />
              <Route path="/tutorials" element={<TutorialsList/>} />
              <Route path="/add" element={<AddTutorial/>} />
              <Route path="/tutorials/:id" element={<Tutorial/>} />
            </Routes>
          </div>
        </div>
    )

  }

}

export default App;