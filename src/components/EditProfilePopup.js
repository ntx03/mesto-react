import React from "react";
import PopupWithForm from "./PopupWithForm";

function EditProfilePopup({ isOpen, isClose }) {
    return (
        <PopupWithForm name='editProfile' title="Редактировать профиль" children={<><div className="popup__text-container">
            <input id="name" type="text" required placeholder="Имя" minlength="2" maxlenght="40"
                value="Жак-Ив Кусто" name="name" className="popup__text popup__text_input_name" />
            <span id="name-error" className="popup__error-message"></span>
        </div>
            <div className="popup__text-container">
                <input id="about_me" type="text" placeholder="О себе" minlength="2" maxlenght="200" required
                    value="Исследователь океана" name="aboutMe" className="popup__text popup__text_input_job " />
                <span id="about_me-error" className="popup__error-message"></span>
            </div> </>} isOpen={isOpen} isClose={isClose} />
    );

}

export default EditProfilePopup;