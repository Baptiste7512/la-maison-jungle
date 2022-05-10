import { useState } from "react";
import '../styles/Footer.css'

function Footer() {
  const [inputValue, setInputValue] = useState('')

  return (
    <footer className="lmj-footer">
      <div className="lmj-footer-item">
        🌱 Pour les passionné.e.s de plantes en tout genres 🌱
      </div>
      <div className="lmj-footer-item">Laissez nous votre mail:</div>
        <textarea
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          />
        <button onClick={() => alert(inputValue)}>Alerte moi💥</button>
    </footer>
  )
}
export default Footer
