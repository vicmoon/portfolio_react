import Header from '../components/Header';
import aboutDetails from '../components/aboutDetails';
import Footer from '../components/Footer';

function createAbout(props) {
  return (
    <div className="about_details">
      <h2>{props.title}</h2>
      <p> {props.description}</p>
    </div>
  );
}

const About = () => {
  return (
    <>
      <Header />
      <div className="about_container">{aboutDetails.map(createAbout)}</div>
      <Footer />
    </>
  );
};

export default About;
