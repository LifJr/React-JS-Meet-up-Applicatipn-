import { useContext } from "react";
import React from "react";
import FavoritesContext from "../store/favorites-context";
import MeetupList from "../components/meetups/MeetupList";

function Favorites() {
  const favoritesCtx = useContext(FavoritesContext);
  let message;

  if (favoritesCtx.totalFavorites === 0) {
    message = <p>You got no favorites yet. Start adding some?</p>;
  } else {
    message = <MeetupList meetups={favoritesCtx.favorites} />;
  }

  return (
    <div className="container">
      <section>
        <h3>My Favorites</h3>
        {message}
      </section>
    </div>
  );
}
export default Favorites;
