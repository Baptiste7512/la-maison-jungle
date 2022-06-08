import Banner from './Banner';
import Cart from './Cart';
import ShoppingList from './ShoppingList';
import Footer from './Footer';
import '../App.css';
import '../styles/layout.css'
import { useEffect, useState } from 'react';

function App() {
  const savedCart = localStorage.getItem('cart')
  const [cart, updateCart] = useState(savedCart ? JSON.parse(savedCart) : [])
  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(cart))
  },
  [cart])
  return (
  <div>
    <Banner />
    <div className='lmj-layout'>
      <Cart cart={cart} updateCart={updateCart}/>
      <ShoppingList cart={cart} updateCart={updateCart}/>
    </div>
    <Footer />
  </div>
  )
}



export default App
