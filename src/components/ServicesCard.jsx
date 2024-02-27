

function ServicesCard(props) {
  return (
    <div className="services-card">
      <h2>{props.text}</h2>
      <img src={props.img} alt="" />
      <p> {props.text1}</p>
    </div>
  )
}

export default ServicesCard