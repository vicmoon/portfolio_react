import Footer from "./Footer";


function Hero(){
    return (
         <div className='hero'>
          <h1>Hi, I'm Victoria</h1>
          <p> Self taught frontend devloper</p>
          <div>
                <img
                    src="../images/victoria_round.jpg
                    "
                    className="img-fluid"
                    // width="300px"
                    alt="Myself"
                  />
        </div>
        
        <Footer />
      </div>
    )
}

export default Hero;