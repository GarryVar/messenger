import React from "react";

const myRef = React.createRef();

const Controls = ({ myref, updateTextValue, textAreaValue, addNewPost }) => {
  const onAddNewPost = () => {
    addNewPost(myRef.current.value);
  };

  const onUpdateTextValue = () => {
    updateTextValue(myRef.current.value);
  };
  return (
    <div className="messanger__control">
      <input
        type="text"
        ref={myRef}
        onChange={onUpdateTextValue}
        value={textAreaValue}
        placeholder="Сообщение"
      ></input>
      <button>
        <span></span>
      </button>
      <button onClick={onAddNewPost}>
        <span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            xmlSpace="preserve"
            width="20"
            height="20"
            fillRule="evenodd"
            clipRule="evenodd"
            imageRendering="optimizeQuality"
            shapeRendering="geometricPrecision"
            textRendering="geometricPrecision"
            viewBox="0 0 20 20"
          >
            <path d="M13.913 10.022c-.096.054-7.716 1.323-8.477 1.434-.938.136-1.909.356-2.855.474-.112.176-.312.799-.405 1.052L.968 16.217c-.271.705-.548 1.433-.803 2.15-.144.404-.268.744-.021 1.153.173.285.514.539 1.026.468.277-.039.77-.324 1.016-.45l2.956-1.485c2.63-1.293 5.242-2.646 7.876-3.961l5.911-2.974c.299-.152.709-.298.913-.545.262-.319.233-.809 0-1.137-.208-.294-.512-.397-.879-.582-.336-.169-.663-.331-.993-.497L4.183 1.423c-.678-.33-1.288-.655-1.965-.986-.274-.135-.711-.405-1.05-.433-.48-.04-.845.213-1.02.459-.275.384-.184.702-.018 1.128.331.853 2.313 6.29 2.415 6.47.07.126.411.13.569.156l5.711.952c1.698.269 3.405.549 5.088.853z" />
          </svg>
        </span>
      </button>
    </div>
  );
};

export default Controls;
