// import css from 'components/friends/friend.module.css';
// import { BsEmojiSmile, BsEmojiFrown } from 'react-icons/bs';

// const FriendListItem = ({ friends }) => {
//   console.log(friends.friends[0]);
//   return (
//     <div>
//       {friends.friends.map(friend => (
//         <li className={css.item} key={friend.id}>
//           <span className={css.status}>
//             {friend.isOnline ? (
//               <BsEmojiSmile
//                 style={{
//                   backgroundColor: '#54f046',
//                   borderRadius: '50%',
//                   marginRight: '10px',
//                 }}
//               />
//             ) : (
//               <BsEmojiFrown
//                 style={{
//                   backgroundColor: '#f0468d',
//                   borderRadius: '50%',
//                   marginRight: '10px',
//                 }}
//               />
//             )}
//           </span>
//           <img
//             className={css.avatar}
//             src={friend.avatar}
//             alt="User avatar"
//             width="48"
//           />
//           <p className={css.name}>{friend.name}</p>
//         </li>
//       ))}
//     </div>
//   );
// };

// export default FriendListItem;
