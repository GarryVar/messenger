import React from "react";
import { connect } from "react-redux";
import { v4 as uuidv4 } from "uuid";
import "./Messanger.css";
import Header from "./Header.jsx";
import Chat from "./Chat.jsx";
import {
  addNePostActionCreator,
  likeActionCreator,
  toggleNavMenuActionCreator,
  updateTextActionCreator,
} from "../../redux/actionsCreator.js";
import Controls from "./Controls.jsx";
import MessageItem from "./MessageItem.jsx";

const Messanger = ({
  addLike,
  likedIcon,
  like,
  textAreaValue,
  updateTextValue,
  addNewPost,
  posts,
  toggleNavMenu,
  hidden,
}) => {
  const renderNewPost = () => {
    return posts.map((i) => (
      <MessageItem
        key={i.id}
        id={i.id}
        postText={i.postText}
        likedIcon={likedIcon}
        addLike={addLike}
        like={like}
      />
    ));
  };

  return (
    <div className="container">
      <div className="messanger">
        <div className="messanger__inner">
          <Header toggleNavMenu={toggleNavMenu} hidden={hidden} />
          <Chat renderPost={renderNewPost} />
          <Controls
            updateTextValue={updateTextValue}
            textAreaValue={textAreaValue}
            addNewPost={addNewPost}
          />
        </div>
      </div>
    </div>
  );
};

let mapStateToProps = ({
  likeReducer: { like, likedIcon },
  addNewPostReducer: { textAreaValue, posts },
  toggleNavReducer: { hidden },
}) => {
  return {
    like: like,
    likedIcon: likedIcon,
    textAreaValue: textAreaValue,
    postText: textAreaValue,
    posts: posts,
    hidden: hidden,
  };
};

let mapDispatchToProps = (dispatch) => {
  return {
    addLike: () => dispatch(likeActionCreator()),

    updateTextValue: (text) => dispatch(updateTextActionCreator(text)),

    toggleNavMenu: () => dispatch(toggleNavMenuActionCreator()),

    addNewPost: (text) => {
      dispatch(
        addNePostActionCreator({
          postText: text,
          id: uuidv4(),
        }),
      );
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Messanger);
