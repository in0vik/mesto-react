function Card({ cardData, onCardClick }) {
  
  function handleClick() {

    onCardClick(cardData)
  }

  return (
    <article key={cardData._id} className="card" onClick={handleClick}>
      <img src={cardData.link} alt={cardData.name} className="card__image" />
      <div className="card__info-block">
        <h2 className="card__title">{cardData.name}</h2>
        <div className="card__like-container">
          <button className="button card__like-button"></button>
          <p className="card__like-button-counter">{cardData.likes.length}</p>
        </div>
      </div>
      <button className="button card__delete-button"></button>
    </article>
  )
}

export default Card;