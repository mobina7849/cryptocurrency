import React, { useEffect,useState } from 'react';
import Banner from '../../component/Banner/Banner';
import Header from '../../component/Header/Header';
import ModalBanner from '../../component/modalBanner/ModalBanner';
import axios from 'axios';
import { handleApi, options } from '../../Api/api';
import { api } from '../../Api/api';
import { nn } from '../../Api/api';
const Home = () => {
    //const [coins,setCoins]=useState()

  //console.log(coins)
    return ( 
        <>
        <Header></Header>
        <Banner />
        </>
       
     );
}
 
export default Home;