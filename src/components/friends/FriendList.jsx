import css from 'components/friends/friend.module.css';
import PropTypes from 'prop-types';
import { BsEmojiSmile, BsEmojiFrown } from 'react-icons/bs';

const FriendList = ({ friends }) => {
  return (
    <ul className={css.friendList}>
      {friends.map(({ id, isOnline, avatar, name }) => (
        <li className={css.item} key={id}>
          <span className={css.status}>
            {isOnline ? (
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
          <img className={css.avatar} src={avatar} alt={name} width="48" />
          <p className={css.name}>{name}</p>
        </li>
      ))}
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
