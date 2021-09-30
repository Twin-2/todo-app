import { Link } from 'react-router-dom';
import Login from '../auth/login';

function Header(props) {
    return (
        <nav>
            <Link id='link' to='/'>Home</Link>
            <Link id='link' to='/styles'>Styles</Link>
            <div className='login'>
                <Login />
            </div>
        </nav>
    )
}

export default Header