import '../styles/Shoppinglist.css'
const plantList = [
  'ficus lyrata',
  'pothos argenté',
  'yucca',
  'palmier'
]
const categoryPlant = [
  'herbacées',
  'arbustes',
  'les lianes',
  'Les plantes à bulbe',
  'monstera'
]

function ShoppingList(){
  return (
    <div className='shopping'>
      <h3>Shopping List</h3>
      <ul>
        {plantList.map((plant, index) => (
          <li key={`${plant}-${index}`}>{plant}</li>
        ))}
      </ul>
      <ul>
        {categoryPlant.forEach((category) => (
          <li>{category}</li>
        ))}
      </ul>
    </div>
  )
}

export default ShoppingList
