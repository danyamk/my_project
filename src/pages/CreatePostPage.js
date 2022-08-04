import Header from "../components/Layout/Header";
import CreatePost from "../components/Post/CreatePost";
import classes from "../components/Const/MainContect.module.css";

const CreatePostPage = () => {
  return (
    <>
      <Header />
      <section className={classes.maincontect}>
        <main>
          <CreatePost />
        </main>
      </section>
    </>
  );
};

export default CreatePostPage;
