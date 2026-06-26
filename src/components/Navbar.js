import { useState, useEffect } from "react";

function Navbar() {
  const [sticky, setSticky] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setSticky(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className={sticky ? "navbar sticky" : "navbar"}>
      <div className="logo">
        <h2>AI Platform</h2>
      </div>

      <ul className={menuOpen ? "nav-links active" : "nav-links"}>
        <li>
          <a href="#home" onClick={() => setMenuOpen(false)}>
            Home
          </a>
        </li>

        <li>
          <a href="#features" onClick={() => setMenuOpen(false)}>
            Features
          </a>
        </li>

        <li>
          <a href="#pricing" onClick={() => setMenuOpen(false)}>
            Pricing
          </a>
        </li>

        <li>
          <a href="#bento" onClick={() => setMenuOpen(false)}>
            Solutions
          </a>
        </li>

        <li>
          <a href="#testimonials" onClick={() => setMenuOpen(false)}>
            Reviews
          </a>
        </li>

        <li>
          <a href="#contact" onClick={() => setMenuOpen(false)}>
            Contact
          </a>
        </li>

        <li>
          <button className="nav-btn">Get Started</button>
        </li>
      </ul>

      <div
        className={menuOpen ? "hamburger active" : "hamburger"}
        onClick={() => setMenuOpen(!menuOpen)}
      >
        <span></span>
        <span></span>
        <span></span>
      </div>
    </nav>
  );
}

export default Navbar;