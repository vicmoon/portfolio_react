import Footer from "./Footer";


function Hero(){
    return (
         <div className='hero'>
          <h1>Hi, I'm Victoria</h1>
          <div>
                <img
                    src="../images/victoria_m.jpg
                    "
                    className="img-fluid"
                    width="300px"
                    alt="Myself"
                  />
        </div>
        <div className="hero__description">
          <p>Self-taught junior frontend developer</p>
        </div>
        <Footer />
      </div>
    )
}

export default Hero;