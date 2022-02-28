import React from "react";
import PopupWithForm from "./PopupWithForm";
import { useState } from "react"

function AddPlasePopup({ isOpen, onClose }) {

    const [namePlace, setNamePlase] = useState('')
    const [link, setLink] = useState('')

    const onChangePlase = (e) => {
        setNamePlase(e.target.value)
    }
    const onChangeLink = (e) => {
        setLink(e.target.value)
    }

    return (
        <PopupWithForm name='addCard' title="Новое место" isOpen={isOpen} onClose={onClose}>  <div className="popup__text-container">
            <input id="title" type="text" required placeholder="Название" minLength="2" maxlenght="30"
                onChange={onChangePlase}
                value={namePlace} name="title" className="popup__text popup__text_input_title" />
            <span id="title-error" className="popup__error-message"></span>
        </div>
            <div className="popup__text-container">
                <input id="link_to_the_picture" type="url" placeholder="Ссылка на картинку" required
                    value={link} onChange={onChangeLink} name="link_to_the_picture" className="popup__text popup__text_input_picture" />
                <span id="link_to_the_picture-error" className="popup__error-message"></span>
            </div>  </PopupWithForm>

    );
}

export default AddPlasePopup;