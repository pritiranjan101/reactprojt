import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, Link, browserHistory, IndexRoute  } from 'react-router'


class App extends React.Component {
render() {
      return (
         <div>
            <ul>
               <li><Link to ="/Home">Home</Link></li>
               <li><Link to ="/About">About</Link></li>
               <li><Link to ="/Contact">Contact</Link></li>
            </ul>				
           {this.props.children}

         </div>

      )

   }
}


class Home extends React.Component {
   render() {
      return (
         <div>
            <h1>Home...</h1>
         </div>
      )
   }
}


class About extends React.Component {
   render() {
      return (
         <div>
            <h1>About...</h1>
         </div>
      )
   }
}



class Contact extends React.Component {
   render() {
      return (
         <div>
            <h1>Contact...</h1>
         </div>
      )
   }
}

export default App;

ReactDOM.render((
   <Router history = {browserHistory}>
      <Route path = "/" component = {App}>
         <IndexRoute component = {Home} />
         <Route path = "/Home" component = {Home} />
         <Route path = "/About" component = {About} />
         <Route path = "/Contact" component = {Contact} />
      </Route>
   </Router>
	
), document.getElementById('app'))
