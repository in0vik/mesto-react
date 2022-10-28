import React from "react";
import api from "../utils/api";
import Card from "./Card";

function Main({ onEditProfile, onAddPlace, onEditAvatar, onCardClick }) {
  const [userName, setUserName] = React.useState('');
  const [userDescription, setUserDescription] = React.useState('');
  const [userAvatar, setUserAvatar] = React.useState('');
  const [cards, setCards] = React.useState([]);

  React.useEffect(() => {
    Promise.all([api.getUserInfo(), api.getInitialCards()])
      .then(([userData, cards]) => {
        setUserName(userData.name);
        setUserDescription(userData.about);
        setUserAvatar(userData.avatar);
        setCards(cards);
      })
      .catch(err => console.log(err)); 
  }, [])

  return (
    <main className="content">
      <section className="profile">
        <div className="profile__avatar-container" onClick={onEditAvatar}>
          <div className="profile__avatar-change-overlay link"></div>
          <img src={userAvatar} alt="Аватар" className="profile__avatar link" />
        </div>
        <div className="profile__information">
          <h1 className="profile__name">{userName}</h1>
          <button className="button profile__edit-button" type="button" onClick={onEditProfile}></button>
          <p className="profile__job">{userDescription}</p>
        </div>
        <button className="button profile__add-person-button" type="button" onClick={onAddPlace}></button>
      </section>
      <section className="elements">
        {cards.map((card) => {
          return (
            <Card key={card._id} cardData={card} onCardClick={onCardClick}/>
          )
        })}
      </section>
    </main>
  )
}

export default Main;