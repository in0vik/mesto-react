import Header from "./Header";
import "../index.css";
import Footer from "./Footer";
import Main from "./Main";
import PopupWithForm from "./PopupWithForm";
import ImagePopup from "./ImagePopup";
import React from "react";

function App() {
  const [isEditProfilePopupOpen, setEditProfilePopupOpen] = React.useState(false);
  const [isAddPlacePopupOpen, setAddPlacePopupOpen] = React.useState(false);
  const [isEditAvatarPopupOpen, setEditAvatarPopupOpen] = React.useState(false);
  const [isImagePopupOpen, setImagePopupOpen] = React.useState(false);
  const [selectedCard, setSelectedCard] = React.useState({});

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
        <button
          className="button popup__submit-button popup__submit-button_type_profile"
          type="submit"
        >
          Сохранить
        </button>
      </PopupWithForm>
      <PopupWithForm
        name="place"
        title="Новое место"
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
        <button
          className="button popup__submit-button popup__submit-button_type_place"
          type="submit"
        >
          Создать
        </button>
      </PopupWithForm>
      <PopupWithForm
        name="avatar"
        title="Обновить аватар"
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
        <button
          className="button popup__submit-button popup__submit-button_update-avatar"
          type="submit"
        >
          Сохранить
        </button>
      </PopupWithForm>
      <PopupWithForm name="confirm" title="Вы уверены?" isOpen={false} onClose={closeAllPopups}>
        <button
          className="button popup__submit-button popup__submit-button_type_delete-card"
          type="submit"
        >
          Да
        </button>
      </PopupWithForm>
      <ImagePopup card={selectedCard} isOpen={isImagePopupOpen} onClose={closeAllPopups} />
    </div>
  );
}

export default App;
