import AppBar from "@mui/material/AppBar";
import {  useMediaQuery, useTheme } from "@mui/material";
import HeaderDesktop from "./HeaderDesktop";
import HeaderMobile from "./HeaderMobile";
import { Container } from '@mui/material';
import { Outlet } from "react-router-dom";

const Layout = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));
  return (
    <>
     <AppBar
      position="static"
      sx={{ backgroundColor: "white", borderBottom: 1,height:'auto' }}
     >
      <Container>
          {isMobile ? (
            <HeaderMobile/>
          ) : (
            <HeaderDesktop/>
          )}
      </Container>
     </AppBar>
     <Outlet/>
    </>
  );
};

export default Layout;
