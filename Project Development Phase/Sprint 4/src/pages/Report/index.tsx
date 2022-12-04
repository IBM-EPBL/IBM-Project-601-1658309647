import React from "react"
import Grid from '@mui/material/Grid';
import { CustomGrid } from "../../components/DataGrid";
import { LineBarChart } from "../../components/LineBarChart";
import { Paper } from "@mui/material";

export const ReportPage=()=>{
    return(
        <>
    
         <h2 style={{fontFamily:"sans-serif"}}>
            Reports
            </h2>
            <Paper elevation={3} >
<LineBarChart />
</Paper>
<Grid style={{marginTop:"50px"}}>
        <CustomGrid />
        </Grid>
        </>
    )
}