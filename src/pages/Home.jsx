import Topnav from '../components/Topnav';
import Navbar from '../components/Navbar';
import Contact from '../components/Contact';
import Footer from '../components/Footer';

function Home() {
    return (
        <div className="Home">
            <Topnav />
            <Navbar />
            <Contact />
            <Footer />
        </div>
    );
}

export default Home;
