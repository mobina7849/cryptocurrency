import axios from 'axios';
//import { useCallback } from 'react';
export const options =axios.create({
  method: 'GET',
  baseURL:'https://coinranking1.p.rapidapi.com',
  //timeout: 800,
  // url: '',
  // params: {
  //   referenceCurrencyUuid: 'yhjMzLPhuIDl',
  //   timePeriod: '24h',
  //   'tiers[0]': '1',
  //   orderBy: 'marketCap',
  //   orderDirection: 'desc',
  //   limit: '50',
  //   offset: '0'
  // },
  headers: {
    'X-RapidAPI-Key': '1ac67c4601msh7f3a55b35017018p1a85b2jsn719ba0c78fc0',
    'X-RapidAPI-Host': 'coinranking1.p.rapidapi.com'
  }
})
// axios.request(options).then((response) =>{
// 	console.log(response.data);
// }).catch((error)=> {
// 	console.error(error);
// });
    // axios.request(options).then((response)=> {
    //     console.log(response.data.data.coins);
    //    })

  //  export const response = options.get('/coins');
// export const hh= ()=>{
//   return options('/coins').then(data=>data)
// } export const handlegetmodaldata =()=>{

  export const handlegetmodaldata =()=>{
    return options('/coins').then(data=>data.data.data.coins)
    }