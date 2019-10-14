import React, {useEffect} from 'react';
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


const App = ({checkUserSession, currentUser}) => {

    useEffect(() => {
        checkUserSession();
    }, [checkUserSession]);

    return (
        <div>
            <Header />
            <Switch>
                <Route exact path='/' component={HomePage} />
                <Route path='/shop' component={ShopPage} />
                <Route
                    exact
                    path='/signin'
                    render={() => (currentUser ? <Redirect to='/' /> : <SigninAndSignupPage />)}
                />
                <Route exact path='/checkout' component={CheckoutPage} />
            </Switch>
        </div>
    );
   
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
