import {Outlet, useNavigate} from 'react-router';
import './NavBar.css';


function NavBar() {
    const navigate = useNavigate();

    const Home = () => {
        navigate('/');
    };
    const ProductPage = () => {
        navigate('/Product');
    };
    const CartPage = () => {
        navigate('/Cart');
    };

    return (
        <>
            <div id="nav">
                <button className="navButton" onClick={Home}>Home</button>
                <button className="navButton" onClick={ProductPage}>Product</button>
                <button className="navButton" onClick={CartPage}>Cart</button>

            </div>
            <div id={"screen"}>
             <Outlet/>
            </div>

        </>

    );
}

export default NavBar;
