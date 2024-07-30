import React from 'react';
import './styles/home.css';

function HomePage() {
    return (
        <div className="homepage">
            <h1>Welcome Raider Nation!</h1>
            <h2>There's 31 NFL Teams....and then there's the Raiders</h2>
            <img src="/images/hompageimage.jpeg" alt="Raider Nation" />

            <div className="content">

                <p>Hey there, future Hall of Famer! Whether you're a seasoned fan or just stumbled into the black hole, you're in the right place. Here, we bleed silver and black, and our hearts beat to the rhythm of the Raiders.</p>

                <p>Did you know? The Raider Nation isn't just about football. It's about passion, dedication, and a little bit of madness. (Okay, maybe a lot of madness.) But hey, that's what makes us family, right?</p>

                <p>So grab a seat, enjoy the ride, and remember: "Once a Raider, always a Raider!" And if anyone asks, yes, we do have the best fans in the NFL. No bias, of course.</p>

                <p>P.S. If you're not wearing silver and black, we might just have to convert you. Don't worry, it won't hurt... much.</p>
            </div>
        </div>
    );
}

export default HomePage;
