import Avatar from './Avatar';

function Card(props) {
  return (
    <div className="card">
      <div className="card-inner">
        <div className="card-front">
          <Avatar image={props.image} />
        </div>
        <div className="card-back">
          {/* First link */}
          <a
            href={props.link}
            target="_blank"
            rel="noreferrer"
            aria-label={`${props.name} details`}
          >
            <p>{props.name}</p>
          </a>
          {/* Second link */}
          <a
            href={props.gitHub_link}
            target="_blank"
            rel="noreferrer"
            aria-label="Additional link"
          >
            <p>{props.link2Text || 'GitHub'}</p>
          </a>
        </div>
      </div>
    </div>
  );
}

export default Card;
