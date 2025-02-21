import styles from "./Chat.module.css";

const Chat = ({ renderPost }) => {
  return <ul className={styles.chat}>{renderPost()}</ul>;
};

export default Chat;
