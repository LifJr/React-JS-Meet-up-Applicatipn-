import React from "react";
import { useNavigate } from "react-router-dom";

import NewMeetupForm from "../components/meetups/NewMeetupForm";

function NewMeetups() {
  const history = useNavigate();

  function addNewMeetupHanddler(meetupData) {
    fetch(
      "https://react-getting-sarted-a6533-default-rtdb.firebaseio.com/meetups.json",
      {
        method: "POST",
        body: JSON.stringify(meetupData),
        headers: {
          ContentType: "apllication/json",
        },
      }
    ).then(() => {
      history("/");
    });
  }

  return (
    <div className="container mt-4">
      <h3>Add a New Meetup</h3>
      <NewMeetupForm onAddMeetup={addNewMeetupHanddler} />
    </div>
  );
}
export default NewMeetups;
