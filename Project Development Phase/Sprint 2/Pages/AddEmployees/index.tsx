
import React from "react"
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { useFormik } from 'formik';
import * as Yup from 'yup';

export const AddEmployeesPage=()=>{
  const formik = useFormik({
    initialValues: {
        Name: '',
        Phone: '',
        Email: '',
        Address: '',
        District: '',
        State: '',
        Designation: '',
        Gender: '',
        Branch: '',
      
    },
    validationSchema: Yup.object({
      Name: Yup.string()
        .required('Required'),
        Phone: Yup.string()
        .required('Required'),
        Email: Yup.string().email('Invalid email address').required('Required'),
        Address: Yup.string()
        .required('Required'),
        District: Yup.string()
        .required('Required'),
        State: Yup.string()
        .required('Required'),
        Designation: Yup.string()
        .required('Required'),
        Gender: Yup.string()
        .required('Required'),
        Branch: Yup.string()
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
           Add Employees
           </h2>
           <form onSubmit={formik.handleSubmit}>
       <Grid item>
       <TextField id="outlined-basic" label="Name" variant="outlined" value={formik.values.Name}
         onChange={formik.handleChange}
         onBlur={formik.handleBlur}
         name="Name"
         error={formik.touched.Name && Boolean(formik.errors.Name)}
         helperText={formik.touched.Name && formik.errors.Name} />
       <TextField id="outlined-basic"  onBlur={formik.handleBlur} label="Phone" variant="outlined" style={{marginLeft:"20px"}} value={formik.values.Phone}
         onChange={formik.handleChange}
         name="Phone"
         error={formik.touched.Phone && Boolean(formik.errors.Phone)}
         helperText={formik.touched.Phone && formik.errors.Phone}/>
       <TextField id="outlined-basic" label="Email" variant="outlined" style={{marginLeft:"20px"}} value={formik.values.Email}
         onChange={formik.handleChange}
         onBlur={formik.handleBlur}
         name="Email"
         error={formik.touched.Email && Boolean(formik.errors.Email)}
         helperText={formik.touched.Email && formik.errors.Email}/>
       </Grid><br/>
       <Grid item >
       <TextField id="outlined-basic" label="Address" variant="outlined" value={formik.values.Address}
         onChange={formik.handleChange}
         onBlur={formik.handleBlur}
         name="Address"
         error={formik.touched.Address && Boolean(formik.errors.Address)}
         helperText={formik.touched.Address && formik.errors.Address}/>
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
       <TextField id="outlined-basic" label="Designation" variant="outlined" value={formik.values.Designation}
         onChange={formik.handleChange}
         onBlur={formik.handleBlur}
         name="Designation"
         error={formik.touched.Designation && Boolean(formik.errors.Designation)}
         helperText={formik.touched.Designation && formik.errors.Designation}/>
       <TextField id="outlined-basic" label="Gender" variant="outlined" style={{marginLeft:"20px"}} value={formik.values.Gender}
         onChange={formik.handleChange}
         onBlur={formik.handleBlur}
         name="Gender"
         error={formik.touched.Gender && Boolean(formik.errors.Gender)}
         helperText={formik.touched.Gender && formik.errors.Gender}/>
       <TextField id="outlined-basic" label="Branch" variant="outlined" style={{marginLeft:"20px"}} value={formik.values.Branch}
         onChange={formik.handleChange}
         onBlur={formik.handleBlur}
         name="Branch"
         error={formik.touched.Branch && Boolean(formik.errors.Branch)}
         helperText={formik.touched.Branch && formik.errors.Branch}/>
       </Grid><br/>
      
      <Button variant="contained" type="submit"  disabled={!(formik.isValid && formik.dirty)}>ADD</Button>
      </form>
       </Grid>
       </div>
    )
}