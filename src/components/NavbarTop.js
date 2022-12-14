import React from "react";
import { Link } from "react-router-dom";

export default function NavbarTop() {
  return (
    <div>
      <nav className="navbar navbar-expand-lg bg-info">
        <div className="container">
          <Link to="/" className="navbar-brand">
            Bookstore
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link
                  to="/Comics"
                  className="nav-link active"
                  aria-current="page"
                >
                  Comics
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  to="/Novels"
                  className="nav-link active"
                  aria-current="page"
                >
                  Novels
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  to="/Genre"
                  className="nav-link active"
                  aria-current="page"
                >
                  Genre
                </Link>
              </li>
            </ul>
            <form className="d-flex" role="search">
              <input
                className="form-control me-2"
                type="search"
                placeholder="Search"
                aria-label="Search"
              />
              <button className="btn btn-outline-success" type="submit">
                Search
              </button>
            </form>
          </div>
        </div>
      </nav>
      <br />
    </div>
  );
}
