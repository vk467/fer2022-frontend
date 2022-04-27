import React,{useEffect, useState} from 'react'
import "./topbar.css"
import CloseIcon from "@material-ui/icons/Close";
import IconButton from "@material-ui/core/IconButton";
import { useNavigate } from "react-router-dom";
import {Button} from '@material-ui/core'
import {Dialog, DialogActions, DialogContent, DialogTitle,
    TextField,  Select, Input,Menu,InputLabel, MenuItem, Popper, Box, ListItem, List,Snackbar , FormControl} from '@material-ui/core';
import { initializeApp } from 'firebase/app';
import { getFirestore, doc, updateDoc } from "firebase/firestore";
    const config = {
        apiKey: "AIzaSyBkfNs0nfXEjdjeqHPjyYEcmPqxucTFytQ",
        authDomain: "emotion-rekognition.firebaseapp.com",
        projectId: "emotion-rekognition",
        storageBucket: "emotion-rekognition.appspot.com",
        messagingSenderId: "722403146243",
        appId: "1:722403146243:web:d6999bae4dc45ba1cc6c36",
        measurementId: "G-8RHZPSRJEG",
        databaseURL: "https://emotion-rekognition-default-rtdb.asia-southeast1.firebasedatabase.app"
      };


export default function Topbar(){

    const app = initializeApp(config);
    const db = getFirestore(app);

    let navigate = useNavigate();


    const [open, setOpen] = useState(false);
    const [message,setMessage]= useState("");
    const [time,setTime]= useState(5);

    const handleSet = () => {
        const ref = doc(db, "fer", "config");
        updateDoc(ref, {
            predefined_time: time
          });
        setMessage("Time set.");
        setOpen(true);
    };
    const handleToClose = () => {
      setOpen(false);
    };

    const handleStart = () => {
        const ref = doc(db, "fer", "config");
        updateDoc(ref, {
            start: true
          });
        setMessage("FER system Started.");
        setOpen(true);
      };

    const handleStop = () => {
        const ref = doc(db, "fer", "config");
        updateDoc(ref, {
            start: false
          });
        
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