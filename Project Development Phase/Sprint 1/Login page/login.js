import { Grid ,Paper,TextField,Avatar,Button} from '@mui/material';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import React, { Component,useState ,useEffect} from 'react';
import { Link, useNavigate} from "react-router-dom";



function Login(){
    const [Lemail, setLemail] = useState("");
    const [Lpass, setLpass] = useState("");

   

    async function handleLogin() {
        if(Lemail==='admin@gmail.com' && Lpass==='123456'){
            navigate('/admin')
        }else{
        try {
          
         
      } catch {
           alert("Error!");
        }   
    }
    }


  
    

   

    const pstyle={padding:30 ,height:'50vh', width:280,margin:'40px auto'}
    const astyle={backgroundColor:'green'}

    
    
    return(
        <Grid>
            <Paper elevation={10} style={pstyle}>
                <Grid align='center'>
                <Avatar style={astyle}><LockOutlinedIcon/></Avatar>
                <h2>Signin</h2>
                </Grid>
                <TextField onChange={(event) => {setLemail(event.target.value);}} label='Email' id='outlined-basic' fullWidth/><br/><br/>
                <TextField onChange={(event) => {setLpass(event.target.value);}} label='Password'  type='password'id='outlined-basic' fullWidth/><br/><br/>
                <Button onClick={() => {handleLogin()}} type='submit' fullWidth>Login</Button>
                New here?<Link to="/signup"> Signup</Link>
                
            </Paper>
        </Grid>

    );
}
export default Login;;