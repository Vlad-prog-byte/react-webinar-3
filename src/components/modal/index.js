import React from 'react'
import PropTypes from 'prop-types';

import Head from '../head';
import './style.css'
import ListTrash from '../listTrash';
import Total from '../total';

const Modal = ({active, setActive, trash, onClick}) => {
  return (
    <div className='Modal'>
        <div className="Modal-content">
          <Head title='Корзина' setActive={setActive}/>
          <ListTrash trash={trash}
            onClick={onClick}
          />
          <Total trash={trash}/>
        </div> 
    </div>
  )
}

Modal.PropTypes = {
  active: PropTypes.bool.isRequired,
  setActive: PropTypes.object.isRequired,
  trash: PropTypes.object.isRequired,
  onClick: PropTypes.func
}

Modal.defaultPropsTypes = {
  onClick: () => {}
}

export default React.memo(Modal);
