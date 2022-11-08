import ToggleButton from "@mui/material/ToggleButton";
import ToggleButtonGroup from "@mui/material/ToggleButtonGroup";
const ToggleTable = ({setUnit,unit}) => {
    const handleChangeButton = (e) => {
        setUnit(e.target.value);
      };
    return ( 
        <ToggleButtonGroup
        fullWidth={true}
        color="primary"
        value={unit}
        exclusive
        onChange={handleChangeButton}
        aria-label="Platform"
      >
        <ToggleButton
          value={"Toman"}
          sx={{ "&.MuiToggleButton-root": { border: "none" } }}
        >
          {" "}
          {"تومان"}
        </ToggleButton>
        <ToggleButton
          value={"Tether "}
          sx={{ "&.MuiToggleButton-root": { border: "none" } }}
        >
          {"تتر"}
        </ToggleButton>
      </ToggleButtonGroup>
     );
}
 
export default ToggleTable;