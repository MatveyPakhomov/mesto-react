import React from "react";

function Card(props) {
  function handleClick () {
    props.onCardClick(props.card)
  }

  return(
    <li className="card">
      <img className="card__image" onClick={handleClick} src={props.url} alt={props.alt} />
      <div className="card__section">
        <h2 className="card__title">{props.title}</h2>
        <button type="button" aria-label="Кнопка: удалить карточку" className="card__delete-button"></button>
        <div className="card__like-section">
          <button type="button" aria-label="Кнопка: мне нравится" className="card__like-button"></button>
          <p className="card__like-counter">{props.like && props.like.length}</p>
        </div>
      </div>
    </li>
  );
}

export default Card;
