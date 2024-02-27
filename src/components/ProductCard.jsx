import React from 'react'

function ProductCard(props) {
  return (
    <div className='project-card'>
        <img src={props.img} alt="" />
        <h3 className='head'>{props.h1}</h3>
        <p className='text'>{props.text}</p>
        <p className='text1'>{props.text1}</p>
        <p className='text2'>{props.text2}</p>
    </div>
  )
}

export default ProductCard