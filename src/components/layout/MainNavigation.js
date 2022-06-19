import React from "react";
import { Link } from "react-router-dom";
import { useContext } from "react";
import FavoritesContext from "../../store/favorites-context";

function MainNavigation() {
  const favoritesCtx = useContext(FavoritesContext);
  return (
    <nav className="navbar navbar-expand-lg bg-light">
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">
          Meetup-App
        </Link>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link className="nav-link active" to="/">
                All Meetups
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link active" to="/new-meetups">
                New Meetup
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link active" to="/favorites">
                My Favorites
              </Link>
            </li>
            <li>
              <button
                type="button"
                className="btn btn-primary position-relative"
                disabled
              >
                ...
                <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                  {favoritesCtx.totalFavorites}
                  <span className="visually-hidden">unread messages</span>
                </span>
              </button>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
export default MainNavigation;
