import Footer from "./Footer";


function Hero(){
    return (
         <div className='hero'>
          <h1>Hi, I'm Victoria</h1>
          <div class="card">
            <div class="card-inner">
              <div class="card-front">
                <img
                    src="images/Victoria1.jpg"
                    class="img-fluid"
                    width="300px"
                    alt="Myself"
                  />
               </div>
              <div class="card-back">
             <p>Junior frontend developer</p>
           </div>
          </div>
        </div>
        <Footer />
      </div>
    )
}

export default Hero;