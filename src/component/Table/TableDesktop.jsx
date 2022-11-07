import StarBorderIcon from "@mui/icons-material/StarBorder";
import StarIcon from "@mui/icons-material/Star";
import  Grid  from "@mui/material/Grid";
import  Typography  from "@mui/material/Typography";
import  TableRow  from "@mui/material/TableRow";
import  TableCell  from "@mui/material/TableCell";
import  IconButton  from "@mui/material/IconButton";
const TableDesktop = ({coin,unit,handleStar}) => {
    return ( 
        <TableRow hover role="checkbox" tabIndex={-1} >
        <TableCell sx={{ textAlign: "center" }}>
          <IconButton onClick={() => handleStar(coin?.uuid)}>
            {coin.star ? <StarIcon /> : <StarBorderIcon />}
          </IconButton>
        </TableCell>
        <TableCell
          sx={{ textAlign: "center", direction: "ltr" }}
        >{`${coin.change}%`}</TableCell>
        <TableCell sx={{ textAlign: "center" }}>
          {coin.name}
        </TableCell>
        <TableCell sx={{ textAlign: "center" }}>
          <Grid display={"flex"}>
            <Typography
              variant="subtitle1"
              color={"rgba(0, 0, 0, 0.6)"}
              px={1}
            >
              {"USDT"}
            </Typography>
            <Typography variant="subtitle1">
              {coin.marketCap}
            </Typography>
          </Grid>
        </TableCell>
        <TableCell sx={{ textAlign: "center" }}>
          <Grid display={"flex"}>
            <Typography variant="subtitle1">
              {unit
                ? Math.ceil(coin?.price * 34000)
                : Math.ceil(coin?.price)}
            </Typography>
            <Typography
              variant="subtitle1"
              color={"rgba(0, 0, 0, 0.6)"}
              px={1}
            >
              {unit ? "تومان" : "Tether"}
            </Typography>
          </Grid>
        </TableCell>
        <TableCell sx={{ textAlign: "left" }}>
          <Grid display={"flex"} justifyContent={"space-evenly"}>
            <Grid item>
              <Typography variant="subtitle1" marginBottom={1}>
                {coin?.name}
              </Typography>
              <Grid display={"flex"}>
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
            <Grid item>
              <img
                width={"40px"}
                height={"40px"}
                src={coin?.iconUrl}
              />
            </Grid>
          </Grid>
        </TableCell>
      </TableRow>
     );
}
 
export default TableDesktop;