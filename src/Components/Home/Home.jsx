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


function createData(name, calories, fat, carbs, protein) {
    return { name, calories, fat, carbs, protein };
  }
 
  const rows = [
    createData('Frozen yoghurt', 159, 6.0, 24, 4.0),
    createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
    createData('Eclair', 262, 16.0, 24, 6.0),
    createData('Cupcake', 305, 3.7, 67, 4.3),
    createData('Gingerbread', 356, 16.0, 49, 3.9),
  ];

  
const Home=()=>{
  const [patients,setPatients]=useState([]);
    const paperStyle={padding :20,height:'65vh',width:800,margin:"24px auto"};
    useEffect(()=>{
      const fetchPatients = async () =>{
      const res=await fetch('http://localhost:8080/patient/getPatientDetails');
      const getdata=await res.json();
      console.log(getdata);
      setPatients(getdata);
      }
      fetchPatients();
     
    
      },[])
      const [data,setData]=useState([]);

      useEffect(()=>{
        const fetchData = async () =>{
        const res=await fetch('http://localhost:8080/realtimedata/getRealtimedataDetails');
        const getdata=await res.json();
        console.log(getdata[0][getdata[0].length-1]);
        setData(getdata);
        }
        fetchData();
        },[])
    return(
        <Paper style={paperStyle}>
           <TableContainer >
      <Table sx={{ minWidth: 500 }} aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell>Patient ID</StyledTableCell>
            <StyledTableCell align="right">Name</StyledTableCell>
            <StyledTableCell align="right">Date and Time</StyledTableCell>
            <StyledTableCell align="right">Emotion</StyledTableCell>
            <StyledTableCell align="right">Pulse</StyledTableCell>

          </TableRow>
        </TableHead>
        <TableBody>
          {patients.map((patient) => (
            <StyledTableRow key={patient.patientid} onClick={(e)=>console.log(data[parseInt(patient.patientid.substring(1,4))-1].length)}>
              <StyledTableCell component="th" scope="patient">{patient.patientid}</StyledTableCell>
              <StyledTableCell align="left">{patient.name}</StyledTableCell>
              <StyledTableCell align="right">{data[parseInt(patient.patientid.substring(1,4))-1][data[parseInt(patient.patientid.substring(1,4))-1].length-1].timestamp}</StyledTableCell>
              <StyledTableCell align="right">{data[parseInt(patient.patientid.substring(1,4))-1][data[parseInt(patient.patientid.substring(1,4))-1].length-1].emotion}</StyledTableCell>
              <StyledTableCell align="right">{data[parseInt(patient.patientid.substring(1,4))-1][data[parseInt(patient.patientid.substring(1,4))-1].length-1].pulse}</StyledTableCell>
            </StyledTableRow>
          ))}

        </TableBody>
      </Table>
    </TableContainer>
    </Paper>      
    );

}
export default Home;