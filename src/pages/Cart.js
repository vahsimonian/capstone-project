import React, { useState, useContext } from 'react'
import CartItem from '../components/CartItem'
import { Context } from '../Context'

function Cart() {
  const [textButton, setTextButton] = useState('Place Order')
  const { cartItems, setCartItems } = useContext(Context)
  const totalCost = cartItems.length * 5.99

  const itemsInCartElements = cartItems.map((item) => {
    return <CartItem key={item.id} item={item} />
  })

  function placeOrder() {
    setTextButton('Ordering...')
    setTimeout(() => {
      setTextButton(textButton)
      setCartItems([])
    }, 1500)
  }

  return (
    <main className='cart-page'>
      <h1>Check Out</h1>
      {itemsInCartElements}
      <p className='total-cost'>Total: {totalCost}</p>
      {cartItems.length > 0 ? (
        <div className='order-button'>
          <button onClick={placeOrder}>{textButton}</button>
        </div>
      ) : (
        ''
      )}
    </main>
  )
}

export default Cart
