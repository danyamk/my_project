import IGTSummary from "../components/Const/IGTSummary";
import CheckModal from "../components/UI/CheckModal";
import Card from "../components/UI/Card";

import classes from "../components/Const/MainContect.module.css";

const Info = () => {
  return (
    <>
      <CheckModal />
      <main>
        <IGTSummary>
          <p>Here you can find any information about our recording Studio</p>
        </IGTSummary>
        <section className={classes.maincontect}>
          <Card>
            <h1>
              We are located at: <small>adress</small>
            </h1>
            <h1>Number: <small>number</small></h1>
          </Card>
        </section>
      </main>
    </>
  );
};

export default Info;
