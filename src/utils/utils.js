export const validationConfig = {
  formSelector: '.popup__form',
  inputSelector: '.popup__input',
  submitButtonSelector: '.popup__submit-button',
  inactiveButtonClass: 'popup__submit-button_inactive',
  inputErrorClass: 'popup__input_type_error',
  errorClass: 'popup__input-error_active'
};

export const container = document.querySelector('.elements__list');
export const itemTemplate = document.querySelector('.template-elements');

const profile = document.querySelector('.profile');
export const editButton = profile.querySelector('.profile__edit-button');
export const profileName = profile.querySelector('.profile__title');
export const profileJob = profile.querySelector('.profile__subtitle');
export const addButton = profile.querySelector('.profile__add-button');
export const updateButton = profile.querySelector('.profile__avatar-edit-button');
export const profileAvatar = profile.querySelector('.profile__avatar');

//popups
const popupEdit = document.querySelector('.popup_type_edit');

//popups input
export const nameInput = popupEdit.querySelector('.popup__input_value_name');
export const jobInput = popupEdit.querySelector('.popup__input_value_job');

//формы для валидации
export const formProfile = document.querySelector('.popup__form_type_edit');
export const formCard = document.querySelector('.popup__form_type_create');
export const formUpdateAvatar = document.querySelector('.popup__form_type_update-avatar');

//селекторы попапов
export const popupPreview = '.popup_type_view';
export const popupCard = '.popup_type_create';
export const popupProfile = '.popup_type_edit';
export const popupDelete = '.popup_type_delete';
export const popupAvatar = '.popup_type_update-avatar';
