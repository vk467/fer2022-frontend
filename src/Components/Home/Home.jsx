import React from 'react';
import {useEffect, useState} from 'react'
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import { Paper } from '@mui/material';
import Box from '@mui/material/Box';
import { styled } from '@mui/material/styles';
import  { tableCellClasses } from '@mui/material/TableCell';
import {useNavigate} from 'react-router-dom';
import Grid from '@mui/material/Grid';
import "../main.css"

const StyledTableCell = styled(TableCell)(({ theme }) => ({
    [`&.${tableCellClasses.head}`]: {
      backgroundColor: theme.palette.common.black,
      color: theme.palette.common.white,
    },
    [`&.${tableCellClasses.body}`]: {
      fontSize: 14,
    },
  }));
  const StyledTableRow = styled(TableRow)(({ theme }) => ({
  '&:nth-of-type(odd)': {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  '&:last-child td, &:last-child th': {
    border: 0,
  },
}));



  
const Home=()=>{
  const [users,setusers]=useState([]);
  const [data,setData]=useState([])
  ;
    const paperStyle={padding :20,height:'65vh',width:800,margin:"24px auto"};
    let navigate = useNavigate();

    const RoutetoGraph=(data)=>
    {
      console.log(data);
      navigate('/graph',{state:{data:data}})
    }
    useEffect(()=>{
      const fetchusers = async () =>{
      const res=await fetch('https://nupvh5pgxj.execute-api.ap-south-1.amazonaws.com/patient/getuserDetails');
      const getdata=await res.json();
      console.log(getdata);
      setusers(getdata);
      }
      fetchusers();
     
    
      },[])
     

      useEffect(()=>{
        const fetchData = async () =>{
        const res=await fetch('https://nupvh5pgxj.execute-api.ap-south-1.amazonaws.com/realtimedata/getRealtimedataDetails');
        const getdata=await res.json();
        window.localStorage.setItem('data',JSON.stringify(getdata));
        // console.log(data[0]);
        // setData(getdata);
        }
        fetchData();
        },[])
        useEffect(()=>{

          setData(JSON.parse(window.localStorage.getItem('data')));
          console.log(data);
         
      }
  ,[]);
    return(
      <div  className="displayed" style={{
       
        backgroundImage: "url(" + "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRFZ4au4oWq2d-nq2_8jZSOQ8b1KGX-zJLtFg&usqp=CAU" + ")",
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        height: '720px'
         }} >
         
           <Grid align='center'>
        <h2 style={{ color: 'white' }}>Facial Expression Report</h2>
        </Grid>
      
        <Paper style={paperStyle}>
           <TableContainer >
      <Table sx={{ minWidth: 500 }} aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell>User ID</StyledTableCell>
            <StyledTableCell align="right">Name</StyledTableCell>
            <StyledTableCell align="right">Date and Time</StyledTableCell>
            <StyledTableCell align="right">Emotion</StyledTableCell>
            <StyledTableCell align="right">Interest</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {users.map((user) => (
            <StyledTableRow key={user.id} onClick={(e)=>RoutetoGraph(data[parseInt(user.id.substring(1,4))-1][data[parseInt(user.id.substring(1,4))-1].length-1])}>
              <StyledTableCell component="th" scope="user">{user.id}</StyledTableCell>
              <StyledTableCell align="left">{user.name}</StyledTableCell>
              <StyledTableCell align="right">{data[parseInt(user.id.substring(1,4))-1][data[parseInt(user.id.substring(1,4))-1].length-1].timestamp}</StyledTableCell>
              <StyledTableCell align="right">{data[parseInt(user.id.substring(1,4))-1][data[parseInt(user.id.substring(1,4))-1].length-1].emotion}</StyledTableCell>
              <StyledTableCell align="right">{data[parseInt(user.id.substring(1,4))-1][data[parseInt(user.id.substring(1,4))-1].length-1].interest}</StyledTableCell>
            </StyledTableRow>
          ))}

        </TableBody>
      </Table>
    </TableContainer>
    
    </Paper>   
    <Grid align='center'>
        <h2 style={{ color: 'white' }}></h2>
    </Grid>
    
         
      </div>
        
    );

}
export default Home;