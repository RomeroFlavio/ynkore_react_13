import logo from '../images/logo/ynkore_logo.png';
import CartWidget from './CartWidget';
import {Link} from 'react-router-dom';

function NavBar() {
    return (
        
    <div className="container-fluid">
        <nav className="navbar-expand-lg navbar-light bg-light">
            <div className="container-fluid d-flex justify-content-between color">
                <div>
                    <Link to='/'>
                            <img src={logo} className="App-logo logo" alt="logo" />
                    </Link>
                </div>
                
                <div className="collapse navbar-collapse d-flex justify-content-center" id="navbarNav">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                        <Link class="nav-link" to='/'>
                            Inicio
                        </Link>
                        </li>
                        <li className="nav-item">
                        <Link class="nav-link" to={`/category/Mujeres`}>
                            Mujeres
                        </Link>
                        </li>
                        <li className="nav-item">
                        <Link class="nav-link" to={`/category/Hombres`}>
                            Hombres
                        </Link>
                        </li>
                    </ul>
                </div>

                <div>
                    <Link to='/cart'>
                        <CartWidget/>
                    </Link>
                </div>
            </div>
        </nav>
    </div>
    );
  }
export default NavBar;