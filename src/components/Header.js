import React from 'react';
import Paper from '@mui/material/Paper';

function Header() {
   
  return (
    <Paper elevation={5} style={{padding:"5px"}}>
       <img style={{width:"100px",alignContent:"left"}} src="https://www.google.com/images/icons/product/keep-512.png"></img>
        <h1 style={{
    position:"absolute",
    width:"100%",
    top:"0",
    textAlign:"center",
    fontSize:"25px"

}}> Notes</h1>
        </Paper>
  )
}

export default Header;