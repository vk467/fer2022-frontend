import React from "react";
import { Paper } from '@mui/material';
import { useLocation } from "react-router-dom";
import Grid from '@mui/material/Grid';
import {useEffect, useState} from 'react'
import { initializeApp } from 'firebase/app';
import { getDatabase, ref, onValue} from "firebase/database";
import "../main.css"

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

const Slideview = () => {
    const app = initializeApp(config);
    const db = getDatabase(app);

    const paperStyle={textAlign: "center",fontSize: "30px", padding :20,height:'95vh',width:720,margin:"24px auto"};
    const style = {
        textAlign: "center",
        background: "teal",
        padding: "10px 0",
        fontSize: "30px"
      }
      const [data,setData]=useState("");
      const [label,setLabel]=useState("");

    useEffect(()=>{
        const Ref = ref(db, 'frames');
        onValue(Ref, (snapshot) => {
        const value = Object.values(snapshot.val());
        console.log(Object.values(value));
        setData("data:image/jpeg;base64,"+value[value.length-1]);
        });

        const Ref2 = ref(db, 'emotion');
        onValue(Ref2, (snapshot) => {
        const labels = Object.values(snapshot.val());
        console.log(Object.values(labels));
        setLabel(labels[labels.length-1]);
        });
    },[]);
    

return (
    <div className='displayed' style={{      
        backgroundImage: "url(" + "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRFZ4au4oWq2d-nq2_8jZSOQ8b1KGX-zJLtFg&usqp=CAU" + ")",
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        height: '720px'
         }} >
        <Grid align='center'>
        <h2 style={{ color: 'white' }}>Live</h2>
        </Grid>
	<Paper style={paperStyle}>
    <Grid align='center'>
        <h4 style={{ color: 'black' }}>{label}</h4>
        </Grid>
         <img src={data} alt="Loading..." />
    </Paper>
    </div>   
);
}

export default Slideview;
