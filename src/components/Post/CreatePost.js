import { useState } from "react";

import Card from "../UI/Card";
import Button from "../UI/Button";
import Input from "../UI/Input";
import classes from "../Const/MainInput.module.css";

const CreatePost = (props) => {
  const [enteredArtist, setEnteredArtist] = useState("");
  const [enteredNameTrack, setNameTrack] = useState("");
  const [enteredBio, setBio] = useState("");

  const createPostHandler = (event) => {
    event.preventDefault();
    if (
      enteredArtist.trim().length === 0 ||
      enteredNameTrack.trim().length === 0
    ) {
      return;
    }
    props.onAddPost(enteredArtist, enteredNameTrack, enteredBio);
    setEnteredArtist("");
    setNameTrack("");
    setBio("");
  };

  const artistChangeHandler = (event) => {
    setEnteredArtist(event.target.value);
  };

  const nameTrackChangeHandler = (event) => {
    setNameTrack(event.target.value);
  };

  const bioChangeHandler = (event) => {
    setBio(event.target.value);
  };

  return (
    <Card className={classes.maininput}>
      <form onSubmit={createPostHandler}>
        <Input
          label="Artist"
          id="artist"
          type="text"
          value={enteredArtist}
          onChange={artistChangeHandler}
        />
        <Input
          label="Name track"
          id="name_track"
          type="text"
          value={enteredNameTrack}
          onChange={nameTrackChangeHandler}
        />
        <Input
          label="Bio"
          id="bio"
          type="text"
          value={enteredBio}
          onChange={bioChangeHandler}
        />
        <Button
          lineStyle={{ position: "relative", left: "45%", color: "black" }}
          type="submit"
        >
          Add post
        </Button>
      </form>
    </Card>
  );
};

export default CreatePost;
