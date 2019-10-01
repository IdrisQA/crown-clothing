import React from 'react';
import './App.css';
import HomePage from './pages/homepage/HomePage';
import {Route, Switch} from 'react-router-dom';
import ShopPage from './pages/shop/Shop';
import Header from './components/header/Header';
import SigninAndSignupPage from './pages/signin-and-signup/SigninAndSignup';
import {auth} from './firebase/firebase.utils';


class App extends React.Component {
    constructor() {
      super();
      this.state = {
        currentUser: null
      }
    }

    unsubscribeFromAuth = null;

    componentDidMount() {
      this.unsubscribeFromAuth = auth.onAuthStateChanged(user => {
        this.setState({currentUser: user});
        console.log(user);
      });
    }

    componentWillUnmount() {
      this.unsubscribeFromAuth();
    }

    render() {
        return (
            <div>
                <Header currentUser={this.state.currentUser} />
                <Switch>
                    <Route exact path='/' component={HomePage} />
                    <Route exact path='/shop' component={ShopPage} />
                    <Route exact path='/signin' component={SigninAndSignupPage} />
                </Switch>
            </div>
        );
    }
}
export default App;
