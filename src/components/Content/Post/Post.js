import React from 'react';
import PropTypes from 'prop-types';
import './Post.scss';

const Poster = ({
  listOfActivity
}) => {
  const items = [];
  listOfActivity.forEach((item) => {
    items.push(
      <div className="activity-item">{item.title}</div>
      );
  });
  return (
    <div className="activity-list">
      {items}
    </div>
  );
};

Poster.propTypes = {
  listOfActivity: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    deadline: PropTypes.string,
    lunchTime: PropTypes.string.isRequired,
    currentPeopleCount: PropTypes.number.isRequired,
    maxPeopleCount: PropTypes.number
  }))
};

export default Poster;
