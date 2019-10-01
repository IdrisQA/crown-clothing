import React from 'react';
import './collection-preview.css';
import CollectionItem from '../collection-item/CollectionItem'



const CollectionPreview = ({title, items}) => (
    <div className='collection-preview'>
        <h1>{title.toUpperCase()}</h1>
        <div className='preview'>
            {
                items.filter((item, index) => index < 4).map(({id, ...otherItem}) => (
                    <CollectionItem key={id} {...otherItem} />
                ))
            }
        </div>
    </div>
);
export default CollectionPreview;