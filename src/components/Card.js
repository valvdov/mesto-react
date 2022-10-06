import React from "react";

function Card({card, onCardClick}) {

    function handleCardClick() {
        onCardClick(card);
    }

    return (
        <article className="elements__card">
            <img src={card.link} className="elements__card-image" alt={card.name} onClick={handleCardClick}/>
            <div className="elements__card-info">
                <h2 className="elements__card-heading">{card.name}</h2>
                <div className="button-like__container">
                    <button
                        className="button-like"
                        type="button"
                        aria-label="Лайк"
                    ></button>
                    <span className="button-like__counter">{card.likes.length}</span>
                </div>
            </div>
            <button
                className="button-delete"
                type="button"
                aria-label="Удалить"
            ></button>
        </article>

    );
}

export default Card;
