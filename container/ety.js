import React from 'react';
import ReactDOM from 'react-dom';


import { Router, Route, Link, browserHistory, IndexRoute  } from 'react-router'



class About extends React.Component {
   render() {
      return (
         <div>
              <div className="container">
            <h1>Etymology...</h1>
            <p>The name India is derived from Indus, which originates from the Old Persian word Sindhi.
            The latter term stems from the Sanskrit word Sindhu, which was the historical local appellation 
            for the Indus River. The ancient Greeks referred to the Indians as Indoi (Ινδοί), which translates as 
            "The people of the Indus".
            The geographical term Bharat (Bhārat, pronounced [ˈbʱaːrət̪] ( listen)), 
            which is recognised by the Constitution of India as an official name for the country,
            is used by many Indian languages in its variations. It is a modernisation of the historical name Bharatavarsha, 
            which gained increasing currency from the mid-19th century onwards as a native name of India.
            Scholars believe it to be named after the Vedic tribe of Bharatas in the second millennium B.C.E.
            It is also traditionally associated with the rule of the legendary emperor Bharata.
            Gaṇarājya (literally, people's State) is the Sanskrit/Hindi term for "republic" dating back to the ancient times.<br/><br/>

			Hindustan ([ɦɪnd̪ʊˈst̪aːn] ( listen)) is an ancient Persian name for India dating to 3 century B.C.E. It was introduced into 
			India by the Mughals and widely used since then, often being thought of as the "Land of the Hindus." Its meaning varied, 
			referring to a region that encompassed northern India and Pakistan or India in its entirety.
            <a href="http://www.google.com">facebook</a>
           </p>
         </div>
            </div>
      )
   }
}

export default About;