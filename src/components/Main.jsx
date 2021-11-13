import React from "react";
import { CurrentUserContext } from "../context/CurrentUserContext";
import profileAvatar from "../images/profile-Avatar.jpg"
import api from "../utils/api";
import Card from "./Card";

function Main(props) {
  const [cards, setCards] = React.useState([]);
  const currentUser = React.useContext(CurrentUserContext);

  React.useEffect(() => {
    api.getCardList()
      .then(res => {
        setCards(
          res.map((item) => ({
            ownerId: item.owner._id,
            cardId: item._id,
            key: item._id,
            url: item.link,
            title: item.name,
            alt: item.name,
            likes: item.likes,
          }))
        )
      })
      .catch(err => console.log(err));
  }, []);

  function handleCardLike(props) {
    // Снова проверяем, есть ли уже лайк на этой карточке
    const isLiked = props.likes.some(i => i._id === currentUser._id);

    // Отправляем запрос в API и получаем обновлённые данные карточки
    // api.likeCard(props.cardId, !isLiked)
    //   .then((newCard) => {
    //     setCards((state) => state.map((c) => c._id === props.cardId ? newCard : c));
    //   });

    if (!isLiked) {
      api.likeCard(props.cardId)
        .then((newCard) => {
          setCards((state) => state.map((c) => c._id === props.cardId ? newCard : c));
        })
        .catch(err => console.log(err));
    } else {
      api.unlikeCard(props.cardId)
        .then(newCard => {
          setCards((state) => state.map((c) => c._id === props.cardId ? newCard : c));
        })
        .catch(err => console.log(err));
    }
  }

  function handleCardDelete(props) {
    api.deleteCard(props.cardId)
      .then(res => {
        // setCards(cards.filter(card => card(res)))
      })
      .catch(err => console.log(err));

  }

  return (
    <main className="content">
      <section className="profile content__profile">
          <button type="button" onClick={props.onEditAvatar} aria-label="Кнопка: поменять аватар" className="profile__avatar-edit-button">
            <img
              src={currentUser.avatar ? currentUser.avatar : profileAvatar}
              alt="Картинка: портрет - Жак-Ив Кусто"
              className="profile__avatar"
            />
          </button>
        <div className="profile__info">
          <h1 className="profile__title">{currentUser.name ? currentUser.name : 'Жак-Ив Кусто'}</h1>
          <button type="button" onClick={props.onEditProfile} aria-label="Кнопка: редактировать" className="profile__edit-button"></button>
          <p className="profile__subtitle">{currentUser.about ? currentUser.about : 'Исследователь океана'}</p>
        </div>
        <button type="button" onClick={props.onAddPlace} aria-label="Кнопка: добавить место" className="profile__add-button"></button>
      </section>
      <div className="cards">
        <ul className="cards__list">
        {cards.map(({ key, ...options }) => <Card handleClick={props.onCardClick} onCardLike={handleCardLike} onCardDelete={handleCardDelete} key={key} { ...options } />)}
        </ul>
      </div>
    </main>
  )
}

export default Main;
