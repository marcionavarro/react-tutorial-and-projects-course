import React from 'react';
import logo from './logo.svg';
import { FaTimes } from 'react-icons/fa';
import { social, links } from './data';

const Sidebar = () => {
  return (
    <aside className={`sidebar`}>
      <div className='sidebar-header'>
        <img src={logo} className='logo' alt='coding addict' />
        <button className='close-btn'>
          <FaTimes />
        </button>
      </div>
      <ul className='links'>
        {links &&
          links.map((link) => {
            const { id, url, text, icon } = link;
            return (
              <li key={id}>
                <a href={url}>
                  {icon}
                  {text}
                </a>
              </li>
            );
          })}
      </ul>
      <ul className='social-icons'>
        {social &&
          social.map((socialIcons) => {
            const { id, url, icon } = socialIcons;
            return (
              <li key={id}>
                <a href={url}>{icon}</a>
              </li>
            );
          })}
      </ul>
    </aside>
  );
};

export default Sidebar;
