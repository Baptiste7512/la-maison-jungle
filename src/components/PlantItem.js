import CareScale from './CareScale'
import '../styles/PlantItem.css'
import { useState } from 'react'

function handleClick(plantName) {
    alert(`🌱souhaitez vous ajouté ${plantName} à votre panier?🌱`)
}

function PlantItem({ id, cover, name, water, light, price }) {
	return (
		<li key={id} className='lmj-plant-item' onClick={() => handleClick}>
			<img className='lmj-plant-item-cover' src={cover} alt={`${name} cover`} />
      <span className='lmj-plant-item-price'>{price}€</span>
			{name}
			<div>
				<CareScale careType='water' scaleValue={water} />
				<CareScale careType='light' scaleValue={light} />
			</div>
		</li>
	)
}


export default PlantItem
