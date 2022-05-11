import { useState } from 'react'
import '../styles/Footer.css'

function Footer() {
	const [inputValue, setInputValue] = useState('')

  function writeInput(e){
    setInputValue(e.target.value)
  }

  function conditionValue(){
    if(!inputValue.includes('@')){
      alert('Le mail entré est pas conforme')
    }else{
      alert('Nous avons enregistrer votre mail')
    }
  }

	return (
		<footer className='lmj-footer'>
			<div className='lmj-footer-elem'>
      🌿🌱🌵 Pour les passionné de vert 🌿🌱🌵
			</div>
			<div className='lmj-footer-elem'>Laissez-nous votre mail :</div>
      <input
        placeholder='graine@gmail.com'
        value={inputValue}
        onChange={writeInput}
        onBlur={conditionValue}
        />
        <button onChange={(e)=> alert(conditionValue)}>
          Send
        </button>
		</footer>
	)
}

export default Footer
