import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { Paper } from '@material-ui/core';
import './styles.css';

const MultiSlidePage = () => {
    const paperStyle = {
        padding: 20,
        width: 300,
        margin: '0 auto',
        height: 'auto',
    };

    const slideImageStyle = {
        width: '100%', 
        height: '100%', 
    };

    return (
        <Paper className="paper" style={paperStyle}>
            <div className="multi-slide-container">
                <Carousel
                    showThumbs={false}
                    showStatus={false}
                    infiniteLoop={true}
                    autoPlay={true}
                    interval={5000}
                >
                    <div className="slide">
                    <img src={require("./gif.gif")} alt="Slide 1" style={slideImageStyle} />.
                    <h3><span className="highlight">#</span>Fastest Food delivery</h3>
                    <h5>Want a delicious meal,<p> but no time we will deliver it hot and yummy.</p></h5>
                    </div>
                    <div className="slide">
                    <img src={require("./gif1.gif")} alt="Slide 1" style={slideImageStyle}/>.
                    <h3><span className="highlight">#</span>Good Food for Good Moments</h3>
                    <h5>Taste that best, its on time.</h5>
                    </div>
                    <div className="slide">
                    <img src={require("./gif1.gif")} alt="Slide 1" style={slideImageStyle}/>.
                    <h3><span className="highlight">#</span>Good food smile</h3>
                    <h5>Want a delicious meal,<p> but no time we will deliver it hot and yummy.</p></h5>
                    </div>
                </Carousel>
            </div>
        </Paper>
    );
};

export default MultiSlidePage;
