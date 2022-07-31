import Card from "../UI/Card";
import PostContext from "../../store/dummy_db-context";
import classes from "../Const/MainContect.module.css";
import { useContext } from "react";

const AvailableMusic = () => {
  const ctx_db = useContext(PostContext);

  const musicList = ctx_db.postList.map((music) => (
    <li key={music.key}>
      <Card>
        <h1>{music.artist}</h1>
        <h3>{music.bio}</h3>
        <p> The track that i like: {music.name_track}</p>
      </Card>
    </li>
  ));

  return (
    <section className={classes.maincontect}>
      <ul>{musicList.reverse()}</ul>
    </section>
  );
};

export default AvailableMusic;
