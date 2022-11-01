import { Box, Button, Container, Grid, TextField, Typography } from "@mui/material";
import {useState} from "react";
import banner from "../../assets/images/banner.webp";
import PhoneIcon from '@mui/icons-material/Phone';
import ModalBanner from "../modalBanner/ModalBanner";
const Banner = ({coins}) => {
  const [open, setOpen] =useState(false);
  const handleModal=()=>{
    setOpen(true)
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
          defaultValue='0'
        />
          </Grid>
          <Grid item>
          <TextField
          id="outlined"
          label="واحد"
          defaultValue='0'
        />
          </Grid>
          <Grid item>
          <TextField
              onClick={handleModal}
              id="outlined-read-only-input"
              label="انتخاب ارز"
              defaultValue="بیت کوین"
              //curser={'pointer'}
              sx={{ cursor: "pointer" }}
              InputProps={{
                readOnly: true,
              }}
            />
            <ModalBanner open={open} setOpen={setOpen} />
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
