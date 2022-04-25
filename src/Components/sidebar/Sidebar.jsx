import "./sidebar.css"
import {Assignment,AccountCircle,ThumbUpAlt,PlaylistAddCheck,Chat} from "@material-ui/icons";
import {useState, useEffect} from 'react';
import { useNavigate ,useLocation } from "react-router-dom";

export default function Sidebar() {
    const location = useLocation();
    const [flag, setFlag] = useState(true);


    let navigate = useNavigate();

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
                </ul>
            </div>
        </div>
    </div>
  )
}
