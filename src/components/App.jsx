import Profile from 'components/pofile/Profile';
import user from 'path/user.json';
import Statistics from 'components/statistics/Statistics';
import data from 'path/data.json';
import FriendList from 'components/friends/FriendList';
import friends from 'path/friends.json';
import TransactionHistory from 'components/transaction/TransactionHistory';
import transactions from 'path/transactions.json';

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
      Task 1
      <Profile
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />
      Task 2
      <Statistics title="Upload stats" stats={data} />
      <Statistics stats={data} />
      Task 3
      <FriendList friends={friends} />
      Task 4
      <TransactionHistory items={transactions} />
    </div>
  );
};
export default App;
