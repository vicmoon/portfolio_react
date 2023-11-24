import Header from "../components/Header";
import Card from "../components/Card";
import details from "../components/workDetails";
import Footer from "../components/Footer";
import { useContext } from "react";
import ThemeContext from "../components/ThemeContext";




function createCard(detail) {
    return (
        <Card 
        key={detail.id}
        name={detail.name}
        image={detail.image}
        link={detail.link}
        language={detail.language}
        />
    );

}

const Work = () => {
    const { theme } = useContext(ThemeContext);
    return (
      <>
          <Header />
          <div className='work container' style={{ background: theme.body, color: theme.text }}>
          {details.map((createCard))}
         </div>
         <Footer />
      </>
    );


}


export default Work;