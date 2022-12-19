import React, { useState } from "react";
import star from "../../images/icon-star.svg";

export default function Step1() {

  const [rating, setRating] = useState();
  

  function submit() {
    const ratingSelected = document.querySelector(".selected");
    if (ratingSelected === null) {
      alert("Please select a rating!");
    } else {
    const ratingNumber = ratingSelected.innerHTML;
    document.querySelector(".number__rating").innerHTML = ratingNumber;
    document.querySelector(".step1").classList.remove("active");
    document.querySelector(".step2").classList.add("active");
    }
  }

  return (
    <div className="step1 step active">
      <div className="card__image--container">
        <div className="card__image">
          <img src={star} alt="Star Icon" />
        </div>
      </div>
      <div className="card__text">
        <h2>How did we do?</h2>
        <p>
          Please let us know how we did your support request. All feedback is
          appreciated to help us improve our offering!
        </p>
      </div>
      <div className="card__rating">
      <p onClick={() => setRating(1)} className={`rating__number ${rating === 1 ? 'selected' : ''}`}>1</p>
      <p onClick={() => setRating(2)} className={`rating__number ${rating === 2 ? 'selected' : ''}`}>2</p>
      <p onClick={() => setRating(3)} className={`rating__number ${rating === 3 ? 'selected' : ''}`}>3</p>
      <p onClick={() => setRating(4)} className={`rating__number ${rating === 4 ? 'selected' : ''}`}>4</p>
      <p onClick={() => setRating(5)} className={`rating__number ${rating === 5 ? 'selected' : ''}`}>5</p>
      </div>
      <div className="card__button">
        <button onClick={submit}>Submit</button>
      </div>
    </div>
  );
}
