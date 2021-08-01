import React, {useState} from 'react';
import { InputBase, Paper } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import axios from 'axios';

const useStyle = makeStyles((theme) => ({
  task_input: {
    padding: theme.spacing(1, 1, 1, 2),
    margin: theme.spacing(1),
  },
}));


export default function TaskInput(props) {
  const [name, setName] = useState();
  const classes = useStyle();
  function handleKeyPress(target) {
    if(target.charCode==13){
      console.log("name", name);
     axios({
        method: "POST",
        url: "http://localhost:8080/api/tasks",
        data: {name: name},
        headers: {
          "Content-Type": "application/json"
        }
      }).then(res => {
        console.log(res.data.message);
      });
      props.setOpen(false)    
    } 
  }
  
  return (
    
      <Paper className={classes.task_input}>
        <InputBase multiline fullWidth placeholder="Enter title for the task" value ={name} onChange={(event) => setName(event.target.value)} onKeyPress={handleKeyPress}/>
      </Paper>
    
  )
}