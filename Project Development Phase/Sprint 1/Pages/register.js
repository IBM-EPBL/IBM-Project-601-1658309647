import { async } from '@firebase/util';
import { render } from '@testing-library/react';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import { Grid ,Paper,TextField,Avatar,Button} from '@mui/material';
import React, { Component,useState,useEffect} from 'react';




function Register(){
    const currentUser = useAuth();
    const [Remail, setRemail] = useState("");
    const [Rpass, setRpass] = useState("");

    
    const pstyle={padding:30 ,height:'50vh', width:280,margin:'40px auto'}
    const astyle={backgroundColor:'green'}
    

async function handleSignup() {
    try {
      
  } catch {
       alert("Error!");
    }   
}


  

    return(
        <Grid>
        <Paper elevation={10} style={pstyle}>
            <Grid align='center'>
            <Avatar style={astyle}><LockOutlinedIcon/></Avatar>
            <h2>Register</h2>
            </Grid>
            <TextField onChange={(event) => {setRemail(event.target.value);}} label='Email' id='outlined-basic' fullWidth/><br/><br/>
            <TextField onChange={(event) => {setRpass(event.target.value);}} label='Password'  type='password'id='outlined-basic' fullWidth/><br/><br/>
            <Button onClick={() => {handleSignup()}} type='submit' fullWidth>Register</Button>
        </Paper>
    </Grid>

);

}
export default Register;