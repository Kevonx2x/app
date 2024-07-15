import logo from './logo.svg';
import Navbar from './components/navbar';
import Footer from './components/footer';
import Roster from './components/roster';
import HomePage from './components/home';
import AdminPage from './components/admin';

import { BrowserRouter, Routes, Route } from 'react-router-dom';

import './App.css';
import About from './components/about';
import "@fortawesome/fontawesome-free/css/all.min.css";

import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";



function App() {
    return (
    <BrowserRouter>
        <div className='App'>
            <Navbar /> 

            <Routes>
                <Route path='/' element={<HomePage />} />
                <Route path='/roster' element={<Roster />} />
                <Route path='/about' element={<About />} />  
                <Route path='/admin' element={<AdminPage />} />
            </Routes>
        

            <Footer />
        </div>
    </BrowserRouter>
    );
}

export default App;