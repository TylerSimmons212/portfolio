import React from 'react';
import video from '../../images/trueBeauty.mp4'
const TrueBeauty = (props) => {
    return (
        <div className='outer-projects-modal'>
            <div className='projects-modal'>
                <img src="https://img.icons8.com/ios/50/000000/close-window.png" className='close' onClick={() => props.viewproject('')}/>
                <h1>True Beauty Digital</h1>
                <div className='project-carousel'>
                    <video src={video} controls autoPlay></video>
                    <div className='modal-text' id='tb-text'>
                        <p>This is a Project buildt on Wordpress.
                            This app is to showcase the clients company in an elegant way.
                            Using Wordpress allows the client to use third-party plugins to give the client extra functionality to site.
                            </p>
                        <p>Built With:</p>
                        <p><strong>Wordpress | Javascript | HTML5 | CSS3 | PHP</strong></p>
                    </div>
                </div>
                <a href='https://alphaonefuel.com' target="_blank">View Project</a>
            </div>
        </div>
    )
};

export default TrueBeauty;