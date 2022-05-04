import '../styles/Banner.css'
import logo from '../assets/logo.png'

const title = 'La maison jungle'
function Banner() {
  return <div className='lmj-banner' style= {{
    color: '#83B692',
    textAlign: 'center',
    padding: 32,
    borderBottom: 'solid 1.5px black',
    backgroundColor: 'whitesmoke',
  }}
  >
    <img src={logo} alt='logo' className='lmj-logo'/>
    <h1>{title.toUpperCase()}</h1>
    </div>
}

export default Banner
