import { nanoid } from 'nanoid';
import {ReviewType} from '../types/mocksTypes';

const reviews: ReviewType[] = [
  {
    comment: 'Comment 1',
    date: '2019-05-08T14:13:56.569Z',
    id: nanoid(),
    rating: 5,
    user: {
      avatarUrl: 'img/1.png',
      id: nanoid(),
      isProStatus: false,
      name: 'Ajax',
    },
  },
  {
    comment: 'Comment 2',
    date: '2019-05-08T14:13:56.569Z',
    id: nanoid(),
    rating: 2,
    user: {
      avatarUrl: 'img/2.png',
      id: nanoid(),
      isProStatus: false,
      name: 'Max',
    },
  },
  {
    comment: 'Comment 3',
    date: '2019-05-08T14:13:56.569Z',
    id: nanoid(),
    rating: 4,
    user: {
      avatarUrl: 'img/3.png',
      id: nanoid(),
      isProStatus: false,
      name: 'Brad',
    },
  },
  {
    comment: 'Comment 4',
    date: '2019-05-08T14:13:56.569Z',
    id: nanoid(),
    rating: 3,
    user: {
      avatarUrl: 'img/4.png',
      id: nanoid(),
      isProStatus: true,
      name: 'Pitt',
    },
  },
];

export default reviews;
