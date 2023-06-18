import { QueryClient } from '@tanstack/query-core';
import { cache } from 'react';

const getQueryClient = () =>
  new QueryClient({
    // defaultOptions: {
    //   mutations: queryRetryConfig,
    //   queries: queryRetryConfig,
    // },
  });
export default getQueryClient;
