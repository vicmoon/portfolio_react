import Header from "../components/Header";
import Card from "../components/Card";
import details from "../components/details";
import Footer from "../components/Footer";



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

function Work(){
    return (
      <>
          <Header />
          <h2>Projects</h2>
          <div className='front-page'>
          {details.map((createCard))}
         </div>
         <Footer />
      </>
    );
}

export default Work;