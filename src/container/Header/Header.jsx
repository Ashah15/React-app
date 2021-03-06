/* eslint-disable react/react-in-jsx-scope */
import { Link } from 'react-router-dom';
import './Header.style.css';

const Header = () => (
  <header>
    <Link className="logo" to="/">Math Magicians</Link>
    <nav>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/calculator">Calculator</Link></li>
        <li><Link to="/quote">Quote</Link></li>
      </ul>
    </nav>
  </header>
);

export default Header;
