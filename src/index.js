import React from 'react';
import ReactDOM from 'react-dom';


function Card(props){
    return (
     <div className="card">
          <div className="card-inner">
            <div className="card-front">
                <img src={props.image} className="image-responsive" alt='project-name' />
            </div>
            <div className="card-back">
              <a href= {props.link} target="_blank" rel="noreferrer" alt=" JavaScript- exercises" >
              <p> {props.name}</p>
            </a>
            </div>
          </div>
        </div>
    );

};


ReactDOM.render(
<div> 
<h3> My Project</h3>
<div className='cards'>
            <Card  
            name ="Javescript- exercises"
            image="images/javascript.JPG"
            link="https://astonishing-pasca-5a36aa.netlify.app/"
            language="#CSS #HTML #Express.js #Node.js"
            />
            <Card 
            name ="Personal Project"
            image="images/react.JPG"
            link="https://www.victoriamoonteanu.com/"
            language="#CSS #HTML #Express.js #Node.js"
            />
            <Card 
            name ="Site Template"
            image="images/extraterestrial .png"
            link="https://vicmoon.github.io/CSS_SITE/"
            language="#CSS #HTML #Responsive #Template"
            />
</div>
 </div>, 
 document.getElementById('root'));

 