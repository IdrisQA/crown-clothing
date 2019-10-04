import React from 'react';

import './checkout-item.css';
import CartItem from '../cart-item/CartItem';



const CheckoutItem = ({cartItem}) => {
    const {name, imageUrl, price, quantity} = cartItem;
    console.log(CartItem);
    return <div className='checkout-item'>
        <div className='image-container'>
            <img src={imageUrl} alt='item' />
        </div>
        <span className='name'>{name}</span>
        <span className='quantity'>{quantity}</span>
        <span className='price'>${price}</span>
        <div className='remove-button'>&#10005;</div>
    </div>;
}
export default CheckoutItem;