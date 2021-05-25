//import logo from './logo.svg';
import './App.css';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import Vaccines from './pages/Vaccines';
import About from './pages/About';
import Nav from './components/Nav';
import Cases from './pages/Cases';
import Login from './pages/Login';
import Home from './pages/Home';
import React, {useState, useEffect, useContext } from 'react';
import {CaseContext} from './contexts/CaseContext';



 // const AContext = createContext('hi');
 

function App() {

   
  const [result, setResult] = useState({});
  const [cases, setCases] = useContext(CaseContext);

    useEffect(() => {
          
      fetch("https://covid-api.mmediagroup.fr/v1/cases")
      
            .then (response => response.json())
            .then (response => {
              /*const results = response.map(x => {
                return {
                  administered: x.All.administered,
                  population: x.All.population
                }
              })*/
              //setResult(response);
              setCases(response);
              console.log("response= ", response )
              })
            .catch(error => {console.log(error);})
        },[]);


  return (
    <div className="App">
        
          <Router>
              <h1>Search Covid Cases</h1>
              
              <Nav/> 
              <Route  exact path = '/About' component = {About}/>
              <Route exact path = '/Vaccines' component = {Vaccines}/>
              <Route  exact path = '/Cases' component = {Cases}/>
              <Route  exact path = '/Login' component = {Login}/>
              <Route  exact path = '/' component = {Home}/>
          </Router>
          
      
       

    </div>
  );
}

export default App;

