import './Footer.css';

function Footer() {
    return (
        <div className="Footer">
            <div className="footer__container">
                <div className="copyright">
                    Copyright &copy; {new Date().getFullYear()} - VAN Systems - All Rights Reserved
                </div>
            </div>
        </div>
    );
}

export default Footer;
