import '../styles/Cart.css'

function Cart() {
 const monsteraPrice = 8
 const ivyPrice = 10
 const flowerPrice = 15
 return (<div className='cart-box' style={{
   padding: '32px',
   color: 'white',
   textShadow: '0.5px 0.5px black',
   backgroundColor: '#31b572',
   border: '1px solid black',

 }}>
     <h2>Panier</h2>
     <ul>
     <li>Monstera : {monsteraPrice}€</li>
      <li>Lierre : {ivyPrice}€</li>
      <li>Fleurs : {flowerPrice}€</li>
     </ul>
       Total : {monsteraPrice + ivyPrice + flowerPrice }€
       </div>)
 }

  export default Cart