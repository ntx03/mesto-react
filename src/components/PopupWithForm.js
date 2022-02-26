import React from "react";

function PopupWithForm({ name, title, children, isOpen, isClose }) {
    return (
        <div className={isOpen ? `popup popup_type_${name} popup_open` : `popup popup_type_${name}`}>
            <div class="popup__container">
                <button className="popup__icon" type="button" aria-label="закрытие" onClick={isClose}></button>
                <form name={name} className="popup__content"
                    novalidate>
                    <h2 className="popup__title">{title}</h2>
                    {children}
                    <button className="popup__button" type="submit">Сохранить</button>
                </form>
            </div>
            <div id="overlay_profile" className="popup__overlay" onClick={isClose}></div>
        </div>
    );
}

export default PopupWithForm;