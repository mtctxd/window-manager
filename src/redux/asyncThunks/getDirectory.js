import { BASE_API_URL } from '../../constants';
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const directoryApi = createApi({
  reducerPath: 'fetchDirectory',
  baseQuery: fetchBaseQuery({ baseUrl: BASE_API_URL }),
  endpoints: (builder) => ({
    getDirectory: builder.query({
      query: (id = '') => `${id}`,
    }),
  }),
});

export const { useGetDirectoryQuery } = directoryApi;
