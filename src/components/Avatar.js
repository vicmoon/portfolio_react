
function Avatar(props){
    return (
        <div className="avatar">
            <img src={props.image} className="image-responsive" alt='avatar' />
        </div>
    );

};

export default Avatar;