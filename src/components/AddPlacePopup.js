import React from "react";
import PopupWithForm from "./PopupWithForm";

function AddPlasePopup({ isOpen, isClose }) {
    return (
        <PopupWithForm name='addCard' title="Новое место" children={<><div className="popup__text-container">
            <input id="title" type="text" required placeholder="Название" minlength="2" maxlenght="30"
                value="" name="title" className="popup__text popup__text_input_title" />
            <span id="title-error" className="popup__error-message"></span>
        </div>
            <div className="popup__text-container">
                <input id="link_to_the_picture" type="url" placeholder="Ссылка на картинку" required
                    value="" name="link_to_the_picture" className="popup__text popup__text_input_picture" />
                <span id="link_to_the_picture-error" className="popup__error-message"></span>
            </div> </>} isOpen={isOpen} isClose={isClose} />

    );
}

export default AddPlasePopup;