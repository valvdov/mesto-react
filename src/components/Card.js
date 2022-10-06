import React from "react";

function Card(props) {

    function handleCardClick() {
        props.onCardClick(props.card);
    }

    return (
        <article className="elements__card">
            <img src={props.card.link} className="elements__card-image" alt={props.card.name} onClick={handleCardClick}/>
            <div className="elements__card-info">
                <h2 className="elements__card-heading">{props.card.name}</h2>
                <div className="button-like__container">
                    <button
                        className="button-like"
                        type="button"
                        aria-label="Лайк"
                    ></button>
                    <span className="button-like__counter">{props.card.likes.length}</span>
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
