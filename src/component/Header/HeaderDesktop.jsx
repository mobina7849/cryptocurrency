import  Typography  from '@mui/material/Typography';
import Grid from '@mui/material/Grid'
import Button from '@mui/material/Button'
import headeritems from "../../Data/dataHeader";
import { ReactComponent as Logo } from "../../assets/images/header-logo.svg"
import SegmentRoundedIcon from '@mui/icons-material/SegmentRounded';
import Divider from '@mui/material/Divider';
const HeaderDesktop = () => {
    return ( 
        <Grid container sx={{color:'black',width:'100%',height:'75px',justifyContent:'space-between',alignItems:'center'}}>
            <Grid item sx={{width:'45%',display:'flex',justifyContent:'space-evenly',paddingRight:'0',alignItems:'center'}}>
                <Button variant='secondaryButton' sx={{color:'#000'}}>
                    <SegmentRoundedIcon  fontSize="large"/>
                    <Typography   >منو</Typography>
                </Button>
                {headeritems.map((item,index)=>(
                    <Button variant='secondaryButton contained'>
                       <Typography variant='button' key={index}>{item}</Typography>
                    </Button>

                ))}
            </Grid>
            <Grid item sx={{height:'50px',display:'flex',justifyContent:'space-around', alignItems:'center'}}>
                <Grid>
                   <Button variant="mainButton" >
                   {"ورود / ثبت نام"}
                   </Button>
                </Grid>
                <Divider orientation="vertical" variant="middle" flexItem sx={{mx:1}} />
               <Grid sx={{width:'120px',height:'48px'}} > <Logo sx={{width:'100%'}} /></Grid>
              
                
            </Grid>
        </Grid>
     );
}
 
export default HeaderDesktop;

{/* <HomeIcon sx={{ fontSize: 40 }} /> */}
