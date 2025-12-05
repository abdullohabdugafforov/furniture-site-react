import { Link } from 'react-router-dom'

export default function Navbar() {

    return (
        <>
            <ul>
                <li>
                    <Link to='/'>Logo new</Link>
                </li>
                <li>
                    <ul>
                        <li><Link to='/'>Home</Link></li>
                        <li><Link to='/aboutus'>About Us</Link></li>
                        <li><Link to='/products'>Products</Link></li>
                        <li><Link to='/contacts'>Contacts</Link></li>
                        <li><Link to='/contacts'>Contacts</Link></li>
                    </ul>
                </li>
            </ul>
        </>
    )
}