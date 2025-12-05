import { Link } from 'react-router-dom'
import Bag from '../public/bag.png'
import Logo from '../public/FURNITURE.png'

export default function Navbar() {

    return (
        <nav className='container'>
            <ul>
                <li>
                    <Link to='/'><img src={Logo} alt="" /></Link>
                </li>
                <li>
                    <ul>
                        <li><Link to='/'>Home</Link></li>
                        <li><Link to='/aboutus'>About Us</Link></li>
                        <li><Link to='/products'>Products</Link></li>
                        <li><Link to='/products'><img src={Bag} alt="" /></Link></li>
                        <li><Link className='btn-nav' to='/contacts'>Contact Us</Link></li>
                    </ul>
                </li>
            </ul>
        </nav>
    )
}