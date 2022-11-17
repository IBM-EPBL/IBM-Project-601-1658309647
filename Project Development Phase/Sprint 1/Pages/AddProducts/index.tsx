import React from "react"
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';



 

export const AddProductsPage=()=>{
  const formik = useFormik({
    initialValues: {
      Customer:"",
      ProductName: '',
      ProductCode: '',
      HSN: '',
      Specification: '',
      Price: '',
      ProductDescription: '',
      
    },
    validationSchema: Yup.object({
      Customer: Yup.string()
      .required('Required'),
      ProductName: Yup.string()
        .required('Required'),
        ProductCode: Yup.string()
        .required('Required'),
       
        HSN: Yup.string()
        .required('Required'),
        Specification: Yup.string()
        .required('Required'),
        Price: Yup.string()
        .required('Required'),
        ProductDescription: Yup.string()
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
            Add Products
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
     
          value={formik.values.Customer}
      onChange={formik.handleChange}
      onBlur={formik.handleBlur}
      name="Customer"
      error={formik.touched.Customer && Boolean(formik.errors.Customer)}
    
        >
          <MenuItem value={10}>Ten</MenuItem>
          <MenuItem value={20}>Twenty</MenuItem>
          <MenuItem value={30}>Thirty</MenuItem>
        </Select>
      </FormControl>
    </Box>
        <TextField id="outlined-basic" label="ProductName" variant="outlined" style={{marginLeft:"240px",marginTop:"-55px"}} value={formik.values.ProductName}
      onChange={formik.handleChange}
      onBlur={formik.handleBlur}
      name="ProductName"
      error={formik.touched.ProductName && Boolean(formik.errors.ProductName)}
      helperText={formik.touched.ProductName && formik.errors.ProductName}/>
        <TextField id="outlined-basic" label="ProductCode" variant="outlined" style={{marginLeft:"20px",marginTop:"-55px"}} value={formik.values.ProductCode}
      onChange={formik.handleChange}
      onBlur={formik.handleBlur}
      name="ProductCode"
      error={formik.touched.ProductCode && Boolean(formik.errors.ProductCode)}
      helperText={formik.touched.ProductCode && formik.errors.ProductCode}/>
        </Grid><br/>
        <Grid item >
        <TextField id="outlined-basic" label="HSN" variant="outlined" value={formik.values.HSN}
      onChange={formik.handleChange}
      onBlur={formik.handleBlur}
      name="HSN"
      error={formik.touched.HSN && Boolean(formik.errors.HSN)}
      helperText={formik.touched.HSN && formik.errors.HSN}/>
        <TextField id="outlined-basic" label="Specification" variant="outlined" style={{marginLeft:"20px"}} value={formik.values.Specification}
      onChange={formik.handleChange}
      onBlur={formik.handleBlur}
      name="Specification"
      error={formik.touched.Specification && Boolean(formik.errors.Specification)}
      helperText={formik.touched.Specification && formik.errors.Specification}/>
        <TextField id="outlined-basic" label="Price" variant="outlined" style={{marginLeft:"20px"}} value={formik.values.Price}
      onChange={formik.handleChange}
      onBlur={formik.handleBlur}
      name="Price"
      error={formik.touched.Price && Boolean(formik.errors.Price)}
      helperText={formik.touched.Price && formik.errors.Price}/>
        </Grid><br/>
        <Grid item >
        <TextField id="outlined-basic" label="ProductDescription" variant="outlined" sx={{width:710}} value={formik.values.ProductDescription}
      onChange={formik.handleChange}
      onBlur={formik.handleBlur}
      name="ProductDescription"
      error={formik.touched.ProductDescription && Boolean(formik.errors.ProductDescription)}
      helperText={formik.touched.ProductDescription && formik.errors.ProductDescription}/>
        </Grid><br/>
       
        
       <Button variant="contained" type="submit"  disabled={!(formik.isValid && formik.dirty)}>ADD</Button>
       </form>
        </Grid>
        </>
    )
}