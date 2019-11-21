import React from 'react';
import video from '../../images/conffianz.mp4'
const Conffianz = (props) => {
    return (
        <div className='outer-projects-modal'>
            <div className='projects-modal'>
                <img src="https://img.icons8.com/ios/50/000000/close-window.png" className='close' onClick={() => props.viewproject('')} />
                <h1>Conffianz</h1>
                <div className='project-carousel'>
                    <video src={video} controls autoPlay></video>
                    <div className='modal-text'>
                        <p>This is a Project buildt on Shopify.
                                This project is a custom landing page to help the client increase conversion rate to improve his buisness.
                                Using Shopify allows the client to easily customize the site in the future while using Shopify's unique selling platform.
                            </p>
                        <p>Built With:</p>
                        <p><strong>Shopify | Javascript| HTML5 | CSS3 | Liquid</strong></p>
                    </div>
                </div>
                <a href='https://conffianz.com/pages/welcome-conffianz' target="_blank">View Project</a>
            </div>
        </div>
    )
};

export default Conffianz;