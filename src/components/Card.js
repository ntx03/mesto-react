import React from "react";
const Card = ({ card, onEditPopupImage }) => {


    const handleClick = () => {
        onEditPopupImage(card)
    }

    return (
        <article id="template" className="card">
            <div className="card__image-container">
                <img className="card__image" onClick={handleClick} src={card.link} alt={card.name} />
            </div>
            <div className="card__title-container">
                <h2 className="card__title">{card.name}</h2>
                <div className="card__heard-container">
                    <button className="card__heart" type="button" aria-label="отметка карточки"></button>
                    <p className="card__heard-number">{card.likes.length}</p>
                </div>
            </div>
            <button className="card__delete card__delete_visible" type="button"
                aria-label="удаление карточки"></button>
        </article>
    )
}

export default Card;