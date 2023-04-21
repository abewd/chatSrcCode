import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header style={{display: 'flex', justifyContent: 'flex-end', alignItems: 'center', height: '80px'}}>
      <Link style={{marginRight: 'auto'}} to='/signin'>
        <button style={{marginRight: '1rem'}}>Sign In</button>
      </Link>
      <Link to='/register'>
        <button>Create Account</button>
      </Link>
    </header>
  );
}

export default Header;
