import Profile from 'components/pofile/Profile';
import userInfo from 'path/user.json';
import Statistics from 'components/statistics/Statistics';
import data from 'path/data.json';
import FriendList from 'components/friends/FriendList';
import friendsInfo from 'path/friends.json';

const App = () => {
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        fontSize: 40,
        color: '#010101',
        backgroundColor: '#65e8ff',
      }}
    >
      React homework 1
      <Profile user={userInfo} />
      <Statistics title="Upload stats" stats={data} />
      <Statistics stats={data} />
      <FriendList friends={friendsInfo} />
    </div>
  );
};
export default App;
