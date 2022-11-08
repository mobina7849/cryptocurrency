import React, { useContext, useEffect } from 'react';
import Banner from '../../component/Banner/Banner';
import { options} from '../../Api/api';
import { CoinContext } from '../../Context/CoinProvider';

const Home = () => {
    const {setCoins}=useContext(CoinContext)
    const handleGetData= async()=>{
     const data=await options('/coins').then(data=>data.data.data.coins)
    setCoins(data.map((coin)=>({...coin,star:false})))
    }
    useEffect(()=>{

      handleGetData()
   
      },[])

    return ( 
        <Banner  />
     );
}
 
export default Home;