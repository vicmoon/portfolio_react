import Header  from "../components/Header";
import aboutDetails from "../components/aboutDetails";
import Footer from "../components/Footer";


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
            <div className=" about container">
            {aboutDetails.map(createAbout)}
             <Footer />
            </div>
           
      </>
   
        
    );
}

export default About;