import {Outlet,Link} from 'react-router-dom'

const ShopNavBar = ()=>{

    return (
        <div>
            <nav className='navbar navbar-expand-lg' style={{backgroundColor:'purple'}} data-bs-theme="dark">
                <ul className='navbar-nav'>
                    <li className='nav-item'>
                        <Link className='nav-link active' to="/">Home</Link>
                    </li>
                    <li className='nav-item'>
                        <Link className='nav-link' to="/electronics">Electronics</Link>
                    </li>
                    <li className='nav-item'>
                        <Link className='nav-link' to="/clothing">Clothing</Link>
                    </li>
                    <li className='nav-item'>
                        <Link className='nav-link' to="/furniture">Furniture</Link>
                    </li>
                    <li className='nav-item'>
                        <Link className='nav-link' to="/state-share">State Sharing</Link>
                    </li>
                    <li className='nav-item'>
                        <Link className='nav-link' to="/context">Context</Link>
                    </li>
                    <li className='nav-item'>
                        <Link className='nav-link' to="/ref">Ref Demo</Link>
                    </li>
                    <li className='nav-item'>
                        <Link className='nav-link' to="/reducer">Reducer</Link> 
                    </li>
                    <li className='nav-item'>
                        <Link className='nav-link' to='/effect'>Effect</Link>
                    </li>
                    <li className='nav-item'>
                        <Link className='nav-link' to='/cart'>Cart</Link>
                    </li>
                </ul>
            </nav>
            <Outlet/>
        </div>
    )
}

export default ShopNavBar;