import React from "react";
import {apiData} from "../utils/Api.js";
import Card from "./Card.js";
import profileAvatar from '../images/profile_image.jpg'
import profileImageEdit from '../images/button_edit.svg'

function Main({
        onEditAvatar,
        onEditProfile,
        onAddPlace,
        onCardClick}) {
    const [userName, setUserName] = React.useState("");
    const [userDescription, setUserJob] = React.useState("");
    const [userAvatar, setUserAvatar] = React.useState("");
    const [cards, setCards] = React.useState([]);

    React.useEffect(() => {
        apiData
            .getUserProfile()
            .then((userData) => {
                setUserName(userData.name);
                setUserJob(userData.about);
                setUserAvatar(userData.avatar);
            })
            .catch((err) => {
                console.log(err);
            });
        apiData
            .getInitialCards()
            .then((cards) => {
                setCards(cards);
            })
            .catch((err) => {
                console.log(err);
            });
    }, []);

    return (
        <main className="content">
            <section className="profile">
                <div className="profile__main">
                    <div className="profile__image-container">
                        <img
                            src={userAvatar}
                            alt="Аватар пользователя"
                            className="profile__image"
                        />
                        <span className="profile__image-span" onClick={onEditAvatar}>
            <img
                src={profileImageEdit}
                className="profile__image-edit"
                alt="Редактировать"

            />
          </span>
                    </div>
                    <div className="profile__info">
                        <div className="profile__text">
                            <h1 className="profile__name">{userName}</h1>
                            <button
                                className="profile__edit-button"
                                type="button"
                                aria-label="Редактировать"
                                onClick={onEditProfile}
                            />
                        </div>
                        <p className="profile__job">{userDescription}</p>
                    </div>
                </div>
                <button
                    className="profile__add-button"
                    type="button"
                    aria-label="Добавить"
                    onClick={onAddPlace}
                />
            </section>
            <section className="elements">
            {cards.map((card) => (<Card key={card._id} card={card} onCardClick={onCardClick} />))}
            </section>
        </main>
    );
}
export default Main;