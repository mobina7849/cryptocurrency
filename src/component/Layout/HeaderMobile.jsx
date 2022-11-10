import React from 'react';
import Toolbar from "@mui/material/Toolbar";
import Box from "@mui/material/Box";
import { ReactComponent as Logo } from "../../assets/images/header-logo.svg"
import Button from "@mui/material/Button";
import HeadsetMicOutlinedIcon from "@mui/icons-material/HeadsetMicOutlined";
import Stack from "@mui/material/Stack";
import  Typography  from '@mui/material/Typography';
const HeaderMobile = () => {
    return ( 
     <Toolbar sx={{ justifyContent: "space-between" ,px:'0'}}>
        <Box minWidth={'100px'}>
          <Logo  />
        </Box>
        <Stack direction="row" spacing={2}>
          <Button
            variant="contained"
            startIcon={<HeadsetMicOutlinedIcon />}
            sx={{
              borderRadius: "25px",
              padding: "3px",
              backgroundColor: "rgba(0,0,0,.08)",
              color: "black",
            }}
          >
            <Typography variant='button' sx={{px:1}}>{"آیا نیاز به کمک دارید؟"}</Typography>
          </Button>
        </Stack>
      </Toolbar>
     );
}
 
export default HeaderMobile;