import React,{useState} from "react"
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import { useFormik } from 'formik';
import * as Yup from 'yup';

export const AddStockPage=()=>{
  

    const[multipleInput,setMultipleInput]=useState([])
   
    const formik = useFormik({
      initialValues: {
        Product:"",
        Size: '',
        Category: '',
        HSN: '',
        Price: '',
        Qty: '',
 
        
      },
      validationSchema: Yup.object({
        Product: Yup.string()
        .required('Required'),
        Size: Yup.string()
          .required('Required'),
          Category: Yup.string()
          .required('Required'),
         
          HSN: Yup.string()
          .required('Required'),
          Price: Yup.string()
          .required('Required'),
          Qty: Yup.string()
          .required('Required'),
        
       
  
      }),
      onSubmit: values => {
        console.log(JSON.stringify(values, null, 2));
      },
    });
    return(
        <>
       <Grid style={{marginLeft:"100px",marginTop:"100px"}}>
         <h2 style={{fontFamily:"sans-serif"}}>
            Add Stock
            </h2>
            <form onSubmit={formik.handleSubmit}>
        <Grid item>
        <Box>
      <FormControl style={{width:"220px"}}>
        <InputLabel id="demo-simple-select-label">Product</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
     
          label="Customer"
     
          value={formik.values.Product}
      onChange={formik.handleChange}
      onBlur={formik.handleBlur}
      name="Product"
      error={formik.touched.Product && Boolean(formik.errors.Product)}
    
        >
          <MenuItem value={10}>Ten</MenuItem>
          <MenuItem value={20}>Twenty</MenuItem>
          <MenuItem value={30}>Thirty</MenuItem>
        </Select>
      </FormControl>
    </Box>
        <TextField id="outlined-basic" label="Size" variant="outlined" style={{marginLeft:"240px",marginTop:"-55px"}} value={formik.values.Size}
      onChange={formik.handleChange}
      onBlur={formik.handleBlur}
      name="Size"
      error={formik.touched.Size && Boolean(formik.errors.Size)}
      helperText={formik.touched.Size && formik.errors.Size}/>
        <TextField id="outlined-basic" label="Category" variant="outlined" style={{marginLeft:"20px",marginTop:"-55px"}} value={formik.values.Category}
      onChange={formik.handleChange}
      onBlur={formik.handleBlur}
      name="Category"
      error={formik.touched.Category && Boolean(formik.errors.Category)}
      helperText={formik.touched.Category && formik.errors.Category}/>
        </Grid><br/>
        <Grid item >
        <TextField id="outlined-basic" label="HSN" variant="outlined" value={formik.values.HSN}
      onChange={formik.handleChange}
      onBlur={formik.handleBlur}
      name="HSN"
      error={formik.touched.HSN && Boolean(formik.errors.HSN)}
      helperText={formik.touched.HSN && formik.errors.HSN}/>
        <TextField id="outlined-basic" label="Price" variant="outlined" style={{marginLeft:"20px"}} value={formik.values.Price}
      onChange={formik.handleChange}
      onBlur={formik.handleBlur}
      name="Price"
      error={formik.touched.Price && Boolean(formik.errors.Price)}
      helperText={formik.touched.Price && formik.errors.Price}/>
        <TextField id="outlined-basic" label="Price" variant="outlined" style={{marginLeft:"20px"}} value={formik.values.Qty}
      onChange={formik.handleChange}
      onBlur={formik.handleBlur}
      name="Qty"
      error={formik.touched.Qty && Boolean(formik.errors.Qty)}
      helperText={formik.touched.Qty && formik.errors.Qty}/>
        </Grid><br/>
      
       
        
       <Button variant="contained" type="submit"  disabled={!(formik.isValid && formik.dirty)}>ADD</Button>
       </form>
        </Grid>
        </>
    )
}