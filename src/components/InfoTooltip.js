import React from "react";
import UnionOk from "../images/UnionOk.svg";
import UnionErr from "../images/UnionErr.svg";

export const Tooltip = (props) => {

  const text =
    props.status === "error"
      ? "Что-то пошло не так! Попробуйте ещё раз."
      : "Вы успешно зарегистрировались!";

  const image = 
    props.status === "error" 
      ? UnionErr 
      : UnionOk;

  return (
    <div
      className={`popup popup_type_infoTooltip ${
        props.isOpen ? "popup_opened" : ""
      }`}
    >
      <div className="popup__container popup__container_type_infoTooltip">
        <button
          type="button"
          aria-label="Закрыть форму"
          className="popup__button-close"
          onClick={props.onClose}
        />
        <img
          className="popup__image_type_infoTooltip"
          src={image}
          alt={props.status}
        />
        <p className="popup__title_type_infoTooltip">{text}</p>
      </div>
    </div>
  );
};
