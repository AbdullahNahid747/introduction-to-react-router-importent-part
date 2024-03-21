import { Link, NavLink } from 'react-router-dom';
import './Header.css'
import NavBar from '../NavBar/NavBar';
const Header = () => {
    return (
        <div>
            <NavBar></NavBar>
            <h2 className='my-5 text-7xl font-bold'>My Website</h2>
            <nav className='my-5'>
                <Link className=' font-bold' to="/">Home</Link>

                <NavLink className=' font-bold' to={"/users"}>Users</NavLink>

                <NavLink className=' font-bold' to="/posts">Posts</NavLink>

                <Link className=' font-bold' to="/about">About</Link>

                <Link className=' font-bold' to="/contact">Contact Us</Link>
            </nav>
        </div>
    );
};

export default Header;