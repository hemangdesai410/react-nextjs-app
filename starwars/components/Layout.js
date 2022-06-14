import Footer from "./Footer";
import Navbar from "./NavBar"

const Layout = ({ children }) => {
    return (
        <div className='content'>
            <Navbar className='navbar'/>
            { children }  
            <Footer />  
        </div>
    );
}

export default Layout