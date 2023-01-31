import './Topnav.css';

function Topnav() {
    return (
        <div className="Topnav">
            <div className="topnav__container">
                <div className="topnav__left">
                    <a className="topnav__link" href="tel:+918726127335">
                        <span className="material-symbols-rounded">call</span>
                        +91 87261 27335
                    </a>
                    <a className="topnav__link" href="mailto:support@vansystems.co.in">
                        <span className="material-symbols-rounded">mail</span>
                        support@vansystems.co.in
                    </a>
                </div>
                <div className="topnav__right">
                    <a className="topnav__link" href="#">
                        <span className="material-symbols-rounded">help</span>
                        Help
                    </a>
                    <a className="topnav__link" href="#">
                        <span className="material-symbols-rounded">person</span>
                        Register
                    </a>
                    <a className="topnav__link" href="#">
                        <span className="material-symbols-rounded">lock</span>
                        Login
                    </a>
                </div>
            </div>
        </div>
    );
}

export default Topnav;
