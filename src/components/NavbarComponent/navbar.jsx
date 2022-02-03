
import './navbar.css'
import { Link } from "react-router-dom";

const Navbar=()=>{

    return(<div className="NavbarGrid">
    <Link to="/"><button>Shoes</button></Link>
    <Link to="/pants"><button>Pants</button></Link>
    <Link to="/shirts"><button>Shirts</button></Link>
    </div>)
}

export default Navbar;