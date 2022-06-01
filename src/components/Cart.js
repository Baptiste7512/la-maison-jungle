import '../styles/Cart.css'
import { useState } from 'react'

function Cart({ cart, updateCart }) {
 const monsteraPrice = 8
 const [isOpen, setIsOpen] = useState(false)
 /* let total = monsteraPrice * cart */


 return isOpen ? (
    <div className='lmj-cart'>
     <button className='lmj-button'
             onClick={() => setIsOpen(false)}>
       fermer
     </button>
     <h2>Panier</h2>
     <div>
      Monstera: {monsteraPrice}$
     </div>
       Total : {cart} pour { monsteraPrice * cart }€
       <button onClick={()=> updateCart(cart * 0)}>
        Vider le panier
       </button>
    </div>
  ) : (
    <div className='lmj-closed'>
      <button className='lmj-button'
              onClick={() => setIsOpen(true)}>
      Ouvrir le panier
      </button>
    </div>
  )
}

export default Cart
