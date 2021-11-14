import {TOTAL_STARS} from '../const';
import {ReactNode} from 'react';

const TOTAL_WIDTH = 100;

export function getRatingSpan(rating: number): ReactNode {
  return <span style={{width: `${TOTAL_WIDTH / TOTAL_STARS * rating}%`}}/>;

}
