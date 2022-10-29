import Header from "./Header";
import Footer from "./Footer";
import Main from "./Main";
import PopupWithForm from "./PopupWithForm";
import ImagePopup from "./ImagePopup";
import React, { useState } from "react";

function App() {
  const [isEditProfilePopupOpen, setEditProfilePopupOpen] = useState(false);
  const [isAddPlacePopupOpen, setAddPlacePopupOpen] = useState(false);
  const [isEditAvatarPopupOpen, setEditAvatarPopupOpen] = useState(false);
  const [isImagePopupOpen, setImagePopupOpen] = useState(false);
  const [selectedCard, setSelectedCard] = useState({});

  function handleCardClick(card) {
    setImagePopupOpen(true);
    setSelectedCard(card);
  }

  function handleAddPlaceClick() {
    setAddPlacePopupOpen(true);
  }

  function handleEditProfileClick() {
    setEditProfilePopupOpen(true);
  }

  function handleEditAvatarClick() {
    setEditAvatarPopupOpen(true);
  }

  const closeAllPopups = () => {
    setEditProfilePopupOpen(false);
    setAddPlacePopupOpen(false);
    setEditAvatarPopupOpen(false);
    setImagePopupOpen(false);
    setSelectedCard({});
  }

  return (
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
        name="profile"
        title="Редактировать профиль"
        buttonTitle="Сохранить"
        isOpen={isEditProfilePopupOpen}
        onClose={closeAllPopups}
      >
        <input
          className="input popup__profile-name-input"
          name="username"
          id="profile-name"
          placeholder="Имя"
          type="text"
          minLength="2"
          maxLength="40"
          required
        />
        <span className="popup__error-message popup__error-message_type_profile-name"></span>
        <input
          className="input popup__profile-job-input"
          name="job"
          id="profile-job"
          placeholder="О себе"
          type="text"
          minLength="2"
          maxLength="200"
          required
        />
        <span className="popup__error-message popup__error-message_type_profile-job"></span>
      </PopupWithForm>
      <PopupWithForm
        name="place"
        title="Новое место"
        buttonTitle="Создать"
        isOpen={isAddPlacePopupOpen}
        onClose={closeAllPopups}
      >
        <input
          className="input popup__place-name-input"
          name="placename"
          id="place-name"
          placeholder="Название"
          type="text"
          minLength="2"
          maxLength="30"
          required
        />
        <span className="popup__error-message popup__error-message_type_place-name"></span>
        <input
          className="input popup__place-link-input"
          id="place-link"
          name="link"
          placeholder="Ссылка на картинку"
          type="url"
          required
        />
        <span className="popup__error-message popup__error-message_type_place-link"></span>
      </PopupWithForm>
      <PopupWithForm
        name="avatar"
        title="Обновить аватар"
        buttonTitle="Сохранить"
        isOpen={isEditAvatarPopupOpen}
        onClose={closeAllPopups}
      >
        <input
          className="input popup__avatar-link-input"
          id="update-avatar"
          name="link"
          placeholder="Ссылка на аватар"
          type="url"
          required
        />
        <span className="popup__error-message popup__error-message_type_update-avatar"></span>
      </PopupWithForm>
      <PopupWithForm name="confirm" title="Вы уверены?" buttonTitle="Да" isOpen={false} onClose={closeAllPopups}>
      </PopupWithForm>
      <ImagePopup card={selectedCard} isOpen={isImagePopupOpen} onClose={closeAllPopups} />
    </div>
  );
}

export default App;
