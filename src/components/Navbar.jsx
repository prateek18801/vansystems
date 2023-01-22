import './Navbar.css';

function Navbar() {
    return (
        <nav className="Navbar">
            <div className="navbar__container">
                <div className="navbar__left">
                    VAN SYSTEMS
                </div>
                <div className="navbar__right">
                    <ul className="navbar__list">
                        <li className="navbar__list-item"><a href="#" className="navbar__list-link">Home</a></li>
                        <li className="navbar__list-item"><a href="#" className="navbar__list-link">About</a></li>
                        <li className="navbar__list-item"><a href="#" className="navbar__list-link">Services</a></li>
                        <li className="navbar__list-item"><a href="#" className="navbar__list-link">Support</a></li>
                        <li className="navbar__list-item"><a href="#" className="navbar__list-link">Contact</a></li>
                    </ul>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;
