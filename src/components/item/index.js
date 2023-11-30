import React, {useState} from "react";
import PropTypes from "prop-types";
import {plural} from "../../utils";
import './style.css';

function Item(props) {

  const callbacks = {
    onClick: (e) => {
      e.stopPropagation();
      props.onClick(props.item.code);
    },
  }

  return (
    <div className='Item'
         onClick={callbacks.onClick}>
      <div className='Item-code'>{props.item.code}</div>
      <div className='Item-title'>
        {props.item.title}
      </div>
      <div className='Item-price'>
        {props.item.price}&nbsp;₽
      </div>
      <div className="Item-action">
        <button onClick={ callbacks.onClick }>
          Добавить
        </button>
      </div>
    </div>
  );
}

Item.PropTypes = {
  item: PropTypes.shape({
    code: PropTypes.number,
    title: PropTypes.string,
    price: PropTypes.number
  }).isRequired,
  onClick: PropTypes.func
}

Item.defaultProps = {
  onClick: () => {}
}

export default React.memo(Item);
