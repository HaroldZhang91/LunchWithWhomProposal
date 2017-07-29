import React from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';
import classNames from 'classnames';
import './Post.scss';


/**
 * get activity state
 * @param  {object} activityItem activity item
 * @return {boolen}              is avaliable
 */
const getActivityState = (activityItem) => {
  let overTime = false;
  let isFilled = false;
  if (activityItem.deadline) {
    const activityDeadline = moment(activityItem.deadline);
    overTime = activityDeadline < moment();
    if (overTime) {
      return false;
    }
  }
  if (activityItem.maxPeopleCount) {
    isFilled = activityItem.maxPeopleCount <= activityItem.currentPeopleCount;
    if (isFilled) {
      return false;
    }
  }
  return !overTime && !isFilled;
};

/**
 * get count down
 * @param  {string} currentTime current time
 * @param  {string} endTime     end time
 * @return {string}             count down result
 */
const getItemCountDown = (currentTime, endTime) => {
  if (endTime === null || endTime === undefined) {
    return '';
  }
  const momentCurrentTime = moment(currentTime);
  const momentEndTime = moment(endTime);
  const countDownInfo = momentEndTime.diff(momentCurrentTime, 'seconds');

  const nextDays = parseInt(countDownInfo / (3600 * 24), 0);
  const nextHours = parseInt((countDownInfo - (nextDays * 3600 * 24)) / 3600, 0);
  const nextMinutes = parseInt((countDownInfo -
    (nextHours * 3600) - (nextDays * 3600 * 24)) / 60, 0);
  const nextSeconds = countDownInfo % 60;

  if (nextDays > 0) {
    return '';
  }
  return `CountDown: ${nextHours}:${nextMinutes}:${nextSeconds}`;
};

/**
 * get tile
 * @param  {string} title        orignal title
 * @param  {int} activityType activity type
 * @return {string}              title
 */
const getItemTitle = (title, activityType) => {
  switch (activityType) {
    case 0:
      return 'Regulary LLW';
    case 1:
      return `Topic: ${title}`;
    default:
      return 'Regulary LLW';
  }
};

/**
 * get item class
 * @param  {int} activityType activity type
 * @return {object}              class
 */
const getItemClassName = (activityItem) => {
  const itemClass = classNames({
    'activity-item': true,
    regular: activityItem.type === 0,
    'with-topic': activityItem.type === 1,
    unavailable: !getActivityState(activityItem)
  });
  return itemClass;
};

const getShowDate = lunchTime => moment(lunchTime).format('MMMM, DD');

/**
 * get people information
 * @param  {int} currentPeopleCount current people count
 * @param  {int} maxPeopleCount     max people count
 * @return {string}                    show people information
 */
const getPeopleInfo = (currentPeopleCount, maxPeopleCount) => {
  if (maxPeopleCount) {
    return `${currentPeopleCount} / ${maxPeopleCount}`;
  }
  return currentPeopleCount;
};

const Post = ({
  listOfActivity
}) => {
  const items = [];
  listOfActivity.forEach((item) => {
    items.push(
      <div key={item.id} className={getItemClassName(item)}>
        <div className="item-row">
          <div className="title">{getItemTitle(item.title, item.type)}</div>
          <div className="count-down">{getItemCountDown(moment(), item.deadline)}</div>
        </div>
        <div className="item-row">
          <div className="lunch-time">Date: {getShowDate(item.lunchTime)}</div>
          <div className="people-info">People: {getPeopleInfo(item.currentPeopleCount, item.maxPeopleCount)}</div>
        </div>
        <div className="item-row action">
          <button className="quick-join icon-check" />
        </div>
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
    type: PropTypes.number.isRequired,
    deadline: PropTypes.string,
    lunchTime: PropTypes.string.isRequired,
    currentPeopleCount: PropTypes.number.isRequired,
    maxPeopleCount: PropTypes.number
  }))
};

export default Post;
