import { useState} from 'react'
import './App.css'
import starIcon from "./assets/icon-star.svg";
import thx from "./assets/illustration-thank-you.svg";
import RatingButton from './RatingButton';

function App() {
  const [ratingObj, setRatingObj] = useState(generateData())
  const [submittedRating, setSubmittedRating] = useState(null)

  function generateData(){
    var array = []
    for(let i = 0; i <5; i++){
      const obj = {
        rating: i+1,
        isOn: false
      }
      array.push(obj)
    }
    return array
  }

  function onClick(id){
    console.log(id)
    setRatingObj((prevRatingObj)=>{
      return prevRatingObj.map((ratingElem, index) =>{
        if(index === id){
          return {
            ...ratingElem,
            isOn: !ratingElem.isOn
          }
        } else {
          return {
            ...ratingElem,
            isOn: false
          }
        }
      })
    })
  }

  function onSubmit(){
    let rating
    ratingObj.forEach(element => {
      if(element.isOn){
        rating = element.rating
      }  
    });
    console.log(rating)
    setSubmittedRating(rating)
  }
  
  return (
    submittedRating ? 
    <main className='main-thx'>
      <img src={thx} className='' alt=''/>
      <p className='p-thx'>{`You selected ${submittedRating} out of 5`}</p>
      <h1>Thank you!</h1>
      <p>We appreciate you taking the time to give a rating. If you ever need more support, don't hesitate to get in touch!</p>
    </main> 
    :
    <main>
      <div className='starIcon-container'>
        <img src={starIcon} className='starIcon' alt=''/>
      </div>
      <h1>How did we do?</h1>
      <p>Please let us know how we did with your support request. All feedback is appreciated to help us improve our offering.</p>
        <div className='ratingBtn-container'>
          {ratingObj && ratingObj.map((ratingElem, index)=><RatingButton 
              rating={ratingElem.rating}
              isOn={ratingElem.isOn}
              id={index}
              key={index}
              onClick={onClick}
            />
          )}
        </div>
        <button
          className='submit-btn'
          onClick={onSubmit}
        >Submit</button>
    </main>
  )
}

export default App
