import { useRef } from "react";
import React from "react";

function NewMeetupForm(props) {
  const titleInputRef = useRef();
  const imageInputRef = useRef();
  const adressInputRef = useRef();
  const descriptionInputRef = useRef();

  function submitHamdler(event) {
    event.preventDefault();
    const enteredTitle = titleInputRef.current.value;
    const enteredImage = imageInputRef.current.value;
    const enteredAdress = adressInputRef.current.value;
    const enteredDescription = descriptionInputRef.current.value;

    const meetupData = {
      title: enteredTitle,
      image: enteredImage,
      address: enteredAdress,
      description: enteredDescription,
    };
    props.onAddMeetup(meetupData);

    console.log(meetupData);
  }
  return (
    <form onSubmit={submitHamdler}>
      <div className="mb-6">
        <label htmlFor="title" className="form-label">
          Meetup Title
        </label>
        <input
          className="form-control"
          type="text"
          required
          id="title"
          ref={titleInputRef}
        />
      </div>
      <div>
        <label htmlFor="image" className="form-label">
          Meetup Image
        </label>
        <input
          className="form-control"
          type="url"
          required
          id="image"
          ref={imageInputRef}
        />
      </div>
      <div>
        <label htmlFor="adress" className="form-label">
          Adress
        </label>
        <input
          className="form-control"
          type="text"
          required
          id="adress"
          ref={adressInputRef}
        />
      </div>
      <div>
        <label htmlFor="description" className="form-label">
          Description
        </label>
        <textarea
          className="form-control"
          id="description"
          required
          row="5"
          ref={descriptionInputRef}
        ></textarea>
      </div>
      <div>
        <button className="btn btn-primary mt-2">Add Meetup</button>
      </div>
    </form>
  );
}
export default NewMeetupForm;
