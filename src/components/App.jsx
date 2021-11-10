import React from 'react';
import '../index.css';
import Header from './Header';
import Main from './Main';
import Footer from './Footer';
import PopupWithForm from './PopupWithForm';
import ImagePopup from './ImagePopup';
import api from '../utils/api';
import { CurrentUserContext } from '../context/CurrentUserContext';

function App() {
  const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = React.useState(false);
  const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = React.useState(false);
  const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = React.useState(false);
  const [selectedCard, setSelectedCard] = React.useState(null);
  const [currentUser, setCurrentUser] = React.useState("");

  React.useEffect(() => {
    api.getProfileInfo()
      .then(res => {
        setCurrentUser(res)
      })
      .catch(err => console.log(err));
  }, [])

  function handleEditProfileClick() {
    setIsEditProfilePopupOpen(true)
  }

  function handleAddPlaceClick() {
    setIsAddPlacePopupOpen(true)
  }

  function handleEditAvatarClick() {
    setIsEditAvatarPopupOpen(true)
  }

  function closeAllPopups() {
    setIsEditProfilePopupOpen(false)
    setIsAddPlacePopupOpen(false)
    setIsEditAvatarPopupOpen(false)
    setSelectedCard(null)
  }

  function handleCardClick(card) {
    setSelectedCard(card)
  }

  return (
    <CurrentUserContext.Provider value={currentUser}>
      <div className="App">
        <div className="page">
          <Header />
          <Main
            onEditProfile={handleEditProfileClick}
            onAddPlace={handleAddPlaceClick}
            onEditAvatar={handleEditAvatarClick}
            onCardClick={handleCardClick}
          />
          <Footer />
          <PopupWithForm
            name="edit-profile"
            title="Редактировать профиль"
            submitButtonName="Сохранить"
            isOpen={isEditProfilePopupOpen}
            onClose={closeAllPopups}
          >
            <section className="popup__section">
              <input type="text" id="edit-title" name="name" className="popup__input popup__input_value_name" placeholder="Имя" required minLength="2" maxLength="40" />
              <span id="edit-title-error" className="popup__input-error"></span>
              </section>
            <section className="popup__section">
              <input type="text" id="edit-subtitle" name="link" className="popup__input popup__input_value_job" placeholder="Вид деятельности" required minLength="2" maxLength="200" />
              <span id="edit-subtitle-error" className="popup__input-error"></span>
            </section>
          </PopupWithForm>
          <PopupWithForm
            name="add-place"
            title="Новое место"
            submitButtonName="Создать"
            isOpen={isAddPlacePopupOpen}
            onClose={closeAllPopups}
          >
            <section className="popup__section">
              <input type="text" id="create-title" name="name" placeholder="Название" className="popup__input popup__input_value_place" required minLength="2" maxLength="30" />
              <span id="create-title-error" className="popup__input-error"></span>
            </section>
            <section className="popup__section">
              <input type="url" id="create-subtitle" name="link" placeholder="Ссылка на картинку" className="popup__input popup__input_value_link" required />
              <span id="create-subtitle-error" className="popup__input-error"></span>
            </section>
          </PopupWithForm>
          <PopupWithForm
            name="edit-avatar"
            containerName="popup__container_type_edit-avatar"
            title="Обновить аватар"
            submitButtonName="Сохранить"
            isOpen={isEditAvatarPopupOpen}
            onClose={closeAllPopups}
          >
            <section className="popup__section">
              <input type="url" id="update-avatar" name="avatar" placeholder="Ссылка на новый аватар" className="popup__input popup__input_value_link" required />
              <span id="update-avatar-error" className="popup__input-error"></span>
            </section>
          </PopupWithForm>
          <PopupWithForm
            name="delete-place"
            containerName="popup__container_type_delete-place"
            title="Вы уверены?"
            submitButtonName="Да"
          />
          <ImagePopup
            card={selectedCard}
            onClose={closeAllPopups}
          />
        </div>
      </div>
    </CurrentUserContext.Provider>
  );
}

export default App;
