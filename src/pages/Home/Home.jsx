import React, { useContext, useEffect, useState } from 'react';
import Banner from '../../component/Banner/Banner';
import { options} from '../../Api/api';
import { CoinContext } from '../../Context/CoinProvider';
import { Grid } from '@mui/material';
import CircularProgress from '@mui/material/CircularProgress';
import {handlegetmodaldata} from "../../Api/api"

const Home = () => {
  const [loading,setLoading]=useState(true)
    const {setCoins}=useContext(CoinContext)
    const handleGetData= async()=>{
     const data=await handlegetmodaldata()
     setLoading(false)
    setCoins(data.map((coin)=>({...coin,star:false})))
    }
    useEffect(()=>{

      handleGetData()
   
      },[])

    return ( 
      <>
      {loading?
      <Grid display={'flex'} justifyContent={'center'} sx={{marginTop:10}} >
        <CircularProgress />
      </Grid>:
              <Banner  />
      }
      </>
     );
}
 
export default Home;