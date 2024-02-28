
import ServicesCard from './ServicesCard'
import Services from '../data/Services'

function Service() {
  return (
    <div className="services-container" data-aos="fade-up">
        <h1>Other Services</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque cupiditate fugit velit autem molestiae ab. Iusto voluptate autem modi nam temporibus similique repudiandae fugiat? Fuga voluptates a ab quidem ut.</p>
        <div className='project-services'>
          {Services.map ((val, item) => {
            return(
              <ServicesCard 
              key = {item}
              text={val.text}
              img={val.img}
              text1={val.text1}
              />
            )

          })}

        </div>
    </div>
  )
}

export default Service