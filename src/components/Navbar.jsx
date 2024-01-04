import { useState } from 'react';
import './css/navbar.css';
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"></link>

function NavLink({href, text, className}) {
  return (
    <a href={href} className={className}>
      {text}
    </a>
  );
}

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const navLinks = [
    { href: '#about', text: 'About', className: 'about' },
    { href: '#projects', text: 'Projects', className: 'projects' },
    { href: '#skills', text: 'Skills', className: 'skills' },
  ];

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (

    <header>
      <p className="name">Samantha Egge</p>

      <div className={`icon ${menuOpen ? 'active' : ''}`} onClick={toggleMenu}>
        <i className={`fa ${menuOpen ? 'fa-times' : 'fa-bars'}`}></i>
      </div>

      <nav className={`navbar ${menuOpen ? 'active' : ''}`}>
        {navLinks.map((link, index) => (
            <NavLink key={index} {...link} />
          ))}
      </nav>
    </header>
    
    );
  }

export default Navbar;