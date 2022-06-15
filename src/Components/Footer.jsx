import React from 'react';
import '../CSS/Footer.css';

class Footer extends React.Component {
  render() {
    return (
      <footer className="flex flex-row-reverse justify-items-stretch bg-gradient-to-r from-yellow-500 via-amber-300 to-yellow-500">
        <div>
          <p>Developed with React and Tailwind CSS</p>
        </div>
      </footer>
    );
  }
}

export default Footer;
