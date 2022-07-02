import css from 'components/pofile/profile.module.css';
import PropTypes from 'prop-types';
import ProfileList from 'components/pofile/ProfileList';

const Profile = ({
  user,
  //   avatar,
  //   username,
  //   tag,
  //   location,
  //   followers,
  //   views,
  //   likes,
}) => {
  const { avatar, username, tag, location } = user;

  return (
    <div className={css.profile}>
      <div className={css.description}>
        <img
          src={avatar}
          // src="https://cdn-icons-png.flaticon.com/512/1077/1077012.png"
          alt="User avatar"
          className={css.avatar}
        />
        <p className={css.name}>{username}</p>
        <p className={css.tag}>{tag}</p>
        <p className={css.location}>{location}</p>
      </div>
      <ProfileList stats={user.stats} />
      {/* <ul className={css.stats}>
        <li>
          <span className={css.label}>Followers: </span>
          <span className={css.quantity}>{stats.followers}</span>
        </li>
        <li>
          <span className={css.label}>Views: </span>
          <span className={css.quantity}>{stats.views}</span>
        </li>
        <li>
          <span className={css.label}>Likes: </span>
          <span className={css.quantity}>{stats.likes}</span>
        </li>
      </ul> */}
    </div>
  );
};

Profile.propTypes = {
  user: PropTypes.exact({
    avatar: PropTypes.string.isRequired,
    username: PropTypes.string.isRequired,
    tag: PropTypes.string.isRequired,
    location: PropTypes.string.isRequired,
    stats: PropTypes.shape({
      followers: PropTypes.number.isRequired,
      views: PropTypes.number.isRequired,
      likes: PropTypes.number.isRequired,
    }),
  }),
};

export default Profile;
