import { NavLink } from "react-router-dom";
import './header.css';
import React from 'react';

function Header () {
    return (
        <>
          <img id="portfolio-title" src="portfolio-title.gif" alt="Asia Anh Le" />
          <p className='title' id="subtitle">Software Engineer & Certified Nerd</p>
          <div className='navbar'>
            <NavLink to="/" className={
              ({ isActive }) => isActive ? "nav-item active" : "nav-item"
            }>About</NavLink>
            <NavLink to="/skills" className={
              ({ isActive }) => isActive ? "nav-item active" : "nav-item"
            }>Skills</NavLink>
            <NavLink to="/projects" className={
              ({ isActive }) => isActive ? "nav-item active" : "nav-item"
            }>Projects</NavLink>
            <NavLink to="/games" className={
              ({ isActive }) => isActive ? "nav-item active" : "nav-item"
            }>Games</NavLink>
          </div>
        </>
      );
}

export default Header;