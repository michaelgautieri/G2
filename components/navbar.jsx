import "./navbar.css"

const Navbar = ({ onPageChange }) => {
    return (
      <nav id="navbar-nav">
        <form>
          <input type="text" placeholder="Search" />
          <button type="submit">Search</button>
        </form>
        <ul id="ul-nav">
          <li onClick={() => onPageChange('page')}>This</li>
          <li onClick={() => onPageChange('that')}>That</li>
          <li onClick={() => onPageChange('something')}>Something</li>
        </ul>
      </nav>
    );
  };
  
  export default Navbar;