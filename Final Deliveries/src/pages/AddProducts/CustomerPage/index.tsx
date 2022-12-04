import React, { useEffect, useState } from "react"
import { CustomGrid } from "../../../components/DataGrid";
import Button from '@mui/material/Button';
import { useNavigate } from "react-router-dom";
import { Grid } from "@mui/material";

export const CustomerTablePage = () => {
    const [data,setData]=useState("")

    const Navigate = useNavigate()

    useEffect(() => {
        getData()
      }, []);

    async function getData(){

            const response = await fetch("API adsress");
            
            
            var data = await response.json();
            
            console.log(data);
            setData(data)

            
            }


    const columnDefs = [
        { field: 'Sno' },
        { field: 'CustomerName' },
        { field: 'CustomerEmail' },
        { field: 'WarehouseName' },
        { field: 'Phone' },
        { field: 'Country' },
    ];

    const rowDef = [
        { Sno: "1", CustomerName: "Sudev", CustomerEmail: "sudev@gmail.com", WarehouseName: 'Ware', Phone: '9876543210', Country: 'India' },
        { Sno: "1", CustomerName: "Sudev", CustomerEmail: "sudev@gmail.com", WarehouseName: 'Ware', Phone: '9876543210', Country: 'India' },
        { Sno: "1", CustomerName: "Sudev", CustomerEmail: "sudev@gmail.com", WarehouseName: 'Ware', Phone: '9876543210', Country: 'India' },
        { Sno: "1", CustomerName: "Sudev", CustomerEmail: "sudev@gmail.com", WarehouseName: 'Ware', Phone: '9876543210', Country: 'India' },
        { Sno: "1", CustomerName: "Sudev", CustomerEmail: "sudev@gmail.com", WarehouseName: 'Ware', Phone: '9876543210', Country: 'India' }
    ]

    return (
        <>
            <Grid container spacing={2} style={{ marginLeft: "15px" }}>
                <Grid xs={10}>
                    <h2 style={{ fontSize: "20px", fontFamily: "sans-serif" }}>Customers</h2>
                </Grid>
                <Grid xs={2}>
                    <Button variant="contained" style={{ marginTop: "10px" }} onClick={() => Navigate("/CustomerPage")}>Add Customer</Button>
                </Grid>
            </Grid>

            <CustomGrid columnDefs={columnDefs} rowData={data} />
        </>
    )
}