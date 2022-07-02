// import FriendListItem from 'components/friends/FriendListItem';
import css from 'components/friends/friend.module.css';
import PropTypes from 'prop-types';
import { BsEmojiSmile, BsEmojiFrown } from 'react-icons/bs';

const FriendList = ({ friends }) => {
  // console.log(friends);
  return (
    <ul className={css.friendList}>
      {friends.map(friend => (
        <li className={css.item} key={friend.id}>
          <span className={css.status}>
            {friend.isOnline ? (
              <BsEmojiSmile
                style={{
                  backgroundColor: '#54f046',
                  borderRadius: '50%',
                  marginRight: '10px',
                }}
              />
            ) : (
              <BsEmojiFrown
                style={{
                  backgroundColor: '#f0468d',
                  borderRadius: '50%',
                  marginRight: '10px',
                }}
              />
            )}
          </span>
          <img
            className={css.avatar}
            src={friend.avatar}
            alt={friend.name}
            width="48"
          />
          <p className={css.name}>{friend.name}</p>
        </li>
      ))}
      {/* <FriendListItem friends={props} /> */}
    </ul>
  );
};

FriendList.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.shape({
      avatar: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      id: PropTypes.number.isRequired,
      isOnline: PropTypes.bool,
    })
  ),
};

export default FriendList;
