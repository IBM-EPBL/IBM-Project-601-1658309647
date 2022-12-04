import { Avatar, Button, TextField } from "@mui/material";
import Paper from "@mui/material/Paper";
import { Grid } from '@mui/material';
import React, { useContext, useState } from "react"
import { Link, useNavigate} from "react-router-dom";
import { UserContext } from "../../context";

export const Register=()=>{
    const [Remail, setRemail] = useState("");
    const [Rpass, setRpass] = useState("");
    const [Rname, setRname] = useState("");
    const navigate=useNavigate();
    const pstyle={padding:30 ,height:'50vh', width:280,margin:'40px auto'}
    const{setUser}:any=useContext(UserContext)

    function handleRegister() {
        if(Remail!=="" && Rpass!=="" && Rname!==""){
            // fetch ("API Address", {
            //     method: "POST",
            //     body: JSON.stringify({
            //       email: Remail,
            //       password:Rpass,
            //       name:Rname
            //    }),
            //    })
            //  .then((response) => response.json())
            //  .then((result) => {
            //      if(result.message === "SUCCESS"){
            //      alert("Registeration Successfull");
            //      setUser(true);
                 
            //     } 
            //     else {
            //         alert("Please check your login information.");
            //     }
            //    });
            setUser(true);
        
        }
        else{
            alert("Enter correct details")
        }
    }
    return(
        <Grid>
            <Paper elevation={10} style={pstyle}>
                <Grid>
                {/* <Avatar style={astyle}><LockOutlinedIcon/></Avatar> */}
                <h2 >Register</h2>
                </Grid>
                <TextField  onChange={(event) => {setRemail(event.target.value);}}  label='Email' id='outlined-basic' fullWidth/><br/><br/>
                <TextField  onChange={(event) => {setRpass(event.target.value);}}  label='Password'  type='password'id='outlined-basic' fullWidth/><br/><br/>
                <TextField  onChange={(event) => {setRname(event.target.value);}}  label='Username' id='outlined-basic' fullWidth/><br/><br/>
                <Button onClick={() => {handleRegister()}} type='submit' fullWidth>SignUp</Button>
                Already a user?<Link to="/Login"> Login</Link>
                
            </Paper>
        </Grid>
    )
}