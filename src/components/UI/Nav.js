import React, { useState } from 'react';

import './Nav.css'

function Nav() {
    const [isNavOpen, setIsNavOpen] = useState(false);

    return (
        <nav role='navigation' id='app-navigation'>
            <div onClick={() => { setIsNavOpen(!isNavOpen) }} className={`app-navigation__burger ${isNavOpen ? 'app-navigation__burger--open' : ''}`}>
                <span></span>
                <span></span>
                <span></span>
            </div>
            {isNavOpen && (
                <div className='app-navigation__menu-container'>
                    <ul className='app-navigation__menu'>
                        <li>
                            <a href='/filter-app'>List Stuff</a>
                        </li>
                        <li>
                            <a href='/something-else'>Something Else</a>
                        </li>
                    </ul>
                </div>
            )}
        </nav>
    )
}

export default Nav;
