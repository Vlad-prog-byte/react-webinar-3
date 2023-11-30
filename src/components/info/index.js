import React from "react";
import PropTypes from "prop-types";

import { counting, plural } from "../../utils";
import './style.css';

function Info({trash, setActive}) {

    const getInfo = (trash) => {
        let count = trash.size;
        let sumPrice = counting(trash);
        return `${count} ${plural(trash.size, { one: 'товар', few: 'товара', many: 'товаров'})} / ${sumPrice} ₽`
    }

  return (
    <div className='Info'>
      <div className="Info-title">В корзине:</div>
        {trash.size === 0 
            ?
            <div className="Info-data">пусто</div>
            :
            <div className="Info-data">{ getInfo(trash) }</div>
        }
      <div className="Item-action">
        <button onClick={() => setActive(true)}>
          Перейти
        </button>
      </div>
    </div>
  )
}

Info.PropTypes = {
  trash: PropTypes.object.isRequired,
  setActive: PropTypes.object.isRequired
}

export default React.memo(Info);
