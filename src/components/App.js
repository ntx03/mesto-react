import { useState, useEffect } from "react";
import Header from '../components/Header';
import Main from '../components/Main';
import Footer from '../components/Footer';
import EditProfilePopup from '../components/EditProfilePopup';
import AddPlasePopup from './AddPlacePopup';
import EditAvararPopup from './EditAvatarPopup';
import api from "../utils/api";
import ImagePopup from './ImagePopup';


function App() {
  const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = useState(false);
  const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = useState(false);
  const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = useState(false);
  const [selectedCard, setSelectedCard] = useState({ isOpen: false });
  const [currentUser, setCurrentUser] = useState({});
  const [cards, setCards] = useState({});

  // получаем данные от сервера информацию о себе и карточки
  useEffect(() => {
    api.getUserInfo()
      .then((data) => {
        setCurrentUser(data)
      })
      .catch(e => console.log(e))
    api.getInitialCards()
      .then((data) => {
        setCards(data)
      })
      .catch(err => console.log(err))
  }, [])

  // функция открытия попапа с аватаром
  const handleEditAvatarClick = () => {
    setIsEditAvatarPopupOpen(true)
  }
  // функция открытия попапа с профилем
  const handleEditProfileClick = () => {
    setIsEditProfilePopupOpen(true)
  }
  // функция открытия попапа с изображением
  const handleCardClick = ({ link, name, isOpen }) => {
    setSelectedCard({ link, name, isOpen: !isOpen })
  }
  // функция открытия попапа с аватаром
  const handleAddPlaceClick = () => {
    setIsAddPlacePopupOpen(true)
  }
  // функция закрытия всех попапов
  const closeAllPopups = () => {
    setIsEditAvatarPopupOpen(false)
    setIsEditProfilePopupOpen(false)
    setIsAddPlacePopupOpen(false)
    setSelectedCard({ isOpen: false })
  }
  return (
    <div className="app">
      <div className="page">
        <Header />
        <Main onEditProfile={handleEditProfileClick}
          onAddPlace={handleAddPlaceClick}
          onEditAvatar={handleEditAvatarClick}
          userAvatar={currentUser}
          userName={currentUser.name}
          userDescription={currentUser.about}
          userAvatar={currentUser.avatar}
          cards={cards}
          onEditPopupImage={handleCardClick}
        />
        <Footer />
      </div>
      <EditProfilePopup isOpen={isEditProfilePopupOpen} onClose={closeAllPopups} />
      <AddPlasePopup isOpen={isAddPlacePopupOpen} onClose={closeAllPopups} />
      <EditAvararPopup isOpen={isEditAvatarPopupOpen} onClose={closeAllPopups} />
      <ImagePopup onClose={closeAllPopups} card={selectedCard} />
    </div>
  );
}

export default App;
