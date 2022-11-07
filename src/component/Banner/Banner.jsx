import { Box, Button, Container, Grid, TextField, Typography } from "@mui/material";
import {useState} from "react";
import banner from "../../assets/images/banner.webp";
import PhoneIcon from '@mui/icons-material/Phone';
import ModalBanner from "../modalBanner/ModalBanner";
import { CoinContext } from "../../Context/CoinProvider";
import { useContext } from "react";

const Banner = () => {
  const coins=useContext(CoinContext)
  const [open, setOpen] =useState(false);
  const [inputCoin,setInputCoin]=useState({name:'',price:1})
  const [price,setPrice]=useState(0)
  const [inputNum,setInputNum]=useState(1)
  const handleModal=()=>{
    setOpen(true)
  }
  const handlechangeInputNumber=(e)=>{
    //setInputCoin({...inputCoin,price:'',number:''})
     setInputCoin({...inputCoin,[e.target.name]:e.target.value})

  }
  const ll=(e)=>{
    setInputNum(e.target.value)
  }
  return (
    <Container >
      <Grid container flexDirection={"column"} alignItems={"center"} m={2} justifyContent={'center'}>
        <Grid item maxWidth={{ xs: "150px", md: "272px" }} m={1}>
          <img src={banner} width="100%" />
        </Grid>
        <Grid item>
        <Grid item container spacing={{xs:1.5,md:0.5}} sx={{mx:'auto'}} flexDirection={{xs:'column',md:'row'}} marginBottom={2}>
          <Grid item>
          <TextField
          id="outlined"
          label="تومان"
          // defaultValue={coins[0]?.price}
          name="price"
          value={Number((inputCoin.price)*inputNum)}
          onChange={handlechangeInputNumber}
        />
          </Grid>
          <Grid item>
          <TextField
          id="outlined"
          label="واحد"
          defaultValue={1}
          name="number"
          value={inputNum}
          onChange={ll}
        />
          </Grid>
          <Grid item>
          <TextField
              onClick={handleModal}
              id="outlined-read-only-input"
              label="انتخاب ارز"
              // defaultValue={coins[0]?.name}
              value={inputCoin.name}
              //curser={'pointer'}
              sx={{ cursor: "pointer",paddingRight:'0' }}
              InputProps={{
                readOnly: true,
                startAdornment:<div style={{width:'30%' ,display:'flex',justifyContent:'center'}}><img width={'30px'} height={'30px'}   src={inputCoin.icon} /></div> 

              }}
            />
            <ModalBanner open={open} setOpen={setOpen}  setInputCoin={setInputCoin} setPrice={setPrice}/>
          </Grid>
        </Grid>
        </Grid>

        <Grid item width='100%' sx={{mx:'auto'}}>
            <Grid item container spacing={2} justifyContent={'center'} width='50%' sx={{mx:'auto'}} className="flexDir" alignItems={'center'}>
                <Grid item xs={12} md={4} >
                <Button variant="mainButton" item sx={{minWidth:'125px',mx:'auto'}} >{"درخواست خرید"}</Button>
                </Grid>
                <Grid item xs={12} md={4}  >
                <Button variant="secondaryButton" item sx={{backgroundColor:'secondary.main',width:'100%',minWidth:'125px'}} >{"فروش"}</Button>
                </Grid>
            </Grid>
        </Grid>
        <Grid item my={2} mx={'auto'} container flexDirection={'column'} alignItems={'center'} justifyContent="center">
            <Grid item><Typography variant="subtitle1">پشتیبانــی ۲۴ ساعتـه
            <br />
            حتی در روزهای تعطیل
            </Typography> </Grid>
            <Button item sx={{textAlign:'center'}}>
                <Typography p={1} variant="subtitle1">{"021-91079677"}</Typography>
                <PhoneIcon/>
            </Button>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Banner;
