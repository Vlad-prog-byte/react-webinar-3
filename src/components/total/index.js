import React from 'react'
import PropTypes from 'prop-types';

import { counting } from '../../utils';
import './style.css';

const Total = ({trash}) => {

  return (
    <div className='Total'>
        <div className='Total-text'>Итого</div>
        <div className='Total-sum'>{counting(trash)}&nbsp;₽</div>
    </div>
  )
}

Total.PropTypes = {
  trash: PropTypes.object.isRequired
}

export default React.memo(Total);
