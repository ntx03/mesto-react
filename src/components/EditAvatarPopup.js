import React from "react";
import PopupWithForm from "./PopupWithForm";

function EditAvararPopup({ isOpen, isClose }) {
    return (
        <PopupWithForm name='addAvatar' title="Обновить аватар" children={<><div className="popup__text-container">
            <input id="link_to_the_avatar" type="url" required placeholder="ссылка на аватар" value=""
                name="avatar" class="popup__text popup__text_input_picture" />
            <span id="link_to_the_avatar-error" className="popup__error-message"></span>
        </div></>} isOpen={isOpen} isClose={isClose} />
    )
}

export default EditAvararPopup;