import React from 'react';
import {connect} from 'react-redux';
import { checkUserSession } from './redux/user/user-actions';
import {createStructuredSelector} from 'reselect';
import { selectCurrentUser } from './redux/user/user-selector';

import HomePage from './pages/homepage/HomePage';
import { Route, Switch, Redirect } from 'react-router-dom';
import ShopPage from './pages/shop/Shop';
import Header from './components/header/Header';
import SigninAndSignupPage from './pages/signin-and-signup/SigninAndSignup';
import CheckoutPage from './pages/checkout/checkout';

import './App.css';
import { dispatch } from '../../../../../../AppData/Local/Microsoft/TypeScript/3.6/node_modules/rxjs/internal/observable/range';


class App extends React.Component {

    unsubscribeFromAuth = null;

    componentDidMount() {

    const {checkUserSession} = this.props;
    checkUserSession();
    }

    componentWillUnmount() {
      this.unsubscribeFromAuth();
    }

    render() {
        return (
            <div>
                <Header />
                <Switch>
                    <Route exact path='/' component={HomePage} />
                    <Route path='/shop' component={ShopPage} />
                    <Route
                        exact
                        path='/signin'
                        render={() => (this.props.currentUser ? <Redirect to='/' /> : <SigninAndSignupPage />)}
                    />
                    <Route exact path='/checkout' component={CheckoutPage} />
                </Switch>
            </div>
        );
    }
}

const mapStateToProps = createStructuredSelector({
    currentUser: selectCurrentUser
});

const mapDispatchToProps = dispatch => ({
    checkUserSession: () => dispatch(checkUserSession())
});


export default connect(
    mapStateToProps,
    mapDispatchToProps
)(App);
