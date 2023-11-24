import Footer from "./Footer";


function Hero(){
    return (
         <div className='hero'>
          <h1>Hi, I'm Victoria</h1>
          <div className="card">
            <div className="card-inner">
              <div className="card-front">
                <img
                    src="../images/Victoria1.jpg"
                    className="img-fluid"
                    width="300px"
                    alt="Myself"
                  />
               </div>
              <div className="card-back">
              <a href="https://www.linkedin.com/in/victoriamunteanu/" target="_blank" rel="noreferrer" title = "My LinkedIn">
              <p>Junior frontend developer</p>
            </a>
           </div>
          </div>
        </div>
        <Footer />
      </div>
    )
}

export default Hero;