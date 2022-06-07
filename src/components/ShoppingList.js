import { useState } from "react";
import { plantList } from '../datas/plantList'
import Categories from "./Categories";
import PlantItem from './PlantItem'
import '../styles/Shoppinglist.css'

function ShoppingList({cart, updateCart}) {

  const [activeCategories, setActiveCategories] = useState('')
  const categories = plantList.reduce(
		(acc, plant) =>
			acc.includes(plant.category) ? acc : acc.concat(plant.category),
		[]
	)

  function addToCart(name, price) {
    const currentPlantSave = cart.find((plant)=> plant.name === name)

    if (currentPlantSave) {
      const cartFilterCurrentPlant = cart.filter((plant)=> plant.name !== name)
      updateCart ([
        ...cartFilterCurrentPlant,
        {name, price, amount: currentPlantSave.amount + 1}
      ])
    } else {
      updateCart([
        ...cart,
        {name, price, amount: 1}
      ])
    }
  }

	return (
    <div className='lmj-shopping-list'>
      <Categories
      categories={categories}
      activeCategories={activeCategories}
      setActiveCategories={setActiveCategories}
      />
      <ul className='lmj-plant-list'>
          {plantList.map(({id, cover, name, water, light, price, category}) =>
            !activeCategories || activeCategories === category ? (
            <div key= {id}>
              <PlantItem
                cover={cover}
                name={name}
                water={water}
                light={light}
                price={price}/>
                <button onClick={()=> addToCart(name,price)}>
                  Ajouter
                </button>
            </div> ) : null
          )}
      </ul>
    </div>
	)
}

export default ShoppingList
