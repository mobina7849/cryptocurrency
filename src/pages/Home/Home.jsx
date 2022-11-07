import React, { useContext, useEffect,useState } from 'react';
import Banner from '../../component/Banner/Banner';
import { options} from '../../Api/api';
import { CoinContext } from '../../Context/CoinProvider';
import { Grid } from '@mui/material';
const Home = () => {
    const {coins,setCoins}=useContext(CoinContext)
    const handleGetData= async()=>{
     const data=await options('/coins').then(data=>data.data.data.coins)
    setCoins(data.map((coin)=>({...coin,star:false})))
    }
    useEffect(()=>{

      handleGetData()
   
      },[])
     //console.log(coins)

    return ( 
        <>
        <Banner  />
        

        </>
       
     );
}
 
export default Home;