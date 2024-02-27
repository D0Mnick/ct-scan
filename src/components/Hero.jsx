import prod from '../assets/img5.png'

function Hero() {
  return (
    <div className="hero-products">
        <div className="hero"> 
        <div className='power'>
        <h1>the power to elevate.</h1>
        <p>Providing High Quality Medical and other Medical Supplies</p>
        </div>
        <button>Explore More About Product</button>
        </div>
        <div className="imgs">
       
          <img src={prod} alt="no image" />
        
          <p>Precison Image 32 -slice CT YSCT-16</p>
           <button>Shop Now</button>
      
          
        </div>
        
    </div>
  )
}

export default Hero