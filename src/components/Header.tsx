import { Link, Routes, Route } from "react-router-dom";

// Page components defined inside Header.tsx
function Home() {
  return (
    <div>
      <h1>Home Page</h1>
      <p>Welcome to our website!</p>
    </div>
  );
}

function About() {
  return (
    <div>
      <h1>About Us</h1>
      <p>Learn more about our company.</p>
    </div>
  );
}

function Service() {
  return (
    <div>
      <h1>Our Services</h1>
      <p>Discover what we offer.</p>
    </div>
  );
}

function Contact() {
  return (
    <div>
      <h1>Contact Us</h1>
      <p>Get in touch with our team.</p>
    </div>
  );
}

// Main Header component that includes everything
function Header() {
  return (
    <>
      <header>
        <h1>Welcome to My Website</h1>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/service">Service</Link>
            </li>
            <li>
              <Link to="/contact">Contact</Link>
            </li>
          </ul>
        </nav>
      </header>

      {/* Main content area that changes based on route */}
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/service" element={<Service />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </main>
    </>
  );
}

export default Header;
