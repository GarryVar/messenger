import React from "react";

const Selector = {
  likeBtn: "messanger__like-btn",
  likedBtn: "messanger__like-btn--clicked",
};

const likedToggle = (likedIcon) => {
  return likedIcon
    ? `${Selector.likeBtn} ${Selector.likedBtn}`
    : `${Selector.likeBtn}`;
};

const MessageItem = ({ id, postText, likedIcon, addLike, like }) => {
  return (
    <li className="messanger__item" id={id}>
      <div className="messanger__user-avatar"></div>
      <article className="messanger__item-article">
        <p>{postText}</p>
        <div className="messanger__item-control">
          <div className="messanger__item-control-likes">
            <button
              className={likedToggle(likedIcon)}
              disabled={likedIcon}
              onClick={addLike}
            >
              <span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  xmlSpace="preserve"
                  width="15"
                  height="15"
                  fillRule="evenodd"
                  clipRule="evenodd"
                  imageRendering="optimizeQuality"
                  shapeRendering="geometricPrecision"
                  textRendering="geometricPrecision"
                  viewBox="0 0 15 15"
                >
                  <path
                    fillRule="nonzero"
                    d="M7.5 2.812C8.437.937 9.375 0 11.25 0 13.32 0 15 1.68 15 3.75c0 3.75-3.75 7.5-7.5 11.25C3.75 11.25 0 7.5 0 3.75 0 1.68 1.68 0 3.75 0 5.625 0 6.562.937 7.5 2.812z"
                  />
                </svg>
              </span>
            </button>
            <span>{like}</span>
          </div>
        </div>
      </article>
    </li>
  );
};

export default MessageItem;
