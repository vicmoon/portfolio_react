import Footer from '../components/Footer';
import Header from '../components/Header';

const Contact = () => {
  return (
    <>
      <Header />
      <>
        <div id="contact">
          <a
            href="https://us21.list-manage.com/contact-form?u=e6380098ece52bf064ac7138c&form_id=f25d505929d57162a3e645f684f0dc97"
            rel="noreferrer"
            target="_blank"
          >
            [ Form ]
          </a>
          <a
            href="https://www.bitsandscribbles.com/"
            rel="noreferrer"
            target="_blank"
          >
            [ Blog ]
          </a>
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
        </div>
      </>
      <Footer />
    </>
  );
};

export default Contact;
