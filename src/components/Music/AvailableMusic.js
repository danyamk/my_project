import Card from "../UI/Card";
import classes from "../Const/MainContect.module.css";

const DUMMY_DB = [
  {
    id: "b1",
    artist: "Kendrick Lamar",
    name_track: "HUMBLE.",
    bio:
      "Kendrick Lamar Duckworth (born June 17, 1987) is " +
      "an American rapper, songwriter, and record producer. " +
      "He is often cited as one of the most influential rappers of his generation. " +
      "Aside from his solo career, he is also a member of the hip hop supergroup Black Hippy " +
      "alongside his former Top Dawg Entertainment (TDE) labelmates Ab-Soul, Jay Rock, and Schoolboy Q.",
  },
  {
    id: "b2",
    artist: "Eminem",
    name_track: "Killshot",
    bio:
      "Marshall Bruce Mathers III (born October 17, 1972), known professionally as Eminem, " +
      "is an American rapper, songwriter and record producer." +
      "He is credited with popularizing hip hop in middle America and is critically acclaimed " +
      "as one of the greatest rappers of all time. " +
      "Eminem's global success and acclaimed works are widely regarded " +
      "as having broken racial barriers for the acceptance of white rappers in popular music.",
  },
  {
    id: "b3",
    artist: "Metallica",
    name_track: "Halo On Fire",
    bio:
      "Metallica is an American heavy metal band. " +
      "The band was formed in 1981 in Los Angeles by vocalist/guitarist James Hetfield and " +
      "drummer Lars Ulrich and has been based in San Francisco for most of its career.",
  },
];

const AvailableMusic = () => {
  const musicList = DUMMY_DB.map((music) => (
    <li>
      <Card>
        <h1>{music.artist}</h1>
        <h3>{music.bio}</h3>
        <p> The track that i like: {music.name_track}</p>
      </Card>
    </li>
  ));

  return (
    <section className={classes.maincontect}>
      <ul>{musicList}</ul>
    </section>
  );
};

export default AvailableMusic;
