import React from "react"
import Button from '@mui/material/Button';
import { CustomGrid } from "../../components/DataGrid";
import { useNavigate } from "react-router-dom";
import { Grid } from "@mui/material";

export const EmployeesPage=()=>{
    const Navigate = useNavigate()
    return(
        <>
    <Grid container spacing={2} style={{marginLeft:"15px"}}>
  <Grid  xs={10}>
  <h2 style={{fontSize:"20px",fontFamily:"sans-serif"}}>Employees</h2>
  </Grid>
  <Grid  xs={2}>
  <Button variant="contained" style={{marginTop:"10px"}} onClick={()=>Navigate("/AddEmployeesPage")}>Add Employees</Button> 
  </Grid>
  </Grid>
        
<CustomGrid />

        </>
    )
}