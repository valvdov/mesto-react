import React from "react";
import Header from './Header.js'
import Main from "./Main.js";
import Footer from "./Footer.js";
import PopupWithForm from "./PopupWithForm.js";
import ImagePopup from "./ImagePopup.js";

function App() {
  const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = React.useState(false);
  const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = React.useState(false);
  const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = React.useState(false);
  const [selectedCard, setSelectedCard] = React.useState({
    name: "",
    link: "",
  });

  function handleEditProfileClick() {
    setIsEditProfilePopupOpen(!isEditProfilePopupOpen);
  }

  function handleAddPlaceClick() {
    setIsAddPlacePopupOpen(!isAddPlacePopupOpen);
  }

  function handleEditAvatarClick() {
    setIsEditAvatarPopupOpen(!isEditAvatarPopupOpen);
  }

  function handleCardClick(card) {
    setSelectedCard(card);
  }

  function closeAllPopups() {
    setIsEditProfilePopupOpen(false);
    setIsAddPlacePopupOpen(false);
    setIsEditAvatarPopupOpen(false);
    setSelectedCard({ name: "", link: "" });
  }
  return (
      <div>
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
          isOpen={isEditProfilePopupOpen ? "popup_opened" : ""}
          onClose={closeAllPopups}
          buttonText="Сохранить"
          >
          <input
              className="popup__text"
              id="name"
              type="text"
              name="name"
              defaultValue=""
              placeholder="Имя"
              required=""
              minLength={2}
              maxLength={40}
          />
          <span className="popup__text-error name-error" id="name-error" />
          <input
              className="popup__text"
              id="about"
              type="text"
              name="about"
              defaultValue=""
              placeholder="Профессия"
              required=""
              minLength={2}
              maxLength={200}
          />
          <span className="popup__text-error about-error" id="about-error" />
        </PopupWithForm>

        <PopupWithForm
            name="card-add"
            title="Добавить место"
            isOpen={isAddPlacePopupOpen ? "popup_opened" : ""}
            onClose={closeAllPopups}
            buttonText="Сохранить"
        >
          <input
              className="popup__text"
              id="place"
              type="text"
              name="name"
              defaultValue=""
              placeholder="Название"
              required=""
              minLength={2}
              maxLength={30}
          />
          <span className="popup__text-error name-error" id="place-error" />
          <input
              className="popup__text"
              id="link"
              type="url"
              name="link"
              defaultValue=""
              placeholder="Ссылка на картинку"
              required=""
          />
          <span className="popup__text-error link-error" id="link-error" />
        </PopupWithForm>

        <PopupWithForm
            name="avatar"
            title="Добавить место"
            isOpen={isEditAvatarPopupOpen ? "popup_opened" : ""}
            onClose={closeAllPopups}
            buttonText="Сохранить"
        >
          <input
              className="popup__text"
              id="avatarUrl"
              type="url"
              name="link"
              defaultValue=""
              placeholder="Ссылка на картинку"
              required
          />
          <span className="popup__text-error link-error" id="avatarUrl-error" />
        </PopupWithForm>

        <ImagePopup onClose={closeAllPopups} card={selectedCard} />
      </div>
  );
}

export default App;
