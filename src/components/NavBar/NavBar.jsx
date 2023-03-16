import './NavBar.scss'
import { useNavigate} from 'react-router-dom';

function NavBar ({haveButton, total}) {
    const navigate = useNavigate() 
    
    return ( <div className="navbar-container">
        {haveButton ? <button className='navbar-view-cart-button' onClick={() => {
            navigate('/cart')
        }}> View Cart </button> : null}
        <div className='navbar-total'> Total: {total} items </div>
    </div>);
}

export default NavBar ;