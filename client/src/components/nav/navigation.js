import React from "react";
import Axios from "axios";

class Nav extends React.Component {

  constructor(props){
    super(props);
  }

  handleLogout = event =>{
    event.preventDefault();
    Axios.get("/api/logout").then(function(result){
      console.log(result.data)
      if(result.data.logout){
        window.location.href = "/";
      }
    })
  }

  render() {
    return (
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <a className="navbar-brand" href="/dashboard"><img src={window.location.origin + '/img/icon.png'} style={{width: "100px", marginTop: "6px"}}/></a>

        <div className="collapse navbar-collapse" id="navbarTogglerDemo03">
          <ul className="navbar-nav mr-auto">
          <li className="nav-item active">
              <a className="nav-link" href="#">
                Hello, {this.props.username} <span className="sr-only">(current)</span>
              </a>
            </li>

            {/* log out */}
            <li className="nav-item">
              <a className="nav-link" onClick= {this.handleLogout}>
                Log out
              </a>
            </li>

            {/* find friend */}
            <li className="nav-item active">
              <a className="nav-link" href="/friends">
                Friends
              </a>
            </li>

            {/* create event */}
            <li className="nav-item active">
              <a className="nav-link" href="/events">
                Events
              </a>
            </li>

            {/* display all restaurant */}
            <li className="nav-item active">
              <a className="nav-link" href="/allrestaurants">
                Show All Restaurants
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
