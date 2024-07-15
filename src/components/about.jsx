import { useState } from 'react';
import './styles/about.css';


function About () {
    const [isInfoVisible, setIsInfoVisible] = useState(false);

    function showInfo() {
        setIsInfoVisible(true);
    }

    function getInfo() {
        if(isInfoVisible) {
            return (
            <div>
                <p>Email: tjemail.com</p>
                <p>Phone: 555-555-5555</p>
            </div>
            );

    }else {
        return <p> Click the button to view my info </p>

    }
}



    return(
        <div className='about page'>
            <h2>Turon Boyd</h2>

            {getInfo()}

            {isInfoVisible ? "" : ( 
                <button onClick={showInfo} className='btn btn-sm btn-success'>View Info</button>
            )}

            


        </div>
    );

}

export default About;