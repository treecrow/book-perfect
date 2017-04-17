import async from 'async'
import _ from 'lodash'

var users = [
  { 'user': 'barney',  'active': false },
  { 'user': 'fred',    'active': false },
  { 'user': 'pebbles', 'active': true }
];
console.log(
  _.uniq([{ 'x': 1 }, { 'x': 2 }, { 'x': 1 }], 'x')
);
