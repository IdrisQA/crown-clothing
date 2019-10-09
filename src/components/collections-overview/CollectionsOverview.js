import React from 'react';
import {connect} from 'react-redux';
import {createStructuredSelector} from 'reselect';
import { selectCollectionsForPreview } from '../../redux/shop/shop-selector';

import CollectionPreview from '../../components/collection-preview/CollectionPreview';

import './collections-overview.css';



const CollectionsOverview = ({ collections, match, history }) => (
    <div className='collections-overview'>
        {collections.map(({ id, ...collection }) => (
            <CollectionPreview key={id} {...collection} match={match} history={history} />
        ))}
    </div>
);

const mapStateToProps = createStructuredSelector({
    collections: selectCollectionsForPreview
});

export default connect(mapStateToProps)(CollectionsOverview);