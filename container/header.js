import React from 'react';
//import {Content} from './container/content';
import { Router, Route, Link, browserHistory } from 'react-router'


export default  class Header extends React.Component {
   render() {
      return (


  <div>
  <div className = "page-header">
  <h1>Header</h1>
  <div id="top"><Link to="/Content">top1</Link></div>
  <div id="top"><Link>top2</Link></div>
  <div id="top"><Link>top3</Link></div>
  </div>
  </div>

      );
   }
}


export default Header;

