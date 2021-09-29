import { Link } from 'react-router-dom';

function Header(props) {
    return (
        <nav>
            <Link id='link' to='/'>Home</Link>
            <Link id='link' to='/styles'>Styles</Link>
        </nav>
    )
}

export default Header