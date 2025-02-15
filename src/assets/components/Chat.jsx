const Chat = ({ renderPost }) => {
  return <ul className="messanger__chat">{renderPost()}</ul>;
};

export default Chat;
