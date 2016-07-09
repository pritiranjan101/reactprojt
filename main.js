
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App.jsx';
import Contenttp from './container/content';
import About from './container/ety';
import Content from './container/geo';
import { Router, Route, Link, browserHistory, IndexRoute  } from 'react-router'




class Home extends React.Component {
   render() {
      return (
         <div>
         <div className="container">
            <h1>History...</h1>
            <p>India, officially the Republic of India (IAST: Bhārat Gaṇarājya),
            is a country in South Asia. It is the seventh-largest country by area,
             the second-most populous country (with over 1.2 billion people), and the most populous democracy in the world. 
             Bounded by the Indian Ocean on the south, the Arabian Sea on the south-west, and the Bay of Bengal on the south-east, 
             it shares land borders with Pakistan to the west;[d] China, Nepal, and Bhutan to the north-east; and Myanmar (Burma) and 
             Bangladesh to the east. India also shares an official border with Afghanistan but the terrority is disputed by Pakistan. 
             In the Indian Ocean, India is in the vicinity of Sri Lanka and the Maldives; 
            in addition, India's Andaman and Nicobar Islands share a maritime border with Thailand and Indonesia.
			Home to the ancient Indus Valley Civilisation and a region of historic trade routes and vast empires, 
			the Indian subcontinent was identified with its commercial and cultural wealth for much of its long history.<br/><br/>
			Four religions—Hinduism, Buddhism, Jainism, and Sikhism—originated here, whereas Zoroastrianism, Judaism, Christianity, 
			and Islam arrived in the 1st millennium CE and also shaped the region's diverse culture. Gradually annexed by and brought 
			under the administration of the British East India Company from the early 18th century and administered directly by the 
			United Kingdom after the Indian Rebellion of 1857, India became an independent nation in 1947 after a struggle for independence
			that was marked by non-violent resistance led by Mahatma Gandhi.

            </p>
         </div>
         </div>
      )
   }
}

export default Home;



ReactDOM.render((
   <Router history = {browserHistory}>
      <Route path = "/" component = {App}>
         <IndexRoute component = {Home} />
         <Route path = "/Home" component = {Home} />
         <Route path = "/container/geo" component = {Content} />
         <Route path = "/container/ety" component = {About} />
         <Route path = "/container/content" component = {Contenttp} />
      </Route>
   </Router>
	
), document.getElementById('app'))




