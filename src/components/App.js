import '../index.css';
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
  console.log(selectedCard);
  // получаем данные от сервера информацию о себе
  useEffect(() => {
    api.getUserInfo()
      .then((data) => {
        setCurrentUser(data)
      })
      .catch(e => console.log(e))
  }, [])
  // получаем данные от сервера информацию с карточками
  useEffect(() => {
    api.getInitialCards()
      .then((data) => {
        setCards(data)
      })
      .catch(err => console.log(err))
  }, [])
  // функция открытия попапа с аватаром
  const handleEditAvatarClick = () => {
    setIsEditAvatarPopupOpen(!isEditAvatarPopupOpen)
  }
  // функция открытия попапа с профилем
  const handleEditProfileClick = () => {
    setIsEditProfilePopupOpen(!isEditProfilePopupOpen)
  }
  // функция открытия попапа с изображением
  const handleCardClick = ({ link, name, isOpen }) => {
    setSelectedCard({ link, name, isOpen: !isOpen })
  }
  // функция открытия попапа с аватаром
  const handleAddPlaceClick = () => {
    setIsAddPlacePopupOpen(!isAddPlacePopupOpen)
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
      <EditProfilePopup isOpen={isEditProfilePopupOpen} isClose={closeAllPopups} />
      <AddPlasePopup isOpen={isAddPlacePopupOpen} isClose={closeAllPopups} />
      <EditAvararPopup isOpen={isEditAvatarPopupOpen} isClose={closeAllPopups} />
      <ImagePopup isClose={closeAllPopups} card={selectedCard} />
    </div>
  );
}

export default App;
