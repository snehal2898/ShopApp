import { Link, Outlet } from "react-router-dom";

const FurnitureSection = ()=>{

    return (
        <div>
            <h2 className="text-center">Furniture Mall</h2>
            <nav className="navbar navbar-expand-lg bg-warning">
                <ul className="navbar-nav">
                    <li className="nav-item">
                        <Link className="nav-link active" to="sofa">Sofa Sets</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="wardrobe">Wardrobe</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="bed">Bed</Link>
                    </li>
                    
                </ul>
            </nav>
            <Outlet/>
            {/*outlet is a placeholder for link components */}

        </div>

    ) 

}

export default FurnitureSection;