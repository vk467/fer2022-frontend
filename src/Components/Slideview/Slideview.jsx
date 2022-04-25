import React from "react";
import { Paper } from '@mui/material';
import { useLocation } from "react-router-dom";
import Grid from '@mui/material/Grid';
import {useEffect, useState} from 'react'
import { initializeApp } from 'firebase/app';
import { getDatabase, ref, onValue} from "firebase/database";
import "../main.css"

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

    useEffect(()=>{
        const Ref = ref(db, 'frames');
        onValue(Ref, (snapshot) => {
        const value = Object.values(snapshot.val());
        console.log(Object.values(value));

        setData("data:image/jpeg;base64,"+value[value.length-1]);
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
        <h4 style={{ color: 'black' }}>Sadness</h4>
        </Grid>
         <img src={data} alt="Loading..." />
    </Paper>
    </div>   
);
}

export default Slideview;
