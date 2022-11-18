import React,{useState} from "react"
import { Grid } from "@mui/material"
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import Button from '@mui/material/Button';
export const AddSalesPage=()=>{
const[inputFeilds,SetInputFeilds]=useState([{Product:"",Categories:"",Qty:"",Price:"",GST:""}])

 const addNewRow=()=>{
  let values=[...inputFeilds]
  values.push({Product:"",Categories:"",Qty:"",Price:"",GST:""})
  SetInputFeilds(values)
  
 }
 const removeNewRow=(index:any)=>{
  let values=[...inputFeilds]
 values.splice(index,1)
  SetInputFeilds(values)
  
 }
 const handleFormChange=(index:number,event:any)=>{
  let data:any =[...inputFeilds]
  data[index][event.target.name]=event.target.value
  SetInputFeilds(data)
  
 }
 const handleSubmit=(e:any)=>{
  e.preventDefault();
  console.log("collectDatas",inputFeilds)
 }
 
    return(
        <>
       <Grid style={{marginLeft:"100px"}}>
         <h2 style={{fontFamily:"sans-serif"}}>
            Add Sales
            </h2>
         
        <Grid item>
          <form onSubmit={handleSubmit}>
        {inputFeilds.map((inputValues:any,index:number)=>(
          <>
       
   
    <TextField id="outlined-basic" name="Product" label="Product" onChange={event=>handleFormChange(index,event)}  value={inputValues.Product} variant="outlined" style={{width:"400px"}}/>
    <br/><br />
    <TextField id="outlined-basic" name="Categories" label="Categories" onChange={event=>handleFormChange(index,event)} value={inputValues.Categories} variant="outlined" style={{width:"400px"}}/>
    <br/><br />
    <TextField id="outlined-basic" name="Qty" label="Qty" onChange={event=>handleFormChange(index,event)} value={inputValues.Qty} variant="outlined" style={{width:"400px"}}/>
    <br/><br />
    <TextField id="outlined-basic" name="Price" label="Price" onChange={event=>handleFormChange(index,event)} value={inputValues.Price} variant="outlined" style={{width:"400px"}}/>
    <br/><br />
    <TextField id="outlined-basic" name="GST" label="GST" onChange={event=>handleFormChange(index,event)} value={inputValues.GST} variant="outlined" style={{width:"400px"}}/>
    <br /><br />
    {index ?
    <Button variant="contained" style={{marginLeft:"420px",marginTop:"-100px"}} onClick={()=> removeNewRow(index)} >Remove</Button>
    :null}
    </>
    ))}
    <div style={{display:"flex"}}>
    <Button variant="contained" type="submit" onClick={handleSubmit} >Sale</Button>
    <Button variant="contained"  style={{marginLeft:"10px"}} onClick={addNewRow}>ADD</Button>
    </div>
    </form>
      </Grid>
        </Grid>
        </>
    )
}