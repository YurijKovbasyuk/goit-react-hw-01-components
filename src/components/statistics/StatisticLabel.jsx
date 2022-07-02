import css from 'components/statistics/statistics.module.css';

const StatisticLabel = ({ stats }) => {
  // console.log('1', stats[0]);
  return stats.map(stat => (
    <li className={css.item} key={stat.id}>
      <span className={css.label}>{stat.label}</span>
      <span className={css.percentage}>{stat.percentage}</span>
    </li>
  ));
};

export default StatisticLabel;
