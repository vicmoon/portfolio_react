import Avatar from './Avatar';

function Card(props){
    return (
      <div className='front-page'>
     <div className="card">
          <div className="card-inner">
            <div className="card-front">
             <Avatar image={props.image} />
            </div>
            <div className="card-back">
              <a href= {props.link} target="_blank" rel="noreferrer" alt=" JavaScript- exercises" >
              <p>{props.name}</p>
              <p>{props.language}</p>
            </a>
            </div>
          </div>
        </div>
        </div>
    );

};

export default Card;