import React, {useState} from "react";
import PropTypes from "prop-types";

function ItemTrash(props) {
  const callbacks = {
    onClick: (e) => {
      e.stopPropagation();
      props.onClick(props.item.title);
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
      <div className='Item-price'>
        {props.item.count}&nbsp;шт
      </div>
      <div className="Item-action">
        <button onClick={ callbacks.onClick }>
          Удалить
        </button>
      </div>
    </div>
  );
}

ItemTrash.PropTypes = {
  item: PropTypes.shape({
    title: PropTypes.title,
    code: PropTypes.number,
    count: PropTypes.number,
    price: PropTypes.number
  }).isRequired,
  onClick: PropTypes.func
}

ItemTrash.defaultProps = {
  onClick: () => {}
}

export default React.memo(ItemTrash);
