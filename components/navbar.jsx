import "./navbar.css"

const Navbar = ({ onPageChange }) => {
    return (
      <nav>
        <div id="navbar-nav">
          <form id="search-bar">
            <input type="text" id="search-input" placeholder="Search" />
            <button type="submit">Search</button>
          </form>
          <ul id="ul-nav">
            <li onClick={() => onPageChange('page')}>Home</li>
            <li onClick={() => onPageChange('about')}>About</li>
            <li onClick={() => onPageChange('production')}>Production</li>
          </ul>
        </div>
      </nav>
    );
  };
  
  export default Navbar;