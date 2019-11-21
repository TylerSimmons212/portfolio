import React from 'react';

const NavBar = () => {
    return (
        <div className='navbar'>
            <ul>
                <a href='/'><li>Home</li></a>
                <a href='#about'><li>About</li></a>
                <a href='#skills'><li>Skills</li></a>
                <a href='#projects'> <li>Projects</li></a>
                <a href='#contact' className='hide'><li>Contact</li></a>
            </ul>
        </div>
    )
}
export default NavBar;