import React from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';
import './Post.scss';

const countDownFunc = (currentTime, endTime) => {
  const momentCurrentTime = moment(currentTime);
  const momentEndTime = moment(endTime);
  const countDownInfo = momentEndTime.diff(momentCurrentTime);  
  const countDownM = moment.duration(countDownInfo, 'milliseconds');
  console.log(moment(countDownM).format('hh:mm:ss'));
  return countDownInfo;
};

const Post = ({
  listOfActivity
}) => {
  const items = [];
  listOfActivity.forEach((item) => {
    items.push(
      <div key={item.id} className="activity-item regular">
        <div className="title">{item.title}</div>
        <div className="count-down">{countDownFunc(moment(), item.deadline)}</div>
        <div className="lunch-time">{item.lunchTime}</div>
        <div className="people-info">{item.currentPeopleCount}</div>
      </div>
      );
  });
  return (
    <div className="activity-list">
      {items}
    </div>
  );
};

Post.propTypes = {
  listOfActivity: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    deadline: PropTypes.string,
    lunchTime: PropTypes.string.isRequired,
    currentPeopleCount: PropTypes.number.isRequired,
    maxPeopleCount: PropTypes.number
  }))
};

export default Post;
