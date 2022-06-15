import React from 'react';
import '../CSS/Header.css';

class Header extends React.Component {
  render() {
    return (
      <header className="flex flex-auto place-content-between bg-gradient-to-r from-yellow-500 via-amber-300 to-yellow-500">
        <nav>
          <ul className="navbar-links">
            <li>
              <a href="#">About</a>
            </li>
            <li>
              <a href="#">Why Me</a>
            </li>
            <li>
              <a href="#">Projects</a>
            </li>
            <li>
              <a href="#">Contacts</a>
            </li>
          </ul>
        </nav>
        <div>
          <p>"Logo"</p>
        </div>
        <nav className="navbar-opts">
          <button>"Dark Theme"</button>
          <button>"Language"</button>
        </nav>
      </header>
    );
  }
}

export default Header;
