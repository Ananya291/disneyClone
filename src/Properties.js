import React from 'react'
import  './Properties.css'

//Props are arguments passed into React components.
//React Props are like function arguments in JavaScript and attributes in HTML.
//<a href="https://www.w3schools.com">Visit W3Schools</a>
//<img src="img_girl.jpg">
//pass data from parent to child

function Properties({text , image, name}) {
  return (
    <div className='properties'>
        <p className="pro_text">{text}</p>
        <img src={image} className="image"/>
        <h1>{name}</h1>
        
    </div>
  )
}

export default Properties