import { Avatar, Button, TextField } from "@mui/material";
import Paper from "@mui/material/Paper";
import { Grid } from '@mui/material';
import React, { useEffect,useContext, useState } from "react"
import { Link, useNavigate} from "react-router-dom";
import { UserContext } from "../../context";

export const Login=()=>{
    const [Lemail, setLemail] = useState("");
    const [Lpass, setLpass] = useState("");
    const navigate=useNavigate();
    const pstyle={padding:30 ,height:'50vh', width:280,margin:'40px auto'}
    const{setUser}:any=useContext(UserContext)

      

    function handleLogin() {
        if(Lemail!=="" && Lpass!==""){
            fetch ("API Address", {
                method: "POST",
                body: JSON.stringify({
                  email: Lemail,
                  password:Lpass
               }),
               })
             .then((response) => response.json())
             .then((result) => {
                 if(result.message === "SUCCESS"){
                 alert("You are logged in.");
                 setUser(true);
                 
                } 
                else {
                    alert("Please check your login information.");
                }
               });
        
        }
        else{
            alert("Enter valid Email address and password")
        }
    }
    
    return(
        <Grid>
            <Paper elevation={10} style={pstyle}>
                <Grid>
                {/* <Avatar style={astyle}><LockOutlinedIcon/></Avatar> */}
                <h2 >Signin</h2>
                </Grid>
                <TextField onChange={(event) => {setLemail(event.target.value);}} label='Email' id='outlined-basic' fullWidth/><br/><br/>
                <TextField onChange={(event) => {setLpass(event.target.value);}} label='Password'  type='password'id='outlined-basic' fullWidth/><br/><br/>
                <Button onClick={() => {handleLogin()}} type='submit' fullWidth>Login</Button>
                New here?<Link to="/signup"> Signup</Link>
                
            </Paper>
        </Grid>
    )
}