import React from "react";

function ImagePopup(props) {
  return (
    <div className={`popup popup_type_image ${props.card && 'popup_opened'}`}>
      <figure className="popup__image-field">
        <button type="button" onClick={props.onClose} aria-label="Кнопка: закрыть" className="popup__close-button popup__close-button_view"></button>
        <img className="popup__image" src={props.url} alt="#" />
        <figcaption className="popup__caption"></figcaption>
      </figure>
    </div>
  )
}

export default ImagePopup
