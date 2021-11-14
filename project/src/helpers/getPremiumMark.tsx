import {ReactNode} from 'react';

export function getPremiumMark(isPremium: boolean): ReactNode {
  return isPremium && (
    <div className="place-card__mark">
      <span>Premium</span>
    </div>
  );
}
