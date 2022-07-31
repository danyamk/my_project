import { useContext } from "react";
import Header from "../components/Layout/Header";
import CreatePost from "../components/Post/CreatePost";
import PostContext from "../store/dummy_db-context";
import classes from "../components/Const/MainContect.module.css";

const CreatePostPage = () => {
  const ctx_db = useContext(PostContext);

  return (
    <>
      <Header />
      <section className={classes.maincontect}>
        <main>
          <CreatePost onAddPost={ctx_db.onCreate} />
        </main>
      </section>
    </>
  );
};

export default CreatePostPage;
