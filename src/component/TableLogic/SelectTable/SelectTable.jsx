import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import Typography from "@mui/material/Typography";
const SelectTable = ({statusPrice,setStatusPrice}) => {
    const handleChangeStatus = (e) => {
        setStatusPrice(e.target.value);
      };
    return ( 
    <FormControl fullWidth={true}>
        <InputLabel id="demo-simple-select-label">قیمت بر اساس</InputLabel>
        <Select
          p={0}
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={statusPrice}
          label="قیمت بر اساس"
          onChange={handleChangeStatus}
        >
          <MenuItem value={"ascending"}>
            <Typography>{"کمترین قیمت"}</Typography>
          </MenuItem>
          <MenuItem value={"descending"}>
            <Typography>{"بیشترین قیمت"}</Typography>
          </MenuItem>
        </Select>
      </FormControl>
     );
}
 
export default SelectTable;