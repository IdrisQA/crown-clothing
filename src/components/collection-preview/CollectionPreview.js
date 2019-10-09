import React from 'react';
import './collection-preview.css';
import CollectionItem from '../collection-item/CollectionItem'



const CollectionPreview = ({ title, items, match, history }) => {
    console.log(match);
    return (
        <div className='collection-preview'>
            <h1 style={{ cursor: 'pointer' }} onClick={() => history.push(match.url + '/' + title.toLowerCase())}>
                {title.toUpperCase()}
            </h1>
            <div className='preview'>
                {items
                    .filter((item, index) => index < 4)
                    .map((item) => (
                        <CollectionItem
                            key={item.id}
                            item={item}
                        />
                    ))}
            </div>
        </div>
    );
}
export default CollectionPreview;