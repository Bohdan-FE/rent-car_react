import { Link } from "react-router-dom"

export const Header = () => {
    return (
        <header>
            <ul className="flex gap-2 p-4 ">
                <li><Link to='/'>Home</Link></li>
                <li><Link to='/catalog'>Catalog</Link></li>
                <li><Link to='/favorites'>Favorites</Link></li>
            </ul>
        </header>
    )
}