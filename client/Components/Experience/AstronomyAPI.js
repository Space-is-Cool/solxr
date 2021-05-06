let now = new Date();
let date = `${now.getFullYear()}-${now.getMonth()}-${now.getDate()}`;
let time = now.toTimeString().split(' ')[0];

const queryData = {
  longitude: '-90.0715',
  latitude: '29.9511',
  fromDate: date,
  toDate: date,
  time: time,
  data: null,
  loading: true,
  coordinates: 'equatorial',
};

