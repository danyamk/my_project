import classes from "../components/Const/MainContect.module.css";
import Card from "../components/UI/Card";
import IGTSummary from "../components/Const/IGTSummary";
import Header from "../components/Layout/Header";

const DUMMY_DB_NEWS = [
  {
    id: "n1",
    title: "Something",
    main_text: "Something important",
  },
  {
    id: "n2",
    title: "Something2",
    main_text: "Something important",
  },
  {
    id: "n3",
    title: "Something3",
    main_text: "Something important",
  },
];

const News = () => {
  const someNews = DUMMY_DB_NEWS.map((news) => (
    <li>
      <Card>
        {" "}
        <h1>{news.title}</h1>
        <h3>{news.main_text}</h3>
      </Card>
    </li>
  ));

  return (
    <>
      <Header />
      <main>
        <IGTSummary>
          <p>There will be some news about our recording Studio and not only</p>
        </IGTSummary>
        <section className={classes.maincontect}>
          <ul>{someNews}</ul>
        </section>
      </main>
    </>
  );
};

export default News;
