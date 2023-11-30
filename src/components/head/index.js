import React from "react";
import PropTypes from "prop-types";

import './style.css';

function Head({title, setActive}) {
  return (
    <div className='Head'>
      <h1>{title}</h1>
      {setActive === undefined ? null :
          <div className="Item-action">
            <button onClick={() => setActive(false)}>
              Закрыть
            </button>
          </div>
      }
    </div>
  )
}

Head.PropTypes = {
  title: PropTypes.string,
  setActive: PropTypes.object.isRequired
}

Head.defaultProps = {
  title: ''
}

export default React.memo(Head);
