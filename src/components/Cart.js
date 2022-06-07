import '../styles/Cart.css'
import { useState, useEffect } from 'react'

function Cart({ cart, updateCart }) {

  const [isOpen, setIsOpen] = useState(false)
  /* let total = monsteraPrice * cart */

  const total = cart.reduce(
    (acc, plantType) => acc + plantType.amount * plantType.price,
    0
  )
  useEffect(() => {
    alert(`Bienvenue dans la maison Jungle`)
  }, [])
  useEffect(() => {
    alert(`🤑Vous avez ${total}€ à payer🤑`)
  }, [total])

 return isOpen ? (
    <div className='lmj-cart'>
     <button className='lmj-cart-button'
             onClick={() => setIsOpen(false)}>
       fermer
     </button>

     {cart.length > 0 ? (
      <div>
        <h2>Panier</h2>
         <ul>
           {cart.map(({name, price, amount}, index)=> (
             <div key={`${name}-${index}`}>
               {amount} {name} à {price}€
             </div>
           ))}
         </ul>
         <h3>Total : {total}€</h3>
         <button onClick={() => updateCart([])}>
           Annuler le panier
         </button>
      </div>
     ) : (
       <div>
         Votre panier est vide
       </div>
     )}
    </div>
 ) : (
   <div className='lmj-cart-closed'>
     <button className='lmj-cart-button'
            onClick={() => setIsOpen(true)}>
       Ouvrir le panier
     </button>
   </div>
 )
}

export default Cart
