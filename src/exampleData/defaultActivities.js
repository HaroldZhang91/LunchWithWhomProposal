import moment from 'moment';

const defaultActivities = [{
  id: '0x145341',
  type: 0,
  title: 'Regular LWW',
  deadline: moment().add(1, 'days').format('YYYY-MM-DD HH:mm Z'),
  lunchTime: moment().add(2, 'days').format('YYYY-MM-DD HH:mm Z'),
  currentPeopleCount: 36,
  maxPeopleCount: null
}, {
  id: '0x145342',
  type: 0,
  title: 'Regular LWW',
  deadline: moment().add(4, 'days').format('YYYY-MM-DD HH:mm Z'),
  lunchTime: moment().add(5, 'days').format('YYYY-MM-DD HH:mm Z'),
  currentPeopleCount: 7,
  maxPeopleCount: null
}, {
  id: '0x145343',
  type: 1,
  title: 'Vaction Plan',
  deadline: moment().add(8, 'days').format('YYYY-MM-DD HH:mm Z'),
  lunchTime: moment().add(8, 'days').add('9', 'hours').format('YYYY-MM-DD HH:mm Z'),
  currentPeopleCount: 4,
  maxPeopleCount: 8
}, {
  id: '0x145344',
  type: 1,
  title: 'Child Education',
  deadline: moment().add(8, 'days').format('YYYY-MM-DD HH:mm Z'),
  lunchTime: moment().add(8, 'days').add('9', 'hours').format('YYYY-MM-DD HH:mm Z'),
  currentPeopleCount: 4,
  maxPeopleCount: 4
}, {
  id: '0x145345',
  type: 1,
  title: 'US TV drama',
  deadline: moment().add(8, 'days').format('YYYY-MM-DD HH:mm Z'),
  lunchTime: moment().add(8, 'days').add('9', 'hours').format('YYYY-MM-DD HH:mm Z'),
  currentPeopleCount: 2,
  maxPeopleCount: 5
}];

export default defaultActivities;
