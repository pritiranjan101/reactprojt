
import React from 'react';
import ReactDOM from 'react-dom';

import { Router, Route, Link, browserHistory } from 'react-router'

export default class Modern extends React.Component {
   render() {
      return (
         <div>
         <div className="container">
        
            <h1>Modern India</h1>
            <p>Historians consider Indias modern age to have begun sometime between 1848 and 1885. 
            The appointment in 1848 of Lord Dalhousie as Governor General of the East India Company set the stage for changes essential to a modern state.
             These included the consolidation and demarcation of sovereignty, the surveillance of the population, and the education of citizens 
             (English Education Act 1835). Technological changes—among them, railways, canals, and the telegraph—were introduced not long after their 
             introduction in Europe.However, disaffection with the Company also grew during this time, and set off the Indian Rebellion 
             of 1857. Fed by diverse resentments and perceptions, including invasive British-style social reforms, harsh land taxes, and summary treatment 
             of some rich landowners and princes, the rebellion rocked many regions of northern and central India and shook the foundations of Company rule.
             Although the rebellion was suppressed by 1858, it led to the dissolution of the East India Company and to the direct administration of 
             India by the British government. Proclaiming a unitary state and a gradual but limited British-style parliamentary system, the new rulers
              also protected princes and landed gentry as a feudal safeguard against future unrest. In the decades following,
             public life gradually emerged all over India, leading eventually to the founding of the Indian National Congress in 1885.
            </p>
            <div className="next">
            <div className="col-xs-12 col-sm-12 col-md-7 col-lg-11">
 
            <button type="button"  data-toggle="collapse" data-target="#demo">NEXT</button>
            <div id="demo" className="collapse">
            Fed by diverse resentments and perceptions, including invasive British-style social reforms, harsh land taxes, and summary treatment 
            of some rich landowners and princes, the rebellion rocked many regions of northern and central India and shook the foundations of Company rule.
            Although the rebellion was suppressed by 1858, it led to the dissolution of the East India Company and to the direct administration of India by the 
            British government. Proclaiming a unitary state and a gradual but limited British-style parliamentary system, the new rulers also
             protected princes and landed gentry as a feudal safeguard against future unrest. In the decades following,
            public life gradually emerged all over India, leading eventually to the founding of the Indian National Congress in 1885.
         
            </div>
            </div>
            </div>  
            </div>
          
         </div>
      );
   }
}


export default Modern;



