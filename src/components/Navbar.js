const Navbar = (props) => {
    return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <a className="navbar-brand" href="#">YourUni</a>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNavDropdown">
          <ul className="navbar-nav ml-auto">
            <li className="nav-item active">
              <a className="nav-link" href="/">Product <span className="sr-only">(current)</span></a>
            </li>
            <li className="nav-item">
              <a className="nav-link" disabled href="#">Download</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" disabled href="#">Pricing</a>
            </li>
          </ul>
        </div>
    </nav>
    )
}

export default Navbar;