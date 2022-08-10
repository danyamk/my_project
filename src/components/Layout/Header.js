import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import Modal from "react-modal";

import AuthContext from "../../store/auth-context";

import SomeImage from "../../assets/Recording-Studio.jpg";
import Button from "../UI/Button";
import "./Modal.css";

import buttonClasses from "../UI/Button.module.css";
import classes from "./Header.module.css";
import Login from "../Login/Login";
import CreatePost from "../Post/CreatePost";

const Header = (props) => {
  const ctx = useContext(AuthContext);
  const [modalIsOpen, setIsOpen] = useState(false);

  function openModal() {
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
  }

  Modal.setAppElement(document.getElementById("root"));

  return (
    <>
      <header className={classes.header}>
        <Link to="/">
          <Button onCheck={props.onCheck}>IGT</Button>
        </Link>
        <div>
          <Link to="/news">
            <Button onCheck={props.onCheck}>News</Button>
          </Link>
          <Link to="/info">
            <Button onCheck={props.onCheck}>Info</Button>
          </Link>
          {!ctx.isLoggedIn ? (
            <>
              <Button onClick={openModal}>Login</Button>{" "}
              <Modal
                isOpen={modalIsOpen}
                onRequestClose={closeModal}
                className="Modal"
                overlayClassName="Overlay"
              >
                <Login onClose={closeModal} />
              </Modal>
            </>
          ) : null}
          {ctx.isLoggedIn ? (
            <div>
              <Button onClick={openModal}>Create Post</Button>
              <Modal
                isOpen={modalIsOpen}
                onRequestClose={closeModal}
                className="Modal"
                overlayClassName="Overlay"
              >
                <CreatePost />
              </Modal>
              <Link to="/">
                <Button className={buttonClasses.button} onClick={ctx.onLogout}>
                  Logout
                </Button>{" "}
              </Link>
            </div>
          ) : null}
        </div>
      </header>
      <div className={classes["main-image"]}>
        <img src={SomeImage} alt="Something aabout music" />
      </div>
    </>
  );
};

export default Header;
