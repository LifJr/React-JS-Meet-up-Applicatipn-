import React from "react";
import MeetupItem from "./MeetupItem";

function MeetupList(props) {
  return (
    <div>
      {props.meetups.map((meetup) => (
        <MeetupItem
          key={meetup.id}
          id={meetup.id}
          image={meetup.image}
          title={meetup.title}
          adress={meetup.adress}
          description={meetup.description}
        />
      ))}
    </div>
  );
}
export default MeetupList;
