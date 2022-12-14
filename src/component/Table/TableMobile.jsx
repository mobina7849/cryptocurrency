import StarBorderIcon from "@mui/icons-material/StarBorder";
import StarIcon from "@mui/icons-material/Star";
import  Grid  from "@mui/material/Grid";
import  Typography  from "@mui/material/Typography";
import  IconButton  from "@mui/material/IconButton";
import Divider from '@mui/material/Divider';

const TableMobile = ({coin,unit,handleStar}) => {
    return ( 
      <>
      <Grid width={'100%'} height={'100%'} alignItems={'center'} justifyContent={'space-between'} display={'flex'} my={1} >
        <Grid>
        <IconButton onClick={() => handleStar(coin?.uuid)} sx={{"&.MuiButtonBase-root":{padding:0}}}>
             {coin.star ? <StarIcon /> : <StarBorderIcon />}
           </IconButton>
        </Grid>
        <Grid>
        <Grid display={"flex"} alignItems={'center'} justifyContent={"flex-end"} >
        <Typography
              variant="subtitle1"
              color={"rgba(0, 0, 0, 0.6)"}
              px={1}
            >
              {'خرید'}
            </Typography>
            <Typography variant="subtitle1">
              {unit==='Toman'
                ? Math.ceil(coin?.price * 34000)
                : Math.ceil(coin?.price)}
            </Typography>
            <Typography
              variant="subtitle1"
              color={"rgba(0, 0, 0, 0.6)"}
              px={1}
            >
              {unit==='Toman' ? "تومان" : "Tether"}
            </Typography>
          </Grid>
          <Grid display={"flex"} alignItems={'center'} justifyContent={"flex-end"} >

           <Typography
              variant="subtitle1"
              color={"rgba(0, 0, 0, 0.6)"}
              px={1}
            >
              {'ارزش بازار'}
            </Typography>
            <Typography variant="subtitle1">
              {coin.marketCap}
            </Typography>
          <Typography
              variant="subtitle1"
              color={"rgba(0, 0, 0, 0.6)"}
              px={1}
            >
              {"USDT"}
            </Typography>
          </Grid>
         </Grid> 
          <Grid display={"flex"} justifyContent={'flex-start'}>
            <Grid item>
              <Typography variant="subtitle1" marginBottom={1}  sx={{direction: "ltr" }}>
                 {coin?.name}
               </Typography>
               <Grid display={"flex"}>
               <Typography
                  variant="subtitle1"
                  //color={"rgba(0, 0, 0, 0.6)"}
                  sx={{
                    direction: "ltr" ,
                    marginLeft:1
            
                  }}
                >
                  {`${coin.change}%`}
                </Typography>
                <Typography
                  variant="subtitle1"
                  color={"rgba(0, 0, 0, 0.6)"}
                >
                  {coin?.symbol}
                </Typography>
                <Typography
                  variant="subtitle1"
                  color={"rgba(0, 0, 0, 0.6)"}
                  sx={{
                    backgroundColor: "secondary.main",
                    width: "15px",
                    textAlign: "center",
                    marginRight: 1,
                    borderRadius: 1,
                  }}
                >
                  {coin?.rank}
                </Typography>
  
              </Grid>
            </Grid>
            <Grid item marginRight={1}>
              <img
                width={"40px"}
                height={"40px"}
                src={coin?.iconUrl}
              />
            </Grid>
           </Grid>
      </Grid>
      <Grid><Divider variant="fullWidth" /></Grid>

    </>
      
     );
}
 
export default TableMobile;