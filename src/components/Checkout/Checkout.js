import React, { useState } from 'react'
import OrderSummary from './OrderSummary'
import Payment from './Payment'

const Header = (props) => {
  return (
    <header>
      <input onChange={props.onChange} type="range" max="100" min="1" step="1" />
    </header>
  )
}

const Checkout = (props) => {
  const [Duration, setDuration] = useState(props.InitialState)

  const durationPrice = Duration * 320
  const discount = 0.1 * durationPrice
  const subtotal = durationPrice - discount
  const tax = 0.3 * durationPrice
  const total = subtotal + tax

  const handleChange = (e) => {
    setDuration(e.target.value);
  }

  return (
    <div className="Checkout">
      <Header onChange={handleChange} />
      <OrderSummary duration={Duration} discount={discount} tax={tax} durationPrice={durationPrice} subtotal={subtotal} total={total} />
      <Payment />
    </div>
  )
}

export default Checkout
