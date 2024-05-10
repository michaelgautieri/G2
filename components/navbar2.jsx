import "./navbar2.css"

const Navbar2 = ({ onPageChange }) => {
    return (
      <nav>
        <ul id="ul-nav2">
          <li onClick={() => onPageChange('page')}>Logo</li>
          <li onClick={() => onPageChange('something')}>Phone number</li>
        </ul>
      </nav>
    );
  };
  
  export default Navbar2;