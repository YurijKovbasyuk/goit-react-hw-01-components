import css from 'components/statistics/statistics.module.css';
import StatisticLabel from 'components/statistics/StatisticLabel';
import PropTypes from 'prop-types';

const Statistics = ({ title, stats }) => {
  return (
    <section className={css.statistics}>
      {title && <h2 className={css.title}>{title.toUpperCase()}</h2>}
      <ul className={css.statList}>
        {stats.map(({ id, label, percentage }) => (
          <StatisticLabel
            key={id}
            id={id}
            label={label}
            percentage={percentage}
          />
        ))}
      </ul>
    </section>
  );
};

Statistics.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    })
  ),
};

export default Statistics;
