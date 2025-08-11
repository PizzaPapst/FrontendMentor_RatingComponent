import React from 'react'

function RatingButton(props) {
    console.log(props.isOn)
  return (
    <button
          className={`rating-btn ${props.isOn ? 'selected' : undefined}`}
          onClick={() => props.onClick(props.id)}
        >
          {props.rating}
        </button>
  )
}

export default RatingButton
