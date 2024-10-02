const Navbar = () => {
    return (
        <nav className="navbar">
        <div>
        <h1>Oakberry</h1>
        <p>REAL ESTATE AGENCY</p>
        </div>
        <div className="nav-item">
          <a href="#">HOME</a>
          <a href="#">ABOUT</a>
          <a href="#">PROPERTIES</a>
          <a href="#">AGENTS</a>
          <a href="#">BLOG</a>
          <a href="#">CONTACT</a>
          <p>Submit a property</p>
        </div>
      </nav>
    )
}

export default Navbar;