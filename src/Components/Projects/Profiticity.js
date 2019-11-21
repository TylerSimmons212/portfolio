import React from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import profit1 from '../../images/profit1.png'
import profit2 from '../../images/profit2.png'
const Profiticity = (props) => {
    return (
        <div className='outer-projects-modal'>
            <div className='projects-modal'>
                <img src="https://img.icons8.com/ios/50/000000/close-window.png" className='close' onClick={() => props.viewproject('')}/>
                <h1>Profiticity</h1>
                <div className='project-carousel'>
                    <Carousel showStatus={false} autoPlay={true} showThumbs={false} infiniteLoop={true} className='in-caro'>
                        <div>
                            <img src={profit1} />
                        </div>
                        <div>
                            <img src={profit2} />
                        </div>
                    </Carousel>
                    <div className='modal-text'>
                        <p>This is a Project still in development.
                            Designed with MaterialUI to enhance user experience.
                            This app is to assist marketers in tracking the performance of their ad's to help increase productivity.</p>
                        <p>Built With:</p>
                        <p><strong>React | Node.js | Javascript | SQL | API's | HTML5 | CSS3</strong></p>
                    </div>
                </div>
            </div>
        </div>
    )
};

export default Profiticity;