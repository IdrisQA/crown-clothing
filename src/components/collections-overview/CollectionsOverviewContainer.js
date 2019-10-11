import {connect} from 'react-redux';
import {createStructuredSelector} from 'reselect';
import {selectIsCollectionFetching} from '../../redux/shop/shop-selector'
import WithSpinner from '../with-spinner/withSpinner';
import {compose} from 'redux';

import CollectionsOverview from './CollectionsOverview';


const mapStateToProps =createStructuredSelector({
    isLoading: selectIsCollectionFetching
});


const CollectionsOverviewContainer = compose(
    connect(mapStateToProps),
    WithSpinner
)(CollectionsOverview);

export default CollectionsOverviewContainer;