import { Fragment } from "react";

import IGTSummary from "../Const/IGTSummary";
import AvailableMusic from "./AvailableMusic";

const Music = () => {
  return (
    <Fragment>
      <IGTSummary>
        {" "}
        <h2>We are IGT Community</h2>
        <p>
          You can listen to the music of artists who recorded music with us.
          <p>
            All our performers are just beginning artists and you can appreciate
            their creations.
          </p>
        </p>
        <p>
          You can also participate in the recording of your music in our studio.
        </p>
      </IGTSummary>
      <AvailableMusic />
    </Fragment>
  );
};
export default Music;
