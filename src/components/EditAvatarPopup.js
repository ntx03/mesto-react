import React from "react";
import PopupWithForm from "./PopupWithForm";
import { useState } from "react"

function EditAvararPopup({ isOpen, onClose }) {

    const [avatar, setName] = useState('')

    const onChangeAvatar = (e) => {
        setName(e.target.value)
    }

    return (
        <PopupWithForm isOpen={isOpen} onClose={onClose} name='addAvatar' title="Обновить аватар"><div className="popup__text-container">
            <input id="link_to_the_avatar" type="url" required placeholder="ссылка на аватар"
                onChange={onChangeAvatar} value={avatar}
                name="avatar" className="popup__text popup__text_input_picture" />
            <span id="link_to_the_avatar-error" className="popup__error-message"></span>
        </div>  </PopupWithForm>
    )
}

export default EditAvararPopup;