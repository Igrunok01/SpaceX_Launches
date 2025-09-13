import { http } from '../../../shared/api/ky';
import type { Launch } from '../model/types';

export async function getLaunches(): Promise<Launch[]> {
  const url = `https://api.spacexdata.com/v3/launches?launch_year=2020`;
  return http.get(url).json<Launch[]>();
}
