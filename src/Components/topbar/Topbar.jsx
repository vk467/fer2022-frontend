import React,{useState} from 'react'
import "./topbar.css"
import CloseIcon from "@material-ui/icons/Close";
import IconButton from "@material-ui/core/IconButton";
import { useNavigate } from "react-router-dom";
import {Button} from '@material-ui/core'
import {TextField,Snackbar } from '@material-ui/core';
import { initializeApp } from 'firebase/app';
import { getDatabase, ref, update} from "firebase/database";


    const config = {
      apiKey: "AIzaSyCZ4viOKxkW7tJsKovWapLKx1ELNOkq9GU",
      authDomain: "fer-rekognition.firebaseapp.com",
      databaseURL: "https://fer-rekognition-default-rtdb.asia-southeast1.firebasedatabase.app",
      projectId: "fer-rekognition",
      storageBucket: "fer-rekognition.appspot.com",
      messagingSenderId: "50001175357",
      appId: "1:50001175357:web:c317060a05e3c6e0759b54",
      measurementId: "G-TVMH2FE8S5"
    };


export default function Topbar(){

    const app = initializeApp(config);
    const db = getDatabase(app);

    let navigate = useNavigate();


    const [open, setOpen] = useState(false);
    const [message,setMessage]= useState("");
    const [time,setTime]= useState("");

    const handleSet = () => {
        update(ref(db), {'/fer/predefined_time':time});
        setTime("");
        setMessage("Time set.");
        setOpen(true);
    };
    const handleToClose = () => {
      setOpen(false);
    };

    const handleStart = () => {
        update(ref(db), {'/fer/start':true});
        setMessage("FER system Started.");
        setOpen(true);
      };

    const handleStop = () => {
        update(ref(db), {'/fer/start':false});
        setMessage("FER system Stopped.");
        setOpen(true);
    };

    const RouteChange=()=>{
      navigate('/login')
  }

   
    return (
        <div className="topbar">
            <div className="topbarWrapper">
                <div className="topRight">
                <TextField
                                    margin="dense"
                                    id="time"
                                    label="Schedule(in mins)"
                                    value={time}
                                    type="text"
                                    fullWidth
                                    variant="outlined"
                                    style={{borderRadius:'60',
                    backgroundColor: "white"
                }}
                                    onChange={(e)=>setTime(parseInt(e.target.value))}
                                  />&nbsp;&nbsp;&nbsp;&nbsp;
                    <Button type="button" variant="contained"  onClick={(e)=>handleSet()}>Set_Time</Button>&nbsp;&nbsp;&nbsp;&nbsp;
                    <Button type="button" variant="contained"  onClick={(e)=>handleStart()}>Start</Button>&nbsp;&nbsp;&nbsp;&nbsp;
                    <Button type="button" variant="contained"  onClick={(e)=>handleStop()}>Stop</Button>&nbsp;&nbsp;&nbsp;&nbsp;
                            <Snackbar
                              anchorOrigin={{
                              horizontal: "centre",
                              vertical: "centre",
                              }}
                              open={open}
                              autoHideDuration={1000}
                              message={message}
                              onClose={handleToClose}
                              action={
                                  <React.Fragment>
                                      <IconButton
                                          size="medium"
                                          aria-label="close"
                                          color="inherit"
                                          onClick={handleToClose}
                                      ><CloseIcon fontSize="small" />
                                      </IconButton>
                                  </React.Fragment>
                              }
                              />
                    <Button type="button" variant="contained" onClick={RouteChange}>Logout</Button >
                </div>
            </div>
        </div>
    )
}