import React from "react";
import { CurrentUserContext } from "../context/CurrentUserContext";

function Card(options) {
  const currentUser = React.useContext(CurrentUserContext);

  const isOwn = options.ownerId === currentUser._id;
  const cardDeleteButtonClassName = (
    `card__delete-button ${isOwn ? 'card__delete-button_visible' : 'card__delete-button_hidden'}`
  );

  const isLiked = options.like.some(i => i._id === currentUser._id);
  const cardLikeButtonClassName = (
    `card__like-button ${isLiked ? 'card__like-button_active' : 'card__like-button'}`
  );

  function handleClick () {
    options.handleClick(options)
  }

  return(
    <li className="card">
      <img className="card__image" onClick={handleClick} src={options.url} alt={options.alt} />
      <div className="card__section">
        <h2 className="card__title">{options.title}</h2>
        <button type="button" aria-label="Кнопка: удалить карточку" className={cardDeleteButtonClassName}></button>
        <div className="card__like-section">
          <button type="button" aria-label="Кнопка: мне нравится" className={cardLikeButtonClassName}></button>
          <p className="card__like-counter">{options.like?.length}</p>
        </div>
      </div>
    </li>
  );
}

export default Card;
