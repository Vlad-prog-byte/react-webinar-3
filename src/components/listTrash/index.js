import React from "react";
import PropTypes from 'prop-types';

import ItemTrash from "../itemTrash";
import './style.css';

function ListTrash({ trash, onClick }) {

    const getItemsTrash = (trash) => {
        let items = [];
        trash.forEach((value, key) =>  {
            let item = { ...value, title: key }
            items.push(
                <div className='List-item'>
                    <ItemTrash  item={item} onClick={onClick}/>
                </div>
            );

        })
        return items;
    }
  return (
    <div className='ListTrash'>
        {getItemsTrash(trash)}
    </div>
  )
}

ListTrash.PropTypes = {
    trash: PropTypes.object.isRequired,
    onClick: PropTypes.func
}

ListTrash.defaultPropTypes = {
    onClick: () => {}
}

export default React.memo(ListTrash);
