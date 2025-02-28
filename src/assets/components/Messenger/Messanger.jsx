import React from "react";
import { connect } from "react-redux";
import { v4 as uuidv4 } from "uuid";
import "../Messenger.css";
import styles from "./Messanger.module.css";

import Header from "../Header/Header.jsx";
import Chat from "../Chat/Chat.jsx";
import {
  addNePostActionCreator,
  toggleNavMenuActionCreator,
  updateTextActionCreator,
} from "../../../redux/actions-creator.js";
import Controls from "../Controls/Controls.jsx";
import { HashRouter, Routes, Route } from "react-router-dom";

import StartPage from "../StartPage.jsx";
import MessegeItem from "../Nav/NavList/MessegeItem.jsx";

const Messenger = ({
  textAreaValue,
  updateTextValue,
  addNewPost,
  posts,
  toggleNavMenu,
  hidden,
}) => {
  const renderNewPost = () => {
    return posts.map((i) => (
      <MessegeItem key={i.id} id={i.id} postText={i.postText} />
    ));
  };

  return (
    <HashRouter>
      <div className="container">
        <div className={styles.messenger}>
          <div className={styles.inner}>
            <Header toggleNavMenu={toggleNavMenu} hidden={hidden} />
            <main className={styles.main}>
              <Routes>
                <Route path="/" element={<StartPage />} />
                <Route
                  path="/chat"
                  element={<Chat renderPost={renderNewPost} />}
                />
              </Routes>
            </main>
            <footer>
              <Controls
                updateTextValue={updateTextValue}
                textAreaValue={textAreaValue}
                addNewPost={addNewPost}
              />
            </footer>
          </div>
        </div>
      </div>
    </HashRouter>
  );
};

let mapStateToProps = ({ addNewPostReducer: { textAreaValue, posts } }) => {
  return {
    textAreaValue: textAreaValue,
    postText: textAreaValue,
    posts: posts,
  };
};

let mapDispatchToProps = (dispatch) => {
  return {
    updateTextValue: (text) => dispatch(updateTextActionCreator(text)),
    toggleNavMenu: () => dispatch(toggleNavMenuActionCreator()),
    addNewPost: (text) => {
      if (text.length > 0) {
        dispatch(
          addNePostActionCreator({
            postText: text,
            id: uuidv4(),
          })
        );
      }
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Messenger);
