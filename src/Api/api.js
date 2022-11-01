import axios from 'axios';
import { useCallback } from 'react';
export const options = {
  method: 'GET',
  baseURL:'https://coinranking1.p.rapidapi.com',
  url: '/coins',
  params: {
    referenceCurrencyUuid: 'yhjMzLPhuIDl',
    timePeriod: '24h',
    'tiers[0]': '1',
    orderBy: 'marketCap',
    orderDirection: 'desc',
    limit: '50',
    offset: '0'
  },
  headers: {
    'X-RapidAPI-Key': '1ac67c4601msh7f3a55b35017018p1a85b2jsn719ba0c78fc0',
    'X-RapidAPI-Host': 'coinranking1.p.rapidapi.com'
  }
}

    axios.request(options).then((response)=> {
        console.log(response.data.data.coins);
       })




