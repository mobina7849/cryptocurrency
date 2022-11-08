import FormControlLabel from "@mui/material/FormControlLabel";
import Switch from "@mui/material/Switch";
import Grid from "@mui/material/Grid";
import Search from "../Search/Search";
import { useCallback } from "react";
import { useState } from "react";
import { useEffect } from "react";
import Container  from "@mui/material/Container";
import ToggleTable from "./ToggleTable/ToggleTable";
import SelectTable from "./SelectTable/SelectTable";
const TableLogic = ({
  setSearch,
  setUnit,
  setStatus,
  status,
  setFiltered,
  filtered,
  unit,
}) => {
  const [statusPrice,setStatusPrice]=useState('')
  const handlePrice = useCallback(() => {
    const coinData=[...filtered]
    if(statusPrice==='ascending'){  
           setFiltered(coinData.sort((a, b) => a.price - b.price));

    }else if(statusPrice==='descending'){
      setFiltered(coinData.sort((a, b) => b.price - a.price));

    }

  },[statusPrice]);
  useEffect(() => {
    handlePrice();
  }, [ statusPrice]);

  return (
    <Container>
      <Grid
        container
        display={"flex"}
        alignItems={"center"}
        justifyContent={"space-between"}
        marginBottom={2}
      >
        <Grid item xs={12} md={3} marginBottom={2}>
          <Search setSearch={setSearch} minWidth={200} />
        </Grid>
        <Grid
          item
          display={"flex"}
          xs={6}
          md={4}
          maxWidth={"100%"}
          width={200}
          borderRadius={1}
          border={"1px solid #ccc0c0"}
          p={0.6}
          marginBottom={2}
        >
        <ToggleTable setUnit={setUnit} unit={unit}/>
        </Grid>
        <Grid item sx={{ minWidth: "150px" }} xs={6} md={2} marginBottom={2}>
         <SelectTable statusPrice={statusPrice} setStatusPrice={setStatusPrice}/>
        </Grid>
        <Grid item xs={12} md={2} >
          <FormControlLabel
            control={<Switch onChange={() => setStatus(!status)} />}
            label="نشان شده ها"
            labelPlacement="end"
          />
        </Grid>
      </Grid>
    </Container>
  );
};

export default TableLogic;
