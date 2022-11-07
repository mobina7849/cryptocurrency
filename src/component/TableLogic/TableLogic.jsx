import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import FormControlLabel from '@mui/material/FormControlLabel';
import  Button  from '@mui/material/Button';
import  Switch  from '@mui/material/Switch';
import  Grid  from '@mui/material/Grid';
import Search from '../Search/Search';
import {useCallback} from "react"
const TableLogic = ({setSearch,setUnit,setStatus,status ,setFiltered,filtered}) => {
    // const [age, setAge] = useState('');

    // const handleChange = (event) => {
    //   setAge(event.target.value);
    // };
    // const numDescending = ;
    // console.log(numDescending);
  
    const handleDescendingPrice=useCallback(()=>{
      setFiltered(filtered.sort((a, b) => b.price - a.price))
    },[filtered])
    const handleAscendingPrice=useCallback(()=>{
      setFiltered(filtered.sort((a, b) => a.price - b.price ))
    },[filtered])
    console.log(filtered)
    return ( 
        <Grid display={'flex'} alignItems={"center"} justifyContent={'space-between'}  spacing={1} marginBottom={2} >
        <Grid item xs={12} md={3} >
          <Search setSearch={setSearch}  />
        </Grid>
        <Grid item border={1}  display={"flex"} xs={6} md={3}>
          <Button onClick={() => setUnit(true)} >
            {"تومان"}
          </Button>
          <Button onClick={() => setUnit(false)} >
            {"تتر"}
          </Button>
        </Grid>
        <Grid item sx={{minWidth:'140px'}} xs={5} md={2}>
          <FormControl fullWidth>
            <InputLabel id="demo-simple-select-label">قیمت بر اساس</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
             // value={age}
              label="قیمت بر اساس"
              //onChange={handleChange}
            >
              <MenuItem onClick={handleDescendingPrice} >کمترین قیمت</MenuItem>
              <MenuItem onClick={handleAscendingPrice} >بیشترین قیمت</MenuItem>
            </Select>
          </FormControl>
        </Grid>
        <Grid item xs={12} md={2}>
        <FormControlLabel
       // value="top"
        control={<Switch  onChange={() => setStatus(!status)}/>}
        label="نشان شده ها"
        labelPlacement="Left"
      />
          {/* <Button onClick={() => setStatus(!status)}>
            {status ? "همه" : "نشان شده ها"}
          </Button> */}
        </Grid>

      </Grid>
     );
}
 
export default TableLogic;