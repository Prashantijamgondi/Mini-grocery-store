import React from 'react';

const Header = () => {
  return (
    <header className="header">
      <h1>Mini Grocery Store</h1>
      <nav>
        <ul>
          <li><a href="/" style={{textDecoration: 'none', color: '#ffffff'}}>Home</a></li>
          <li><a href="https://drive.google.com/file/d/1TWFC7R8zwLUF3SP-hqL773484XXh5KaY/view" style={{textDecoration: 'none', color: '#ffffff'}}>About</a></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
