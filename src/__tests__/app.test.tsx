import { describe, it, expect, vi, afterEach } from 'vitest';
import { renderHook, act, waitFor } from '@testing-library/react';
import { renderWithProviders, screen, cleanup } from './test-utils';

import { useLaunchModal } from '../features/launch-modal/model/useLaunchModal';

describe('useLaunchModal', () => {
  afterEach(() => {
    vi.restoreAllMocks();
    cleanup();
  });

  it('opens and closes', () => {
    const { result } = renderHook(() => useLaunchModal());
    act(() => result.current[1]({ type: 'open', id: 110 }));
    expect(result.current[0].openedId).toBe(110);
    act(() => result.current[1]({ type: 'close' }));
    expect(result.current[0].openedId).toBeNull();
  });
});

import * as api from '../entities/launch/api/getLaunches';
import { useLaunches } from '../entities/launch/model/useLaunches';
import { launchesFixture } from './__fixtures__/launches';

describe('useLaunches', () => {
  afterEach(() => {
    vi.restoreAllMocks();
    cleanup();
  });

  it('loads data and sets loading=false', async () => {
    vi.spyOn(api, 'getLaunches').mockResolvedValueOnce(launchesFixture);

    const { result } = renderHook(() => useLaunches());
    await waitFor(() => expect(result.current.loading).toBe(false));

    expect(result.current.error).toBeNull();
    expect(result.current.launches.length).toBe(2);
    expect(result.current.launches[0].mission_name).toBe('Starlink 2');
  });
});

import { LaunchCard } from '../entities/launch/ui/card/LaunchCard';

describe('LaunchCard', () => {
  afterEach(() => {
    cleanup();
  });

  it('renders mission and rocket', () => {
    renderWithProviders(
      <LaunchCard
        missionName="Starlink 2"
        rocketName="Falcon 9"
        onSeeMore={() => {}}
      />,
    );
    expect(screen.getByText('Starlink 2')).toBeInTheDocument();
    expect(screen.getByText('Falcon 9')).toBeInTheDocument();
    expect(
      screen.getByRole('button', { name: /see more/i }),
    ).toBeInTheDocument();
  });
});

import { LaunchesPage } from '../pages/launches/ui/LaunchesPage';

describe('LaunchesPage', () => {
  afterEach(() => {
    vi.restoreAllMocks();
    cleanup();
  });

  it('shows title', async () => {
    vi.spyOn(api, 'getLaunches').mockResolvedValueOnce([]);
    renderWithProviders(<LaunchesPage />);
    expect(
      await screen.findByText(/SpaceX Launches 2020/i),
    ).toBeInTheDocument();
  });
});
