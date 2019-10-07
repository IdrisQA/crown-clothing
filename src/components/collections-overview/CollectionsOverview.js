import React from 'react';
import {connect} from 'react-redux';
import {createStructuredSelector} from 'reselect';
import { selectollectionsForPreview } from '../../redux/shop/shop-selector';

import CollectionPreview from '../../components/collection-preview/CollectionPreview';

import './collections-overview.css';



const CollectionsOverview = ({ collections }) => (
    <div className='collections-overview'>
        {collections.map(({ id, ...collection }) => (
            <CollectionPreview key={id} {...collection} />
        ))}
    </div>
);

const mapStateToProps = createStructuredSelector({
    collections: selectollectionsForPreview
});

export default connect(mapStateToProps)(CollectionsOverview);