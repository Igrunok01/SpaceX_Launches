import type { Launch } from '../../entities/launch/model/types';

export const launchesFixture: Launch[] = [
  {
    flight_number: 1,
    mission_name: 'Starlink 2',
    details: 'Test details',
    links: { mission_patch_small: 'https://example.com/patch-1.png' },
    rocket: { rocket_name: 'Falcon 9' },
  },
  {
    flight_number: 2,
    mission_name: 'Crew Dragon In Flight Abort Test',
    details: 'Test details 2',
    links: { mission_patch_small: 'https://example.com/patch-2.png' },
    rocket: { rocket_name: 'Falcon 9' },
  },
];
