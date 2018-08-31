import React from "react";

class Nav extends React.Component {
  render() {
    return (
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <a className="navbar-brand">Brand Name</a>

        <div
          className="collapse navbar-collapse d-flex justify-content-end"
          id="navbarTogglerDemo03"
        >
          <form className="form-inline">
            <input
              className="form-control mr-sm-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
            />
            <button
              className="btn btn-outline-success my-2 my-sm-0"
              type="submit"
            >
              Search
            </button>
          </form>

          <ul className="navbar-nav">
            <li className="nav-item active">
              <a className="nav-link" href="#">
                Name <span className="sr-only">(current)</span>
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                Log out
              </a>
            </li>
          </ul>
        </div>
      </nav>
    );
  }
}

export default Nav;
