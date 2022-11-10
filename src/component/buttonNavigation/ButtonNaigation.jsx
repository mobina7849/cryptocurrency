import * as React from 'react';
import Box from '@mui/material/Box';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import HomeIcon from '@mui/icons-material/Home';
import MonetizationOnIcon from '@mui/icons-material/MonetizationOn';
import { useNavigate } from 'react-router-dom';

const ButtonNavigation = () => {
    const [value, setValue] = React.useState(0);
    const navigate=useNavigate()
    const handleChangePageCurrent=()=>{
        navigate('/CurrentPrice')
    }
    const handleChangePageHome=()=>{
        navigate('/')
    }
    return ( 
        <Box sx={{ width: '100%' }} position={'fixed'} bottom={0}>
        <BottomNavigation
          showLabels
          value={value}
          onChange={(event, newValue) => {
            setValue(newValue);
          }}
        >
          <BottomNavigationAction label="خانه" value={'1'} icon={<HomeIcon />} onClick={handleChangePageHome} />
          <BottomNavigationAction label="قیمت لحظه ای" value={'2'}  icon={<MonetizationOnIcon />} onClick={handleChangePageCurrent}/>
        </BottomNavigation>
      </Box>
    );
 }
export default ButtonNavigation;