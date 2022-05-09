import '../styles/Shoppinglist.css'
import { plantList } from "../datas/plantList";

function ShoppingList(){
  const categories = plantList.reduce((acc, plant) =>
    acc.includes(plant.category) ? acc : acc.concat(plant.category), []
  )

  const soldes = plantList.map((plant) =>
    plant.isSpecialOffer ? plant.name : null
    )

  return (
    <div>
      <h2>Category</h2>
      <ul>
        {categories.map((category) => (
          <li key={category}><a href='#'>{category}</a></li>
        ))}
      </ul>
      <h2>Name</h2>
      <ul>
        {plantList.map((plant) => (
          <li key= {plant.id}>
            <a href=''>{plant.name}
                        {plant.isBestSale && <span>🔥</span>}
                        {plant.isSpecialOffer && <span>🤑</span>}
            </a>
          </li>
        ))}
      </ul>
      <h2>Soldes</h2>
            {soldes.map((solde) =>(
              <li key={solde}>
                <a href='#'><div class="lmj-sales">{solde}</div></a>
              </li>
            ))}
    </div>

  )

};



export default ShoppingList
