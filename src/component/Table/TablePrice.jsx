import {
  useTheme,
  useMediaQuery,
  Box,
  Grid
} from "@mui/material";
import * as React from "react";
import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import { useContext } from "react";
import { CoinContext } from "../../Context/CoinProvider";
import { useState } from "react";
import { useEffect } from "react";
import TableLogic from "../TableLogic/TableLogic";
import TableDesktop from "./TableDesktop";
import TableMobile from "./TableMobile";
import columns from "../../Data/dataTableHeader";
import {handlegetmodaldata} from "../../Api/api"
import CircularProgress from '@mui/material/CircularProgress';


const TablePrice = () => {
  const theme = useTheme();
  const [search, setSearch] = useState("");
  const isDesktop = useMediaQuery(theme.breakpoints.up("md"));
  const { coins, setCoins } = useContext(CoinContext);
  const [unit, setUnit] = useState('Toman');
  const [status, setStatus] = useState(false);
  const [filtered, setFiltered] = useState([]);
  const [loading,setLoading]=useState(true)
  const handleGetData= async()=>{
   const data=await handlegetmodaldata()
   setLoading(false)
  setCoins(data.map((coin)=>({...coin,star:false})))
  }
  useEffect(()=>{

    handleGetData()
 
    },[])
  const handleStar = (id) => {
    setCoins(
      coins.map((coin) =>
        coin.uuid === id ? { ...coin, star: !coin.star } : coin
      )
    );
  };

  const handleStatus = () => {
    if (status) {
      setFiltered(coins.filter((coin) => coin.star === true));
    } else if(coins) {
      setFiltered(coins);
    }
  };

 
  useEffect(() => {
    handleStatus();
   
  }, [status, coins]);

  return (

    <Box >
       
        <TableLogic setSearch={setSearch} setUnit={setUnit} setStatus={setStatus} status={status} setFiltered={setFiltered} filtered={filtered}  unit={unit}/>
        {loading?
              <Grid display={'flex'} justifyContent={'center'}>
              <CircularProgress />
            </Grid>:
                    <Table stickyHeader aria-label="sticky table">
                    {isDesktop?
                     <TableHead >
                     <TableRow >
                       {columns.map((col,index) => (
                         <TableCell
                           sx={{
                             border: "none",
                             textAlign: "center",
                             backgroundColor: "secondary.main",
                           }}
                           key={index}
                         >
                           {col.label}
                         </TableCell>
                       ))}
                     </TableRow>
                    </TableHead>             
                         :null   } 
                      <TableBody>
                        {filtered
                          .filter((item) => item.name.toLowerCase().includes(search))
                          .map((coin) => (
                            (isDesktop?
                              (<TableDesktop coin={coin} key={coin.uuid} handleStar={handleStar} unit={unit}/>):
                              (<TableMobile coin={coin} key={coin.uuid} handleStar={handleStar} unit={unit}/>)
            
                            )
                          ))}
                      </TableBody>
                    </Table>
        }

     </Box>
  );
};

export default TablePrice;



// function createData(name, code, population, size) {
//    const density = population / size;
//   return { name, code, population, size, density };
// }

// const rows = [
//   createData('India', 'IN', 1324171354, 3287263),
//   createData('China', 'CN', 1403500365, 9596961),
//   createData('Italy', 'IT', 60483973, 301340),
//   createData('United States', 'US', 327167434, 9833520),
//   createData('Canada', 'CA', 37602103, 9984670),
//   createData('Australia', 'AU', 25475400, 7692024),
//   createData('Germany', 'DE', 83019200, 357578),
//   createData('Ireland', 'IE', 4857000, 70273),
//   createData('Mexico', 'MX', 126577691, 1972550),
//   createData('Japan', 'JP', 126317000, 377973),
//   createData('France', 'FR', 67022000, 640679),
//   createData('United Kingdom', 'GB', 67545757, 242495),
//   createData('Russia', 'RU', 146793744, 17098246),
//   createData('Nigeria', 'NG', 200962417, 923768),
//   createData('Brazil', 'BR', 210147125, 8515767),
// ];
