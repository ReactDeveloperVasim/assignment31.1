import React, { useState } from 'react';
import { Grid,Card, Button, CardContent } from '@mui/material';

const PracticeOnClickClr = () => {
  const [clr, setClr] = useState(false);

//   const toggleColor = () => {
//     const newColor = clr === "red" ? "green" : "red"; 
//     setClr(newColor);
//   };



  return (
    <Grid container spacing={2}>
      <Grid item xs={3}></Grid>
      <Grid item xs={6}>
            <Card sx={{ height: "500px", width: "500px", bgcolor:clr ? "red" : "green" , border: "5px solid black" }}>
                <CardContent>

                </CardContent>
            </Card>
      </Grid>
      <Grid item xs={3}></Grid>
      <Grid item xs={4}></Grid>
      <Grid item xs={4}>
        <Button variant='contained' fullWidth onClick={()=>setClr(!clr)}>{clr ? "On" : "Off"}</Button>
      </Grid>
      <Grid item xs={4}></Grid>
    </Grid>
  );
};

export default PracticeOnClickClr;
