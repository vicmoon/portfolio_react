import Header  from "../components/Header";
import aboutDetails from "../components/aboutDetails";

function createAbout(props){
    return (
        <div>
            <h2>{props.title}</h2>
            <p> {props.description}</p>
        </div>
    );
}


function About(){
    return (
      <>
            <Header />
            <div className="container-fluid">
            {aboutDetails.map(createAbout)}
            </div>

      </>
   
        
    );
}

export default About;