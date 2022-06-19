import React from "react";
import { useContext } from "react";
import classes from "./MeetupItem.module.css";
import FavoritesContext from "../../store/favorites-context";
function MeetupItem(props) {
  const favoritesCtx = useContext(FavoritesContext);
  const itemIsFavorite = favoritesCtx.itemIsFavorite(props.id);

  function toggleFavoriteStatusHandler() {
    if (itemIsFavorite) {
      favoritesCtx.removeFavorite(props.id);
    } else
      favoritesCtx.addFavorite({
        id: props.id,
        title: props.title,
        image: props.image,
        adress: props.adress,
        description: props.description,
      });
  }
  return (
    <div className="container ">
      <div className="row align-items-center vh-100">
        <div className="col-6 mx-auto">
          <div className="card shadow border">
            <div className="card center">
              <img
                src={props.image}
                className="card-img-top"
                alt={props.title}
              />
              <div className="card-body d-flex flex-column align-items-center">
                <h5 className="card-title">{props.title}</h5>
                <h5 className="card-title">{props.adress}</h5>
                <p className="card-text">{props.description}</p>
                <div className={classes.actions}>
                  <button onClick={toggleFavoriteStatusHandler}>
                    {itemIsFavorite ? "Remove From Favorites" : "To favourites"}
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default MeetupItem;
