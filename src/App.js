import logo from './logo.svg';
import Navbar from './components/navbar';
import Footer from './components/footer';
import Catalog from './components/catalog';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";

import './App.css';



function App() {
    return (
        <div className='App'>
            <Navbar /> 
            <Catalog />
            <Footer />
        </div>
    );
}

export default App;