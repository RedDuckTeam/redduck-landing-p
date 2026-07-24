/* eslint-disable sonarjs/pseudo-random */

import type { Point } from '../../../types';

export function randomizedSequence(x: number, y: number): Point[] {
  if (y <= 0 || x <= 0) {
    return [];
  }

  const SPREAD_FACTOR = 2; // Adjust this value to control the "seamlessness"

  const allPointsWithKeys: { point: Point; key: number }[] = [];

  for (let col = 0; col < x; col++) {
    for (let row = 0; row < y; row++) {
      const point: Point = [col, row];
      const sortKey = row + (Math.random() - 0.5) * SPREAD_FACTOR;
      allPointsWithKeys.push({ point, key: sortKey });
    }
  }

  allPointsWithKeys.sort((a, b) => a.key - b.key);
  return allPointsWithKeys.map((item) => item.point);
}
