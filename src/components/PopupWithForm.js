function PopupWithForm({name, title, buttonTitle, children, isOpen, onClose}) {
  return (
    <section className={`popup popup_type_form popup_type_${name} ${isOpen ? 'popup_opened' : ''}`}>
      <form className="popup__container" name={name} noValidate >
        <button className="button popup__close-button" type="button" onClick={onClose}></button>
        <h2 className="popup__title">{title}</h2>
          {children}
          <button
          className={`button popup__submit-button popup__submit-button_type_${name}`}
          type="submit"
        >
          {buttonTitle}
        </button>
      </form>
    </section>
  )
}

export default PopupWithForm;