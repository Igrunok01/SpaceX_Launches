import ky from 'ky';

export const http = ky.create({
  timeout: 5000,
  retry: { limit: 2 },
});
