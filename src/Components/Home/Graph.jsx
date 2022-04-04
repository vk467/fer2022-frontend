import React from "react";
import { Paper } from '@mui/material';
import {
    Chart, Series, CommonSeriesSettings, Legend, ValueAxis, Title, Export, Tooltip, Border,
  } from 'devextreme-react/chart';
import { useLocation } from "react-router-dom";
import Grid from '@mui/material/Grid';

const Graph = () => {
    const paperStyle={padding :40,height:'80vh',width:600,margin:"24px auto"};
    let location=useLocation();
// Sample data
const data2 = [
{ argument: 'Anger', value: location.state.data.anger },
{ argument: 'Fear', value: location.state.data.fear },
{ argument: 'Disgust', value: location.state.data.disgust },
{ argument: 'Happiness', value: location.state.data.happiness },
{ argument: 'Sadness', value: location.state.data.sadness },
{ argument: 'Surprise', value: location.state.data.surprise },
];


return (
    <div style={{
       
        backgroundImage: "url(" + "https://media.istockphoto.com/vectors/abstract-financial-chart-with-line-graph-and-bar-chart-on-blue-color-vector-id951426272?k=20&m=951426272&s=612x612&w=0&h=YjsUQjk20jq6K1RsCynhHJENEToy7y3PCDlbuChsxC0=" + ")",
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        height: '720px'
         }} >
        <Grid align='center'>
        <h2 style={{ color: 'white' }}>Expression Analysis</h2>
        </Grid>
	<Paper style={paperStyle}>
	<Chart
	dataSource={data2}
    height="300"
    width = "500"
	>
    <ValueAxis position="left" >
    <Title text="Frequency of emotion" />
    </ValueAxis>
	<Series valueField="value" argumentField="argument" type="bar" />
    <Title text={"Person ID: "+location.state.data.uid}/>
    <Legend visible={false}></Legend>
	</Chart>

    </Paper>
    </div>
    
);
}

export default Graph;
