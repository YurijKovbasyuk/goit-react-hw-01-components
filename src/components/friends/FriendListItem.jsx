import css from 'components/friends/friend.module.css';

const FriendListItem = ({ friends }) => {
  console.log(friends.friends[0]);
  return (
    <div>
      {friends.friends.map(friend => (
        <li className={css.item} key={friend.id}>
          <span className={css.status}></span>
          <img
            className={css.avatar}
            src={friend.avatar}
            alt="User avatar"
            width="48"
          />
          <p className={css.name}>{friend.name}</p>
        </li>
      ))}
    </div>
  );
};

export default FriendListItem;
