import '../styles/Categories.css'

function Categories({setActiveCategories, categories, activeCategories}) {
  return (
    <div className='lmj-category'>
      <select value={activeCategories}
             onChange={(e)=> setActiveCategories(e.target.value)}
             className='lmj-cat-select'>
      <option value=''>selectionnez</option>
      {categories.map((cat)=> (
        <option key={cat}
                value={cat}>
                  {cat}
                </option>
      ))}
      </select>
      <button onClick={()=> setActiveCategories('')}>
        Annuler
      </button>
    </div>
  )
}


export default Categories
