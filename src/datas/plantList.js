import monstera from '../assets/monstera.jpg'
import ficus from '../assets/ficus.jpg'
import pothos from '../assets/pothos.jpg'
import yuka from '../assets/yuka.jpg'
import olivier from '../assets/olivier.jpg'
import geranium from "../assets/geranium.jpg"
import basilique from '../assets/basilique.jpg'
import aloe from '../assets/aloe.jpg'
import succulente from '../assets/succulente.jpg'
import avocat from '../assets/avocat.jpeg'

export const plantList = [
  {
		name: 'monstera',
		category: 'classique',
		id: '1ed',
		isBestSale: true,
		light: 2,
		water: 3,
		cover: monstera,
    price: 15
	},
	{
		name: 'ficus lyrata',
		category: 'classique',
		id: '2ab',
		light: 3,
		water: 1,
		cover: ficus,
    price: 8
	},
	{
		name: 'pothos argenté',
		category: 'classique',
		id: '3sd',
		light: 1,
		water: 2,
		cover: pothos,
    price: 24
	},
	{
		name: 'yucca',
		category: 'classique',
		id: '4kk',
		light: 3,
		water: 1,
		cover: yuka,
    price: 29
	},
	{
		name: 'olivier',
		category: 'extérieur',
		id: '5pl',
		light: 3,
		water: 1,
		cover: olivier,
    price: 129
	},
	{
		name: 'géranium',
		category: 'extérieur',
		id: '6uo',
		light: 2,
		water: 2,
		cover: geranium,
    price: 6
	},
	{
		name: 'basilic',
		category: 'extérieur',
		id: '7ie',
		isBestSale: true,
		light: 2,
		water: 3,
		cover: basilique,
    price: 1
	},
	{
		name: 'aloe',
		category: 'plante grasse',
		id: '8fp',
		light: 2,
		water: 1,
		cover: aloe,
    price: 14
	},
	{
		name: 'succulente',
		category: 'plante grasse',
		id: '9vn',
		light: 2,
		water: 1,
		cover: succulente,
    price: 15
	},
  {
    name: 'avocat',
    category: 'extérieur',
    id: '10eb',
    light: 3,
    water: 2,
    cover: avocat,
    price: 50
  }
]
