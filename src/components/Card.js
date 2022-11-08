import React from 'react'

function Card(props) {
  return (
    <div className="Card">

    <div className="cardImg"><img src={props.data.image} alt="loading image" /></div>
    <div className="cardContent">
        <h3>{props.data.number}</h3>
        <p>{props.data.placeholder}</p>
        <b>...</b>
        </div>
    </div>
  )
}

export default Card