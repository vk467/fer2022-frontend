import "./sidebar.css"
import {Assignment,AccountCircle,ThumbUpAlt,PlaylistAddCheck,Chat} from "@material-ui/icons";
import {useState, useEffect} from 'react';
import {TextField,Button} from "@material-ui/core";
import { useNavigate } from "react-router-dom";
import { getFirestore, doc, setDoc} from "firebase/firestore";
import { getDatabase, ref, child, update, get} from "firebase/database";
import { initializeApp } from 'firebase/app';

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

export default function Sidebar() {
    
    const app = initializeApp(config);
    const fs = getFirestore(app);
    const db = getDatabase(app);
    const [name,setname]= useState("");
    const [count,setCount] = useState("");
    const [flag, setFlag] = useState(true);


    
    useEffect(()=>{
        get(child(ref(db), 'fer/count')).then((snapshot) => {
            setCount(snapshot.val());
        });
    },[]);
    let navigate = useNavigate();

    const handleAdd = () => {
        setDoc(doc(fs, "Users", "P00"+count), {
            name: name,
            id:"P00"+count
          });

        setDoc(doc(fs, "Users", "P00"+count, "00:00:0000", "12:00 AM"), {
            emotion: "-",
            interest:"-",
            timestamp:"-"
          });        
        update(ref(db), {'/fer/count':count+1});
        setname("");
    };
    const routeChange=()=>{
        setFlag(false);
        navigate('/live');
    }
    const routeChange2=()=>{
        setFlag(true);
        navigate('/home');
    }

  return (
    <div className="sidebar" >
        <div className="sidebarWrapper">
            <div className="sidebarMenu">
                <h3 className="sidebarTitle">Dashboard</h3>
                <ul className="sidebarList">
                    <li className={"sidebarListItem"+(flag? " active" : "")} onClick={routeChange2}>
                        <Assignment className="sidebarIcons"/>
                        User data
                    </li>
                    <li className={"sidebarListItem"+(flag? "" : " active")} onClick={routeChange}>
                        <AccountCircle className="sidebarIcons"/>
                        Live
                    </li>
                    <li>
                    <TextField
                                    margin="dense"
                                    id="time"
                                    label="Enter name"
                                    type="text"
                                    fullWidth
                                    variant="outlined"
                                    value={name}
                                    style={{borderRadius:'60',
                                        backgroundColor: "white"
                                    }} 
                                    inputProps ={{form:{ autocomplete:'off'}}}
                                    onChange={(e)=>setname(e.target.value)}/>
                    </li>
                    <li>
                    <Button type="button" variant="contained"  onClick={(e)=>handleAdd()}>Add customer</Button>&nbsp;&nbsp;&nbsp;&nbsp;
                    </li>
                </ul>
            </div>
        </div>
    </div>
  )
}
