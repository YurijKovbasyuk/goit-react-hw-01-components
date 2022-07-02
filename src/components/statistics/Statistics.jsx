import css from 'components/statistics/statistics.module.css';
import StatisticLabel from 'components/statistics/StatisticLabel';
// import PropTypes from 'prop-types';

const Statistics = ({ title, stats }) => {
  return (
    <section className={css.statistics}>
      {title !== undefined && <h2 className={css.title}>{title}</h2>}
      <ul className={css.statList}>
        <StatisticLabel key={stats.id} stats={stats} />
      </ul>
    </section>
  );
};

// Statistics.PropTypes = {};

export default Statistics;
