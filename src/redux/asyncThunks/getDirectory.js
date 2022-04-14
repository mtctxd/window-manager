import { createAsyncThunk } from '@reduxjs/toolkit';
import { BASE_API_URL } from '../../constants';
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const getDirectory = createAsyncThunk(
  'fetchDirectory',
  async (parameters = '') => {
    try {
      const response = await fetch(`${BASE_API_URL}${parameters}`);
      const data = await response.json();
      return data;
    } catch (error) {
      console.warn(error.stack);
      return error.message;
    }
  }
);

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
