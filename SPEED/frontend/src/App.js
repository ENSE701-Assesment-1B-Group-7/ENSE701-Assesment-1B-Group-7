import React from "react";
/*
import{
  Route,
  NavLink,
  BrowserRouter as Router,
} from "react-router-dom";
*/
//import Home from "./pages/Home";
//import SEPractice from "./pages/SearchArticles";
//import SubmitArticle from "./pages/SubmitArticles"; 

import Title from "./components/Title";
import NavBar from "./components/NavBar";

const App = () =>  {
    return (
      <div>
        <Title />
        <NavBar />
      </div>
        
        /*
        <Router>
        <div>

          

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
        */
    );
}
 
export default App;
