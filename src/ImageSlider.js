import "react-slideshow-image/dist/styles.css";
import { Fade } from "react-slideshow-image";
import './components/styles/imageslider.css';

const slideImages = [
    {
        src: '/images/charles.jpeg',
    },
    {
        src: '/images/homeraider.jpeg',
    },
    {
        src: '/images/slider1.jpeg',
    },
];

function ImageSlider() {
    return (
        <div className="slideshow-container">
            <Fade>
                {slideImages.map((image, index) => (
                    <div className="each-slide" key={index}>
                        <div style={{ backgroundImage: `url(${image.src})` }} className="slide-content">

                        </div>
                    </div>
                ))}
            </Fade>
        </div>
    );
}

export default ImageSlider;
