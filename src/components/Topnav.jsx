import './Topnav.css';

function Topnav() {
    return (
        <div className="Topnav">
            <div className="topnav__container">
                <div className="topnav__left">
                    <a className="topnav__link" href="tel:+918726127335">+91 87261 27335</a>
                    <a className="topnav__link" href="mailto:support@vansystems.co.in">support@vansystems.co.in</a>
                </div>
                <div className="topnav__right">
                    <a className="topnav__link" href="#">Help</a>
                    <a className="topnav__link" href="#">Register</a>
                    <a className="topnav__link" href="#">Login</a>
                </div>
            </div>
        </div>
    );
}

export default Topnav;
