import styles from "./FriendList.module.css";

const FriendListItem = ({ avatar, name, isOnline }) => {
  return (
    <div className={styles.card}>
      <img src={avatar} alt="Avatar" width="48" />
      <p className={styles.name}>{name}</p>
      <p className={`${styles.status} ${isOnline ? styles.online : styles.offline}`}>
        {isOnline ? "Online" : "Offline"}
      </p>
    </div>
  );
};

export default FriendListItem;
