import React, { useState } from "react";

const MessegeItem = ({ id, postText }) => {
  const [like, setLike] = useState(0);
  const [likedIcons, setLikedIcon] = useState(false);
  const onSetLike = () => {
    setLikedIcon(() => !likedIcons);
    setLike(() => like + 1);
  };
  return (
    <li className="messenger__item" id={id}>
      <div className="messenger__user-avatar"></div>
      <article className="messenger__item-article">
        <p>{postText}</p>
        <div className="messenger__item-control">
          <div className="messenger__item-control-likes">
            <button
              className={
                likedIcons
                  ? "messenger__like-btn messenger__like-btn--clicked"
                  : "messenger__like-btn"
              }
              onClick={onSetLike}
              disabled={likedIcons}
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

export default MessegeItem;
