import Header  from "../components/Header";
import aboutDetails from "../components/aboutDetails";
import Footer from "../components/Footer";
import ThemeContext from "../components/ThemeContext";
import { useContext } from "react";


function createAbout(props){
    return (
        <div>
            <h2>{props.title}</h2>
            <p> {props.description}</p>
        </div>
    );
}


const About = () => {
    const { theme } = useContext(ThemeContext);
    return (
      <>
            <Header />
            <div className="about container" style={{ background: theme.body, color: theme.text }}>
            {aboutDetails.map(createAbout)}
             <Footer />
            </div>
           
      </>
   
        
    );


}


export default About;