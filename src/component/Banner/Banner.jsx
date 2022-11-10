import { Button, Container, Grid, Typography } from "@mui/material";
import banner from "../../assets/images/banner.webp";
import PhoneIcon from '@mui/icons-material/Phone';
import InputsBanner from "./InputsBanner/InputsBanner";
import ButtonsBanner from "./ButtonsBanner/ButtonsBanner";

const Banner = () => {


  return (
    <Container >
      <Grid container flexDirection={"column"} alignItems={"center"} sx={{marginTop:'10px'}} justifyContent={'center'} my={'auto'} >
        <Grid item maxWidth={{ xs: "150px", md: "272px" }} m={1}>
          <img src={banner} width="100%" />
        </Grid>
        <InputsBanner/>
        <ButtonsBanner/>
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
