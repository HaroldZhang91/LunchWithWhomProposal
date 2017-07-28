import moment from 'moment';

const defaultActivities = [{
  id: '0x145341',
  title: 'Regular LWW',
  deadline: moment().add(1, 'days').format('LLLL'),
  lunchTime: moment().add(2, 'days').format('LLLL'),
  currentPeopleCount: 36,
  maxPeopleCount: null
}, {
  id: '0x145342',
  title: 'Regular LWW',
  deadline: moment().add(4, 'days').format('LLLL'),
  lunchTime: moment().add(5, 'days').format('LLLL'),
  currentPeopleCount: 7,
  maxPeopleCount: 10
}];

export default defaultActivities;
