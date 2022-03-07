import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react'

const cryptoApiHeaders ={
    'x-rapidapi-host': 'coinranking1.p.rapidapi.com',
    'x-rapidapi-key': 'c317ffb3b4mshd81984a1664217fp12444bjsn4fd10a5a0531'
}

const baseUrl = 'https://coinranking1.p.rapidapi.com';

const createRequest = (url) => ({url,headers: cryptoApiHeaders})

export const cryptoApi = createApi({
    reducerPath: 'cryptoApi',
    baseQuery: fetchBaseQuery({baseUrl}),
    endpoints: (builder) => ({
         getCryptos: builder.query({
             query: (count) => createRequest(`/coins?limit=${count}`)
         })
    })
});

export const{
    useGetCryptosQuery,
} = cryptoApi;