import css from 'components/statistics/statistics.module.css';

const StatisticLabel = ({ stats }) => {
  // console.log('1', stats[0]);

  return stats.map(stat => (
    <li
      className={css.item}
      key={stat.id}
      style={{ backgroundColor: getRandomHexColor() }}
    >
      <span className={css.label}>{stat.label}</span>
      <span className={css.percentage}>{stat.percentage}</span>
    </li>
  ));
};

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

export default StatisticLabel;
