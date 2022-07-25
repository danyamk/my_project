import { useState, useEffect } from "react";

import Login from "../Login/Login";
import Header from "../Layout/Header";

const CheckModal = () => {
  const [activeModal, setActiveModal] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const storedUserLoggedInInformation = localStorage.getItem("isLoggedIn");

    if (storedUserLoggedInInformation === "1") {
      setIsLoggedIn(true);
    }
  }, []);

  const loginHandler = (email, password) => {
    localStorage.setItem("isLoggedIn", "1");
    setIsLoggedIn(true);
  };

  const logoutHandler = () => {
    localStorage.removeItem("isLoggedIn");
    setIsLoggedIn(false);
  };

  const showActiveModalHandler = () => {
    return setActiveModal(true);
  };

  const closeActiveModalHandler = () => {
    return setActiveModal(false);
  };

  return (
    <>
      {activeModal && isLoggedIn && (
        <Login onClose={closeActiveModalHandler} onLogin={loginHandler} />
      )}
        <Header
          onOpen={showActiveModalHandler}
          isAuthenticated={isLoggedIn}
          onLogout={logoutHandler}
        />
    </>
  );
};

export default CheckModal;