const Chat = ({ renderPost }) => {
  return <ul className="messenger__chat">{renderPost()}</ul>;
};

export default Chat;
