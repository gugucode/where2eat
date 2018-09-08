import React from "react";

class Nav extends React.Component {
  render() {
    return (
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <a className="navbar-brand">Brand Name</a>

        <div className="collapse navbar-collapse" id="navbarTogglerDemo03">
          <ul className="navbar-nav mr-auto">
            {/* find friend */}
            <li className="nav-item active">
              <a
                className="nav-link"
                data-toggle="modal"
                href="#findFriendComp"
                data-whatever="@mdo"
              >
                Find friends
              </a>
            </li>

            {/* create event */}
            <li className="nav-item active">
              <a
                className="nav-link"
                data-toggle="modal"
                href="#createEvent"
                data-whatever="@mdo"
              >
                Create Event
              </a>
            </li>

            <li className="nav-item active">
              <a className="nav-link" href="#">
                Name <span className="sr-only">(current)</span>
              </a>
            </li>

            {/* log out */}
            <li className="nav-item">
              <a className="nav-link" href="#">
                Log out
              </a>
            </li>
          </ul>

          {/* search form */}
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
        </div>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarTogglerDemo03"
          aria-controls="navbarTogglerDemo03"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" />
        </button>
      </nav>
    );
  }
}

export default Nav;
