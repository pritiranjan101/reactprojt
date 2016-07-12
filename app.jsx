import React from 'react';
import ReactDOM from 'react-dom';
//import Contenttp from './container/content';
import Header from './container/header';
import { Router, Route, Link, browserHistory, IndexRoute  } from 'react-router'
//import About from './container/ety';
//import Content from './container/geo';
browserHistory.push('/Home');

class App extends React.Component {
render() {
      return (
            <div>
            <div className="container">
             <div className="backgd">
            <Header/>
            </div>
            </div>
            <div className="col-xs-12 col-sm-12 col-md-7 col-lg-1">
            <ul>
               <li><Link to ="/Home">History</Link></li>
               <li><Link to ="/container/geo">Geography</Link></li>
               <li><Link to ="/container/ety">Etymology</Link></li>
               <li><Link to ="/container/content">Biodiversity</Link></li>
               <li><Link to ="/container/modern">Modern</Link></li>
                <li><a href ="/container/due.html">website</a></li>
            </ul>	
        	</div>
       
       
        	<div className="col-xs-12 col-sm-12 col-md-7 col-lg-3">	
        	<div className="container">
        	<p>
            {this.props.children}
            </p>
            </div></div>
            </div>

      )

   }
}
export default App; 

