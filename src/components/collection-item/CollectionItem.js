import React from 'react';
import './collection-item.css';



const CollectionItem = ({id, name, price, imageUrl}) => (
    <div className='collection-item'>
        <div className='image' style={{ backgroundImage:  `url(${imageUrl})`}} />
        <div className='collection-footer'>
            <spa className='name'>{name}</spa>
            <span className='price'>{price}</span>
        </div>
    </div>
)
export default CollectionItem;