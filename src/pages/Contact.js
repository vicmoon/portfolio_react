import Footer from "../components/Footer";
import Header  from "../components/Header";
import ThemeContext from "../components/ThemeContext";
import { useContext } from "react";

const Contact = () => {
    const { theme } = useContext(ThemeContext);
    return (
      <>
        <Header/>
          <>
          <div id="contact" style={{ background: theme.body, color: theme.text }}>
            <a href= "https://www.linkedin.com/in/victoriamunteanu/" rel="noreferrer" target="_blank">[LinkedIn]</a>
            <a href= "mailto:munteanuvictoria1@gmail.com" rel="noreferrer" target="_blank">[Email] </a>
            <a href= "https://github.com/vicmoon" rel="noreferrer"target="_blank">[ GitHub  ]</a> 
         </div>
          </>
          <Footer />

      </>
  
    );


}


export default Contact;