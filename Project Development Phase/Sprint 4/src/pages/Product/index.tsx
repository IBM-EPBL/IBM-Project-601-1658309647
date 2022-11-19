import React, { useEffect, useState } from "react"
import { CustomGrid } from "../../components/DataGrid";
import Button from '@mui/material/Button';
import { useNavigate } from "react-router-dom";
import { Grid } from "@mui/material";


export const ProductPage = () => {
    const Navigate = useNavigate()
    const [data,setData]=useState("");

    useEffect(() => {
        getProduct()
      }, []);

    async function getProduct(){

        const response = await fetch("API adsress");
        
        
        var data = await response.json();
        
        console.log(data);
        setData(data)

        
        }


    const columnDefs = [
        { field: 'Sno' },
        { field: 'ProductName' },
        { field: 'ProductCode' },
        { field: 'Quantity' },
    ];

    const rowDef = [
        { Sno: "1", ProductName: "Celica", ProductCode: 35000, Quantity: 20 },
        { Sno: "2", ProductName: "Mondeo", ProductCode: 32000, Quantity: 20 },
        { Sno: "3", ProductName: "Boxster", ProductCode: 72000, Quantity: 20 }
    ]


    return (
        <>
            <Grid container spacing={2} style={{ marginLeft: "15px" }}>
                <Grid xs={10}>
                    <h2 style={{ fontSize: "20px", fontFamily: "sans-serif" }}>Products</h2>
                </Grid>
                <Grid xs={2}>
                    <Button variant="contained" style={{ marginTop: "10px" }} onClick={() => Navigate("/AddProductsPage")}>Add Product</Button>
                </Grid>
            </Grid>
            <CustomGrid columnDefs={columnDefs} rowData={data} />

        </>
    )
}