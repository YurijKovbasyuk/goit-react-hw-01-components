import css from 'components/statistics/statistics.module.css';
import getRandomHexColor from 'helpers/ranomColor';

const StatisticLabel = ({ id, label, percentage }) => {
  return (
    <li
      className={css.item}
      key={id}
      style={{ backgroundColor: getRandomHexColor() }}
    >
      <span className={css.label}>{label}</span>
      <span className={css.percentage}>{percentage}%</span>
    </li>
  );
};

export default StatisticLabel;
