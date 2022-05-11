import Sun from '../assets/sun.svg'
import Water from '../assets/water.svg'

function CareScale({ scaleValue, careType }) {
	const range = [1, 2, 3]
  const quantity = {
    1: 'un peut',
    2: 'moyennement',
    3: 'BEAUCOUP'
  }
  const scaleType =
		careType === 'light' ? (
			<img src={Sun} alt='sun-icon' />
		) : (
			<img src={Water} alt='water-icon' />
		)

	return (
    <div onClick={() => 
      alert(`Cette plante a besoin ${quantity[scaleValue]} ${careType === 'light' ? 'de soleil' : "d'eau"}`)
    }>

			{range.map((rangeElem) =>
				scaleValue >= rangeElem ? (
					<span key={rangeElem.toString()}>{scaleType}</span>
				) : null
			)}
		</div>
	)
}

export default CareScale
