import FriendListItem from 'components/friends/FriendListItem';
import css from 'components/friends/friend.module.css';

const FriendList = props => {
  return (
    <ul className={css.friendList}>
      <FriendListItem friends={props} />
    </ul>
  );
};
export default FriendList;
