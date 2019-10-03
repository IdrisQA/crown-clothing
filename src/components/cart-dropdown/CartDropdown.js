import React from 'react';
import CustomButton from '../custom-button/CustomButton';
import './cart-dropdown.css';
import {connect} from 'react-redux';
import CartItem from '../cart-item/CartItem';



const CartDropdown = ({cartItems}) => (
    <div className='cart-dropdown'>
        <div className='cart-items' >
            {
                cartItems.map(cartItem => <CartItem key={cartItem.id} item={cartItem} />)
            }
        </div>
        <CustomButton>GO TO CHECKOUT</CustomButton>
    </div>
);

const mapStateToProps = state => ({
    cartItems: state.cart.cartItems
});

export default connect(mapStateToProps)(CartDropdown);