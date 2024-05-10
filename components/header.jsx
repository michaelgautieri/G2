import Navbar from './navbar';
import Navbar2 from './navbar2';
import "./header.css";

const Header = ({ onPageChange }) => {
   return (
      <header>
         <div>
            <Navbar2 onPageChange={onPageChange} />
            <br></br>
            <Navbar onPageChange={onPageChange} />
         </div>
      </header>
       );
    }


export default Header;