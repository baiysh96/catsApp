import React from 'react';
import "./Header.css"
import {NavLink} from "react-router-dom";

const Header = () => {
    return (
        <>
            <header className="header">
               <div className="container">
                   <nav className="nav">
                       <NavLink to="/cats" >Все котики</NavLink>
                       <NavLink to="/favorites" >Любимые котики</NavLink>
                   </nav>
               </div>
            </header>
        </>
    );
};

export default Header;