import moment from 'moment';

const format = 'DD/MM/YYYY';

const articles = [
  {
    route: 'hoisting',
    title: 'Hoisting',
    description: 'this is going to be my first article',
    date: moment('19/07/2020', format).format('MMMM Do YYYY'),
  },
  {
    route: 'article',
    title: 'My first article',
    description: 'this is going to be my first article',
    date: moment('19/07/2020', format).format('MMMM Do YYYY'),
  },
  {
    route: 'article',
    title: 'My first article',
    description: 'this is going to be my first article',
    date: moment('19/07/2020', format).format('MMMM Do YYYY'),
  },
  {
    route: 'article',
    title: 'My first article',
    description: 'this is going to be my first article',
    date: moment('19/07/2020', format).format('MMMM Do YYYY'),
  },
];

export default articles;
