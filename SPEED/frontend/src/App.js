import React from "react";
import{
  Route,
  NavLink,
  BrowserRouter as Router,
} from "react-router-dom";

import Home from "./pages/Home";
import SEPractice from "./pages/SearchArticles";
import SubmitArticle from "./pages/SubmitArticles"; 

const App = () =>  {
    return (
        <Router>
        <div>

          <div className="title">
            <span className="largeLetter">S</span>
            <span className="smallLetter">oftware </span>
            <span className="largeLetter">P</span>
            <span className="smallLetter">ractice </span>
            <span className="largeLetter">E</span>
            <span className="smallLetter">mpirical </span>
            <span className="largeLetter">E</span>
            <span className="smallLetter">vidence </span>
            <span className="largeLetter">D</span>
            <span className="smallLetter">atabase </span>
          </div>

            <ul className="header">
                <li><NavLink exact to = "/">Home</NavLink></li>
                <li><NavLink to = "/SEPractice">Search Articles</NavLink></li>
                <li><NavLink to = "/SubmitArticle">Submit Articles</NavLink></li>
            </ul>
          <div className="content">
          <Route exact path = "/" component = {Home}/>
          <Route path = "/SEPractice" component = {SEPractice} />
          <Route path = "/SubmitArticle" component = {SubmitArticle} />
          </div>
        </div>
        </Router>
    );
}
 
export default App;
