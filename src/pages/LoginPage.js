import Login from "../components/Login/Login";
import Header from "../components/Layout/Header";

import classes from "../components/Const/MainContect.module.css";

const LoginPage = (props) => {
  return (
    <>
      <Header />
      <main className={classes.maincontect}>
        <Login />
      </main>
    </>
  );
};

export default LoginPage;
