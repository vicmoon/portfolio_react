import Footer from '../components/Footer';
import Header from '../components/Header';

const Contact = () => {
  return (
    <>
      <Header />
      <>
        <div id="contact">
          <a
            href="https://www.linkedin.com/in/victoriamunteanu/"
            rel="noreferrer"
            target="_blank"
          >
            [LinkedIn]
          </a>
          <a href="https://github.com/vicmoon" rel="noreferrer" target="_blank">
            [ GitHub ]
          </a>
          <a
            href="https://www.bitsandscribbles.com/"
            rel="noreferrer"
            target="_blank"
          >
            [ Blog ]
          </a>
        </div>
      </>
      <Footer />
    </>
  );
};

export default Contact;
