import React from "react"
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { useFormik } from 'formik';
import * as Yup from 'yup';

  

export const CustomerPage=()=>{
    const formik = useFormik({
        initialValues: {
            CustomerName: '',
            WarehouseCode: '',
            Email: '',
            WarehouseName: '',
            Phone: '',
            SecondryNo: '',
            WarehouseAddress: '',
            District: '',
            State: '',
            Country: '',
            Pincode: '',
            WarehouseIncharge: '',
        },
        validationSchema: Yup.object({
            CustomerName: Yup.string()
            .required('Required'),
            WarehouseCode: Yup.string()
            .required('Required'),
            Email: Yup.string().email('Invalid email address').required('Required'),
            WarehouseName: Yup.string()
            .required('Required'),
            Phone: Yup.string()
            .required('Required'),
            SecondryNo: Yup.string()
            .required('Required'),
            WarehouseAddress: Yup.string()
            .required('Required'),
            District: Yup.string()
            .required('Required'),
            State: Yup.string()
            .required('Required'),
            Country: Yup.string()
            .required('Required'),
            Pincode: Yup.string()
            .required('Required'),
            WarehouseIncharge: Yup.string()
            .required('Required'),

        }),
        onSubmit: values => {
          console.log(JSON.stringify(values, null, 2));
        },
      });
  
    return(
        <div>
       <Grid style={{marginLeft:"100px",marginTop:"100px"}}>
         <h2 style={{fontFamily:"sans-serif"}}>
            Add Customer
            </h2>
            <form onSubmit={formik.handleSubmit}>
        <Grid item>
        <TextField id="outlined-basic" label="CustomerName" variant="outlined" value={formik.values.CustomerName}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          name="CustomerName"
          error={formik.touched.CustomerName && Boolean(formik.errors.CustomerName)}
          helperText={formik.touched.CustomerName && formik.errors.CustomerName} />
        <TextField id="outlined-basic"  onBlur={formik.handleBlur} label="WarehouseCode" variant="outlined" style={{marginLeft:"20px"}} value={formik.values.WarehouseCode}
          onChange={formik.handleChange}
          name="WarehouseCode"
          error={formik.touched.WarehouseCode && Boolean(formik.errors.WarehouseCode)}
          helperText={formik.touched.WarehouseCode && formik.errors.WarehouseCode}/>
        <TextField id="outlined-basic" label="WarehouseName" variant="outlined" style={{marginLeft:"20px"}} value={formik.values.WarehouseName}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          name="WarehouseName"
          error={formik.touched.WarehouseName && Boolean(formik.errors.WarehouseName)}
          helperText={formik.touched.WarehouseName && formik.errors.WarehouseName}/>
        </Grid><br/>
        <Grid item >
        <TextField id="outlined-basic" label="Phone" variant="outlined" value={formik.values.Phone}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          name="Phone"
          error={formik.touched.Phone && Boolean(formik.errors.Phone)}
          helperText={formik.touched.Phone && formik.errors.Phone}/>
        <TextField id="outlined-basic" label="SecondryNo" variant="outlined" style={{marginLeft:"20px"}} value={formik.values.SecondryNo}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          name="SecondryNo"
          error={formik.touched.SecondryNo && Boolean(formik.errors.SecondryNo)}
          helperText={formik.touched.SecondryNo && formik.errors.SecondryNo}/>
        <TextField id="outlined-basic" label="Email" variant="outlined" style={{marginLeft:"20px"}} value={formik.values.Email}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          name="Email"
          error={formik.touched.Email && Boolean(formik.errors.Email)}
          helperText={formik.touched.Email && formik.errors.Email}/>
        </Grid><br/>
        <Grid item >
        <TextField id="outlined-basic" label="WarehouseAddress" variant="outlined" value={formik.values.WarehouseAddress}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          name="WarehouseAddress"
          error={formik.touched.WarehouseAddress && Boolean(formik.errors.WarehouseAddress)}
          helperText={formik.touched.WarehouseAddress && formik.errors.WarehouseAddress}/>
        <TextField id="outlined-basic" label="District" variant="outlined" style={{marginLeft:"20px"}} value={formik.values.District}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          name="District"
          error={formik.touched.District && Boolean(formik.errors.District)}
          helperText={formik.touched.District && formik.errors.District}/>
        <TextField id="outlined-basic" label="State" variant="outlined" style={{marginLeft:"20px"}} value={formik.values.State}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          name="State"
          error={formik.touched.State && Boolean(formik.errors.State)}
          helperText={formik.touched.State && formik.errors.State}/>
        </Grid><br/>
        <Grid item >
        <TextField id="outlined-basic" label="Country" variant="outlined" value={formik.values.Country}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          name="Country"
          error={formik.touched.Country && Boolean(formik.errors.Country)}
          helperText={formik.touched.Country && formik.errors.Country}/>
        <TextField id="outlined-basic" label="Pincode" variant="outlined" style={{marginLeft:"20px"}}value={formik.values.Pincode}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          name="Pincode"
          error={formik.touched.Pincode && Boolean(formik.errors.Pincode)}
          helperText={formik.touched.Pincode && formik.errors.Pincode}/>
        <TextField id="outlined-basic" label="WarehouseIncharge" variant="outlined" style={{marginLeft:"20px"}} value={formik.values.WarehouseIncharge}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          name="WarehouseIncharge"
          error={formik.touched.WarehouseIncharge && Boolean(formik.errors.WarehouseIncharge)}
          helperText={formik.touched.WarehouseIncharge && formik.errors.WarehouseIncharge}/>
        </Grid><br />
       <Button variant="contained" type="submit" disabled={!(formik.isValid && formik.dirty)}>ADD</Button>
       </form>
        </Grid>
        </div>
    )
}