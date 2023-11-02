import React from 'react';
import { links } from './data';

function Sidebar() {
  return (
    <>
      <h4>Sidebar</h4>
      <div className='links-container show-container'>
        <ul className='links'>
          <div className='links-container show-container'>
            <ul className='links'>
              {links.map((link) => {
                const { id, url, text } = link;
                return (
                  <li key={id}>
                    <a href={url}>{text}</a>
                  </li>
                );
              })}
            </ul>
          </div>
        </ul>
      </div>
    </>
  );
}

export default Sidebar;
