import { Button } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import React from 'react';
import Paper from '@mui/material/Paper';
function Note({title,content,id,delNote}) {
  function clickHandler(){
    delNote(id);
  }
  return (
    <Paper  elevation={2} 
    style={{
        minWidth:"200px",
        minHeight:"150px",
        padding:"10px",
        margin:"20px",
        display:"inline-flex"
    
    }}>
        <div>
        <h1>{title}</h1>
        <p>{content}</p>
        <Button onClick={clickHandler} style={{marginLeft:"120px"}}><DeleteIcon style={{color:"red"}}/></Button>
        </div>
        
        </Paper>
  )
}

export default Note;