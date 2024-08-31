import { Link, Outlet } from "react-router-dom";

const ClothingSection = ()=>{

    return (
        <div>
            <h2 className="text-center" style={{color:'goldenrod'}}>Clothing Department</h2>
            <nav className="navbar navbar-expand-lg bg-info">
                <ul className="navbar-nav">
                    <li className="nav-item">
                        <Link className="nav-link active" to="men">Men</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="women">Women</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="kids">Kids</Link>
                    </li>
                </ul>
            </nav>
            <Outlet/>
        </div>

    ) 

}

export default ClothingSection;