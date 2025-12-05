import {Link} from 'react-router-dom'
import Left from '../public/<.png'
import Right from '../public/>.png'
import Line from '../public/Line.png'


export default function App() {

  return (
    <header className="home container">
      <p>WE ARE <img src={Line} alt="" /></p>
      <h1>
        <span>Modern</span> Furniture <br /> Center
      </h1>
      <p>We help you to create organize your room to be more cozy, design by professional interior designer</p>
      <Link className='btn-primary' to='/products'>See Our Product</Link>

      <div className='home-controls'>
        <span><img src={Left} alt="" /></span>
        <span><img src={Right} alt="" /></span>
      </div>
    </header>
  )
}